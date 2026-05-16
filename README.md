# Mindseed Research

**research.pyol.net** — マインドシード研究所の研究プログラムを公開する場 / The portal for Mindseed Research's research program.

> ⚠️ **Work in Progress / 作業中** — このサイトは v0.1 構築中です。完成前の状態を意図的に公開しています。 / This site is under construction (v0.1). The unfinished state is intentionally public as a signal of transparency.

---

## What this is（このサイトについて）

**日本語**:
本サイトは「サービス紹介サイト」ではなく、「**研究プログラムと研究者の人物の物語を公開する場**」です。マインドシード研究所（個人事業 / 松浦 歳宣）が進める、20 年スパンの研究プログラムの記録と、その思想的核心を、日本語と英語で公開していきます。

**English**:
This site is not a product showcase. It is a place to publish **the research program and the person's story behind it**. Mindseed Research is a sole-proprietorship research initiative led by Toshinobu Matsuura (Toshi), pursuing a 20-year program at the intersection of Buddhist anthropology, anti-scam engineering, and AI safety. Content is published in both Japanese and English.

## Current status / 現状（v0.1、2026-05-15 時点）

- 全 14 ページの日英バイリンガル化 ── 完了
- 構想記録 v1.4 全文（§1〜§15 + Appendix）の英訳 ── 完了
- §15 独立記事（Economies of Precision）日英 ── 完了
- About / Contact / トップ ── 本格コンテンツ投入済
- デプロイ ── Toshi さん側で FTP/SFTP アップロード作業中

## Pages

| Path | Language | Content |
|---|---|---|
| `/` | JA | Top page |
| `/about/` | JA | Profile of Toshi Matsuura |
| `/concept/` | JA | Research program overview |
| `/concept/bonno-virus-mapping-v1.4/` | JA | Concept Record v1.4 (full text) |
| `/essays/` | JA | Essays index |
| `/essays/precision-economics/` | JA | §15 standalone essay |
| `/contact/` | JA | Contact |
| `/en/...` | EN | English mirrors of all the above |

## Tech stack

- [Astro](https://astro.build/) 4.16.x — content-first static site generator
- TypeScript (strict)
- Markdown content collections (`ja-essays`, `en-essays`, `ja-concept`, `en-concept`)
- i18n: `/` (ja) and `/en/` (en), bilingual since v0.1
- Deployed via FTP/SFTP to existing pyol.net rental server
- License: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## Local development

```bash
# install dependencies (initial run only)
npm install

# start dev server at http://localhost:4321
npm run dev

# build for production (output → dist/)
npm run build

# preview production build
npm run preview

# type-check
npm run check
```

注: ネットワークドライブ上での `npm install` は時間がかかります（数分〜十数分）。Claude sandbox でのビルドが推奨されています。詳細は `docs/HANDOVER.md` §5 を参照。

## Repository structure

```
research-pyol-net/
├── README.md                              # このファイル
├── LICENSE                                # CC BY 4.0
├── astro.config.mjs                       # Astro 設定（i18n のみ）
├── package.json
├── tsconfig.json
├── 構想記録_煩悩ウイルスマッピング_v1.md     # 元素材（参考用）
├── LLM訓練手法選定ガイド_v1.md              # 元素材（参考用）
├── research_pyol_net_設計指示書_v1.0.md     # 設計指示書 v1.0（履歴）
├── research_pyol_net_設計指示書_v1.1.md     # 設計指示書 v1.1（履歴）
├── research_pyol_net_設計指示書_v1.2.md     # 設計指示書 v1.2（最新版、必読）
├── docs/
│   ├── GLOSSARY.md                        # 用語対訳表 v1.1（必読）
│   └── HANDOVER.md                        # 引き継ぎ書（必読）
├── public/
│   └── favicon.svg
├── src/
│   ├── pages/                             # ルーティング
│   ├── layouts/                           # BaseLayout, EssayLayout
│   ├── components/                        # Header, Footer, CitationBox, ...
│   ├── content/                           # Markdown コンテンツコレクション
│   ├── i18n/                              # 日英 UI 文言辞書
│   ├── styles/global.css
│   └── config.ts                          # サイト全体定数
└── dist/                                  # ビルド成果物（FTP アップロード対象）
```

詳細は `research_pyol_net_設計指示書_v1.2.md` を参照。

## Documentation

最初に読むべき順序：

1. `research_pyol_net_設計指示書_v1.2.md` ── プロジェクト全体の意図と判断
2. `docs/HANDOVER.md` ── 実装の現状と運用手順
3. `docs/GLOSSARY.md` ── 翻訳・用語の中央辞書
4. `構想記録_煩悩ウイルスマッピング_v1.md` ── 研究プログラム本体

## Contact

- Email: info@mindseed.jp
- X (旧 Twitter): @mindseed0805
- GitHub Issues: this repository（v0.2 以降公開予定）

---

**License**: CC BY 4.0 — Free to share and adapt with attribution.
