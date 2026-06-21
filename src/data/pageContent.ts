import { ROUTES, type TileColor } from './routes'

export interface BlogPost {
  id: string
  title: string
  slug: string
  image?: string
}

export interface PageContent {
  title: string
  color: TileColor
  paragraphs: string[]
  showBlog?: boolean
  blogPosts?: BlogPost[]
}

export const PAGE_CONTENT: Record<string, PageContent> = {
  [ROUTES.journalistin]: {
    title: 'Journalistin',
    color: 'orange',
    paragraphs: [
      'Menschen, Orte, Kultur: Mich interessieren Themen, die auf den ersten Blick klar wirken und beim zweiten Hinsehen mehr erzählen.',
    ],
    showBlog: true,
    blogPosts: [],
  },
  [ROUTES.gastrokolumnistin]: {
    title: 'Gastrokolumnistin',
    color: 'blue',
    paragraphs: [
      'Kulinarische Streifzüge durch Berlin: Eine Kolumne mit Blick, Haltung und Rhythmus.',
      'Manchmal pointiert, manchmal persönlich, gern mit einem leichten Knick im Satz.',
    ],
    showBlog: true,
    blogPosts: [],
  },
  [ROUTES.prRedaktion]: {
    title: 'PR & Redaktion',
    color: 'green',
    paragraphs: [
      'Anzeigenumfeldgestaltung mit Qualitätsanspruch: Ich schreibe Texte für Unternehmen, Kulturinstitutionen, Gastronomie, Veranstaltungen und Marken.',
      'Dazu gehören Pressemitteilungen, Webtexte, Newsletter, Social-Media-Texte, Porträts und redaktionelle Beiträge. Der Ton richtet sich nach dem Thema, nicht nach der Floskel.',
    ],
    showBlog: true,
    blogPosts: [],
  },
  [ROUTES.autorin]: {
    title: 'Autorin',
    color: 'yellow',
    paragraphs: [
      'Märchen, Novellen, absurde Literatur: Ich entwickle Bücher, Reihen, Figuren und erzählerische Konzepte.',
      'Besonders reizt mich der Perspektivwechsel: vertraute Stoffe neu betrachten, Stimmen hörbar machen, Humor und Tiefe verbinden. Meine Texte dürfen klug, absurd, hart sein, aber nie leblos.',
    ],
    showBlog: true,
    blogPosts: [],
  },
  [ROUTES.genussexpertin]: {
    title: 'Genussexpertin',
    color: 'red',
    paragraphs: [
      'Bier-, Käse- und Kaffeesommelière: Ich engagiere mich für Genusskultur – mit Tastings, vhs-Kursen, Foodpairing, Beratung und Projektentwicklung.',
    ],
    showBlog: true,
    blogPosts: [],
  },
  [ROUTES.mehrAlsText]: {
    title: 'Mehr als Text',
    color: 'purple',
    paragraphs: [
      'Diplompädagogin, Rettungssanitäterin und ehrenamtliche Telefonberaterin: Ich bringe Erfahrung mit Menschen, Gruppen, Krisen und klarer Kommunikation mit.',
      'Das schärft meinen Blick für Situationen, Zwischentöne und das, was wirklich wichtig ist.',
    ],
    showBlog: true,
    blogPosts: [],
  },
}
