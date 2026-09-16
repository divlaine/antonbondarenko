import type { Lang } from './content';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const withBase = (path: string) => `${base}${path === '/' ? '' : path}` || '/';

export const localize = (path: string, lang: Lang) => {
  const pagePath = path === '/' ? '/' : `/${path.replace(/^\/+|\/+$/g, '')}/`;
  const localizedPath = lang === 'ru'
    ? (pagePath === '/' ? '/ru/' : `/ru${pagePath}`)
    : pagePath;

  return `${base}${localizedPath}` || '/';
};

export const switchLanguage = (pathname: string) => {
  const path = base && pathname.startsWith(`${base}/`)
    ? pathname.slice(base.length)
    : pathname === base ? '/' : pathname;
  const isRussianRoute = path === '/ru' || path.startsWith('/ru/');

  if (isRussianRoute) {
    return localize(path.slice(3) || '/', 'en');
  }

  return localize(path, 'ru');
};
