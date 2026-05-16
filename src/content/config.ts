// src/content/config.ts - Astro コンテンツコレクション定義
// 設計指示書 v1.1 §6.1 に準拠
// 日英ペアの記事を slug で結びつけるため、共通スキーマで両言語を扱う

import { defineCollection, z } from 'astro:content';

/** 論考（essays）コレクションのスキーマ */
const essaySchema = z.object({
  /** タイトル（言語ごと） */
  title: z.string(),
  /** 英語サブタイトル（日本語記事の場合のみ）。海外読者の検索性向上のため */
  englishSubtitle: z.string().optional(),
  /** 著者名（公式表記） */
  author: z.string().default('Toshinobu Matsuura'),
  /** 要約。日本語記事は150字程度、英語記事は約300語 */
  summary: z.string(),
  /** 公開日 */
  publishedAt: z.coerce.date(),
  /** 最終改訂日 */
  updatedAt: z.coerce.date().optional(),
  /** バージョン */
  version: z.string().default('v1.0'),
  /** 言語 */
  lang: z.enum(['ja', 'en']),
  /** タグ */
  tags: z.array(z.string()).default([]),
  /** ライセンス */
  license: z.string().default('CC BY 4.0'),
  /** 構想記録のどの章から派生したか */
  derivedFrom: z.string().optional(),
  /** BibTeX citation key 末尾識別子（記事ごとに一意。例: "precisionEconomics"） */
  citationKeySuffix: z.string().optional()
});

/** 構想記録（concept）コレクションのスキーマ */
const conceptSchema = z.object({
  title: z.string(),
  englishSubtitle: z.string().optional(),
  author: z.string().default('Toshinobu Matsuura'),
  summary: z.string(),
  publishedAt: z.coerce.date(),
  updatedAt: z.coerce.date().optional(),
  version: z.string(),
  lang: z.enum(['ja', 'en']),
  license: z.string().default('CC BY 4.0')
});

export const collections = {
  'ja-essays': defineCollection({ type: 'content', schema: essaySchema }),
  'en-essays': defineCollection({ type: 'content', schema: essaySchema }),
  'ja-concept': defineCollection({ type: 'content', schema: conceptSchema }),
  'en-concept': defineCollection({ type: 'content', schema: conceptSchema })
};
