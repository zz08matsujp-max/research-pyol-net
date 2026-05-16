// src/i18n/index.ts - 言語に応じた辞書を返すユーティリティ
import { ja } from './ja';
import { en } from './en';
import type { Locale } from '../config';

export const dictionaries = { ja, en } as const;

export function t(locale: Locale) {
  return dictionaries[locale];
}

// URL パスから現在の言語を判定するヘルパ
export function getLocaleFromUrl(url: URL): Locale {
  if (url.pathname.startsWith('/en/') || url.pathname === '/en') {
    return 'en';
  }
  return 'ja';
}

// 日英ペアの相手側 URL を生成（言語切替リンク用）
export function getAlternateUrl(url: URL, currentLocale: Locale): string {
  const path = url.pathname;
  if (currentLocale === 'ja') {
    // /about/ → /en/about/
    return path === '/' ? '/en/' : `/en${path}`;
  } else {
    // /en/about/ → /about/
    const stripped = path.replace(/^\/en/, '');
    return stripped === '' ? '/' : stripped;
  }
}
