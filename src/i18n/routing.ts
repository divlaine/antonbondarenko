import type { Lang } from './content';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const withBase = (path: string) => `${base}${path === '/' ? '' : path}` || '/';

export const localize = (path: string, lang: Lang) => {
  const localizedPath = lang === 'ru' ? (path === '/' ? '/ru' : `/ru${path}`) : path;
  return withBase(localizedPath);
};

export const switchLanguage = (pathname: string) => {
  const path = base && pathname.startsWith(`${base}/`)
    ? pathname.slice(base.length)
    : pathname === base ? '/' : pathname;
  const isRussianRoute = path === '/ru' || path.startsWith('/ru/');

  if (isRussianRoute) {
    return withBase(path.slice(3) || '/');
  }

  return withBase(path === '/' ? '/ru' : `/ru${path}`);
};
