export const ROUTES = {
  home: '/',
  journalistin: '/journalistin',
  gastrokolumnistin: '/gastrokolumnistin',
  prRedaktion: '/pr-redaktion',
  autorin: '/autorin',
  genussexpertin: '/genussexpertin',
  mehrAlsText: '/mehr-als-text',
  ueberMich: '/ueber-mich',
  kontakt: '/kontakt',
  impressumDatenschutz: '/impressum-datenschutz',
} as const

export type TileColor =
  | 'orange'
  | 'blue'
  | 'green'
  | 'yellow'
  | 'red'
  | 'purple'

export interface NavItem {
  label: string
  path: string
}

export interface TileItem {
  label: string
  path: string
  color: TileColor
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Journalistin', path: ROUTES.journalistin },
  { label: 'Gastrokolumnistin', path: ROUTES.gastrokolumnistin },
  { label: 'PR & Redaktion', path: ROUTES.prRedaktion },
  { label: 'Autorin', path: ROUTES.autorin },
  { label: 'Genussexpertin', path: ROUTES.genussexpertin },
  { label: 'Mehr als Text', path: ROUTES.mehrAlsText },
  { label: 'Über mich', path: ROUTES.ueberMich },
  { label: 'Kontakt', path: ROUTES.kontakt },
]

export const TILES: TileItem[] = [
  { label: 'Journalistin', path: ROUTES.journalistin, color: 'orange' },
  {
    label: 'Gastrokolumnistin',
    path: ROUTES.gastrokolumnistin,
    color: 'blue',
  },
  { label: 'PR & Redaktion', path: ROUTES.prRedaktion, color: 'green' },
  { label: 'Autorin', path: ROUTES.autorin, color: 'yellow' },
  { label: 'Genussexpertin', path: ROUTES.genussexpertin, color: 'red' },
  { label: 'Mehr als Text', path: ROUTES.mehrAlsText, color: 'purple' },
]

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/fokus_text/',
  linkedin: 'https://www.linkedin.com/company/fokus-text',
  facebook:
    'https://www.facebook.com/profile.php?id=61591055794121',
} as const
