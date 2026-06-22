import { readFileSync, writeFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const source = readFileSync(join(root, 'public/datenschutz.txt'), 'utf8')

const IMPRESSUM_HEADINGS = [
  'Angaben gemäß § 5 DDG, § 5 ECG und § 25 MedienG',
  'Medieninhaberin und für den Inhalt verantwortlich',
  'Tätigkeitsbereich',
  'Urheberrecht',
  'Verbraucherstreitbeilegung',
]

function parseByHeadings(text, headings) {
  const sections = []
  let rest = text.trim()

  for (let i = 0; i < headings.length; i++) {
    const heading = headings[i]
    const nextHeading = headings[i + 1]
    const start = rest.indexOf(heading)
    if (start === -1) continue

    const contentStart = start + heading.length
    const contentEnd = nextHeading ? rest.indexOf(nextHeading, contentStart) : rest.length
    const body = rest.slice(contentStart, contentEnd).trim()
    const paragraphs = body.split(/\r?\n/).map((l) => l.trim()).filter(Boolean)

    sections.push({ heading, paragraphs })
  }

  return sections
}

function parseDatenschutz(text) {
  const sections = []
  const lines = text.split(/\r?\n/)
  let current = null

  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed) continue
    if (trimmed === 'Datenschutz:' || trimmed === 'Datenschutzerklärung') continue

    const match = trimmed.match(/^(\d+\.\s.+)$/)
    if (match) {
      if (current) sections.push(current)
      current = { heading: match[1], paragraphs: [] }
      continue
    }

    if (current) current.paragraphs.push(trimmed)
  }

  if (current) sections.push(current)
  return sections
}

const parts = source.split(/_{10,}/).map((p) => p.trim()).filter(Boolean)

function parseKontakt(text) {
  const lines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean)
  if (!lines.length) return null

  return {
    heading: lines[0].replace(/:$/, ''),
    paragraphs: lines.slice(1),
  }
}

const kontaktText = parts[0] ?? ''
const impressumText = parts[1]?.replace(/^Impressum\s*\/\s*Offenlegung\s*/i, '') ?? ''
const datenschutzText = parts[2] ?? ''

const KONTAKT_SECTION = parseKontakt(kontaktText)
const IMPRESSUM_SECTIONS = parseByHeadings(impressumText, IMPRESSUM_HEADINGS)
const DATENSCHUTZ_SECTIONS = parseDatenschutz(datenschutzText)

function escapeString(s) {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
}

function formatSections(name, sections) {
  const items = sections
    .map(
      (s) => `  {
    heading: '${escapeString(s.heading)}',
    paragraphs: [
${s.paragraphs.map((p) => `      '${escapeString(p)}',`).join('\n')}
    ],
  }`,
    )
    .join(',\n')

  return `export const ${name}: LegalSection[] = [\n${items},\n]`
}

function formatSection(section) {
  return `{
  heading: '${escapeString(section.heading)}',
  paragraphs: [
${section.paragraphs.map((p) => `    '${escapeString(p)}',`).join('\n')}
  ],
}`
}

const kontaktExport = KONTAKT_SECTION
  ? `export const KONTAKT_SECTION: LegalSection = ${formatSection(KONTAKT_SECTION)}`
  : 'export const KONTAKT_SECTION: LegalSection | null = null'

const output = `// Generated from public/datenschutz.txt — run: node scripts/import-datenschutz.mjs
export interface LegalSection {
  heading: string
  paragraphs: string[]
}

${kontaktExport}

${formatSections('IMPRESSUM_SECTIONS', IMPRESSUM_SECTIONS)}

${formatSections('DATENSCHUTZ_SECTIONS', DATENSCHUTZ_SECTIONS)}
`

writeFileSync(join(root, 'src/data/impressumDatenschutz.ts'), output, 'utf8')
console.log(
  'Imported',
  KONTAKT_SECTION ? 'Kontakt,' : 'no Kontakt,',
  IMPRESSUM_SECTIONS.length,
  'Impressum and',
  DATENSCHUTZ_SECTIONS.length,
  'Datenschutz sections.',
)
