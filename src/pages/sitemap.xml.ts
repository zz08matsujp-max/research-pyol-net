// src/pages/sitemap.xml.ts - Astro エンドポイントで sitemap.xml を動的生成
// @astrojs/sitemap が Astro 4.16 と互換性問題を起こすため、手書き相当のものを動的生成
// hreflang 相互参照を含む（多言語 SEO のため）
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '../config';

interface SitemapEntry {
  jaPath: string;
  enPath: string;
  /** 最終更新日（ISO 形式）。未指定なら今日 */
  lastmod?: string;
  /** 変更頻度 */
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  /** 優先度 0.0–1.0 */
  priority?: number;
}

export const GET: APIRoute = async () => {
  // 静的ページ（日英ペア）
  const staticPairs: SitemapEntry[] = [
    { jaPath: '/', enPath: '/en/', changefreq: 'monthly', priority: 1.0 },
    { jaPath: '/about/', enPath: '/en/about/', changefreq: 'monthly', priority: 0.8 },
    { jaPath: '/concept/', enPath: '/en/concept/', changefreq: 'monthly', priority: 0.8 },
    { jaPath: '/essays/', enPath: '/en/essays/', changefreq: 'monthly', priority: 0.8 },
    { jaPath: '/contact/', enPath: '/en/contact/', changefreq: 'monthly', priority: 0.7 }
  ];

  // 動的ページ（コンテンツコレクション）
  const jaEssays = await getCollection('ja-essays');
  const enEssays = await getCollection('en-essays');
  const jaConcept = await getCollection('ja-concept');
  const enConcept = await getCollection('en-concept');

  // essays: 日英ペアを slug で結合
  const essayPairs: SitemapEntry[] = jaEssays.map(jaEntry => {
    const enEntry = enEssays.find(e => e.slug === jaEntry.slug);
    const lastmod = (jaEntry.data.updatedAt || jaEntry.data.publishedAt).toISOString().split('T')[0];
    return {
      jaPath: `/essays/${jaEntry.slug}/`,
      enPath: enEntry ? `/en/essays/${enEntry.slug}/` : `/essays/${jaEntry.slug}/`,
      lastmod,
      changefreq: 'monthly',
      priority: 0.9
    };
  });

  // concept: 日英ペアを slug で結合
  const conceptPairs: SitemapEntry[] = jaConcept.map(jaEntry => {
    const enEntry = enConcept.find(e => e.slug === jaEntry.slug);
    const lastmod = (jaEntry.data.updatedAt || jaEntry.data.publishedAt).toISOString().split('T')[0];
    return {
      jaPath: `/concept/${jaEntry.slug}/`,
      enPath: enEntry ? `/en/concept/${enEntry.slug}/` : `/concept/${jaEntry.slug}/`,
      lastmod,
      changefreq: 'monthly',
      priority: 0.9
    };
  });

  const allPairs = [...staticPairs, ...essayPairs, ...conceptPairs];
  const today = new Date().toISOString().split('T')[0];

  // sitemap.xml 生成（hreflang alternate 含む）
  const urls = allPairs.flatMap(entry => {
    const lastmod = entry.lastmod ?? today;
    const changefreq = entry.changefreq ?? 'monthly';
    const priority = entry.priority ?? 0.5;

    // 同じ論理ページを 2 URL（ja, en）として登録、それぞれが alternate を持つ
    return [
      {
        loc: `${SITE.url}${entry.jaPath}`,
        alternates: [
          { hreflang: 'ja', href: `${SITE.url}${entry.jaPath}` },
          { hreflang: 'en', href: `${SITE.url}${entry.enPath}` },
          { hreflang: 'x-default', href: `${SITE.url}${entry.jaPath}` }
        ],
        lastmod,
        changefreq,
        priority
      },
      {
        loc: `${SITE.url}${entry.enPath}`,
        alternates: [
          { hreflang: 'ja', href: `${SITE.url}${entry.jaPath}` },
          { hreflang: 'en', href: `${SITE.url}${entry.enPath}` },
          { hreflang: 'x-default', href: `${SITE.url}${entry.jaPath}` }
        ],
        lastmod,
        changefreq,
        priority
      }
    ];
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
${u.alternates.map(a => `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${a.href}" />`).join('\n')}
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority.toFixed(1)}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
