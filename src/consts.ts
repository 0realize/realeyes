export type Site = {
  TITLE: string;
  DESCRIPTION: string;
  NUM_POSTS_ON_HOMEPAGE: number;
  POSTS_PER_PAGE: number;
  SITEURL: string;
}

export type Link = {
  href: string;
  label: string;
}

export const SITE: Site = {
  TITLE: '0realize',
  DESCRIPTION: 'my personal blog site lol',
  NUM_POSTS_ON_HOMEPAGE: 2,
  POSTS_PER_PAGE: 5,
  SITEURL: 'https://0realize.vercel.app/',
}

export const NAV_LINKS: Link[] = [
  { href: '/blog', label: 'blog' },
  { href: '/authors', label: 'authors' },
  { href: '/handouts', label: 'handouts'},
  { href: '/about', label: 'about' },
  { href: '/tags', label: 'tags' },
]

export const SOCIAL_LINKS: Link[] = [
]
