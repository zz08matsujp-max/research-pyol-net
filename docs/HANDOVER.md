# research.pyol.net 引き継ぎ書 v1.1

**初版作成日**: 2026年5月15日（v1.0）
**改訂日**: 2026年5月16日（v1.1：v0.1 最終仕上げ反映）
**作成者**: Claude（v0.1 実装担当） / 松浦 歳宣（最終確認・確定）
**位置付け**: 後継者向け引き継ぎドキュメント
**前提読書**: `research_pyol_net_設計指示書_v1.4.md`（同階層・最新版）、`docs/GLOSSARY.md`

---

## 0. このドキュメントの読み方

本書は **20 年スパンの研究プロジェクトの一部として、将来 Toshi さん以外の人が引き継ぐ可能性がある前提** で書かれています。最初に読むべき順序は:

1. `research_pyol_net_設計指示書_v1.4.md` ── プロジェクト全体の意図と判断（最新版、v0.1 完成形を反映）
2. 本書（HANDOVER.md） ── 実装の現状と運用手順
3. `docs/GLOSSARY.md` ── 翻訳・用語の中央辞書
4. `構想記録_煩悩ウイルスマッピング_v1.md` ── 研究プログラム本体（v1.7、§16.4 個人化問題まで）

---

## 1. v0.1 で実装した内容

### 1.1 ページ全 18 件（日英バイリンガル完全対応）+ SEO 補助ファイル

| URL | 言語 | 内容 |
|---|---|---|
| `/` | JA | トップ（Organization JSON-LD） |
| `/about/` | JA | プロフィール（Person JSON-LD、経歴 / 技術背景 / 自己開示 3 件 / 思想的核心 / 連絡を歓迎する方） |
| `/concept/` | JA | 研究プログラム一覧 |
| `/concept/bonno-virus-mapping/` | JA | 構想記録 v1.7 全文（§0 + §1〜§16 + Appendix、約 150KB） |
| `/essays/` | JA | 論考一覧 |
| `/essays/precision-economics/` | JA | §15 独立記事（ScholarlyArticle JSON-LD、固有 OGP、References 7 件、Contact 節） |
| `/essays/buddhism-as-coordinate-system/` | JA | §0 独立記事（同上、References 10 件） |
| `/contact/` | JA | 連絡先（matsuura@pyol.net、対応言語） |
| `/en/...` | EN | 上記すべての英訳ペア（9 ページ） |
| `/sitemap.xml` | - | 16 URL、hreflang 相互参照付き |
| `/robots.txt` | - | クローラー許可、sitemap 位置指定 |
| `/.htaccess` | - | UTF-8 強制 + 301 リダイレクト |

### 1.2 共通機能

- 日英相互リンク（hreflang 自動設定 + ヘッダー言語切替ボタン）
- OGP / Twitter Card メタデータ全ページ（論考は **固有 OGP 画像**、他は default）
- **Schema.org JSON-LD 構造化データ**（Organization / Person / ScholarlyArticle / PostalAddress / CreativeWork）
- **og:type** 論考は "article"、他は "website"
- レスポンシブデザイン（モバイル 375px 〜 デスクトップ）
- ダークモード自動対応（システム設定追従）
- フォント: Noto Sans JP（日本語） / Inter（英語）、Google Fonts CDN
- アクセントカラー: `#1E3A5F`（既存 ai.pyol.net と統一）

### 1.3 中央ドキュメント

- `docs/GLOSSARY.md` v1.1（v1.2 で「個人化問題」「Level 0 自己反省的階層」等の新術語を追加予定）
- `research_pyol_net_設計指示書_v1.4.md` ── 設計指示書（最新版）

### 1.4 GitHub Public 公開

- `https://github.com/zz08matsujp-max/research-pyol-net`（Public、CC BY 4.0、Topics 14、Website 設定済）
- メインブランチ `main`、`.gitignore` で `dist/` `node_modules/` `.smbdelete*` `._*` 等を除外

---

## 2. v0.1 で未実装（v0.2 送り）

| 項目 | 理由 | v0.2 での対応 |
|---|---|---|
| Pagefind 検索 | v0.1 スコープ外 | 日英両対応で導入 |
| RSS フィード | v0.1 スコープ外 | `/rss.xml`, `/en/rss.xml` |
| @astrojs/sitemap | v3.x と Astro 4.16 互換性問題 | Astro 5.x 移行と合わせて、現状の手書き `sitemap.xml.ts` を置換 |
| Schema.org 拡張 | v0.1 は基本セット（Organization/Person/ScholarlyArticle）のみ | CitationCount、ResearcherID、BreadcrumbList 等の追加 |
| §13 / §14 独立記事化 | v0.1 では §0 と §15 のみ | §13 ExPFC、§14 煩悩埋め込みを順次独立記事化、英訳 |
| 仏教学者による術語校閲 | v0.1 では暫定 | 駒澤大 / 龍谷大 / 仏教大 と協議 |
| ネイティブチェック | v0.1 では Claude 初稿のみ | 英訳のブラッシュアップ |
| Google/Bing 検索エンジン登録 | v0.1 ではサイトマップ送信前 | Search Console / Webmaster Tools 登録 + sitemap 送信 |
| LessWrong クロスポスト | Toshi さん熟成中 | 英訳作業の負担と英語コメント対応戦略の確立後 |
| アクセス解析 | v0.1 ではなし | Cloudflare Web Analytics 等のプライバシー重視ツール |

**v0.1 で前倒し達成（全 11 項目）**:
- ✅ GitHub Public 公開（`https://github.com/zz08matsujp-max/research-pyol-net`、Topics 14、Website 設定）
- ✅ 構想記録 v1.7（v1.4 → v1.5 §16 → v1.6 §0 → v1.7 §16.4 の段階的発展）
  - §0「研究の根本目的」── Level 1 方法論的階層を明示（仏教を座標系として採用）
  - §16「実装上の課題と対応戦略」── 3 つの課題と対応戦略
  - §16.4「個人化問題と煩悩感受性プロファイル」── Level 0 自己反省的階層を示唆
- ✅ 独立論考 2 本（§15 精密の経済、§0 仏教を座標系として採用する）の日英両方、APA References + Contact + 著者脚注 + 固有 OGP
- ✅ SEO フルセット：robots.txt、sitemap.xml（hreflang 含む）、og:type article、Schema.org JSON-LD
- ✅ OGP 画像フルセット（default + 論考 2 種、1200×630、MindSeed Institute 統一デザイン）
- ✅ URL slug 整理（`/concept/bonno-virus-mapping/` バージョン番号なし）+ `.htaccess` 301 リダイレクト
- ✅ X バイリンガル告知（AI Safety 機関メンション）
- ✅ 経歴記述の最終確定（v1.3 確定形、サムスンSDS / 個人事業 / 職業リハビリテーションセンター）
- ✅ メールアドレス確定（matsuura@pyol.net）
- ✅ 論考の学術的品質向上（自賛的表現除去、BibTeX citation key 一意化、kleshas 追加、横展開具体例）
- ✅ 設計指示書 v1.4 / HANDOVER v1.1

---

## 3. 各ファイルの役割

### 3.1 ルート

| ファイル | 役割 | 編集頻度 |
|---|---|---|
| `package.json` | npm 依存定義、ビルドスクリプト | 低 |
| `astro.config.mjs` | Astro サイト設定（i18n のみ） | 低 |
| `tsconfig.json` | TypeScript strict 設定 | 低 |
| `.gitignore` | dist, node_modules, ._*, .smbdelete* を除外 | 低 |
| `LICENSE` | CC BY 4.0 | 不変 |
| `README.md` | プロジェクト概要、開発コマンド | 中 |

### 3.2 src/

| パス | 役割 |
|---|---|
| `src/config.ts` | サイト全体の定数（URL、Email、Twitter ハンドル、著者情報など） |
| `src/i18n/ja.ts`, `en.ts` | UI 文言辞書（ナビ、フッター、共通文言） |
| `src/i18n/index.ts` | 言語判定ヘルパ、日英ペア URL 生成 |
| `src/styles/global.css` | サイト全体の CSS（カラーパレット、ヒーロー、コールアウト、layered-list ほか） |
| `src/layouts/BaseLayout.astro` | 全ページの基本骨格、メタタグ自動生成 |
| `src/layouts/EssayLayout.astro` | 論考と構想記録に共通の記事レイアウト（タイトル / メタ情報 / 要約 / 本文 / 引用情報 / 言語切替） |
| `src/components/Header.astro` | サイト共通ヘッダー、ロゴ + ナビ + 言語切替 |
| `src/components/Footer.astro` | フッター、Work in Progress バッジ、ライセンス、GitHub リンク |
| `src/components/LanguageSwitcher.astro` | 単独言語切替コンポーネント（記事内補足用） |
| `src/components/CitationBox.astro` | BibTeX / APA / Chicago の3形式引用情報、details 折り畳み |
| `src/content/config.ts` | コンテンツコレクション定義（4種類: ja-essays, en-essays, ja-concept, en-concept） |

### 3.3 src/pages/

ファイル名がそのまま URL になる Astro の規約に従う。`[slug].astro` は動的ルーティング。

### 3.4 src/content/

Markdown コンテンツ。フロントマターで `slug: "..."` を必ず明示する（Astro の slug 自動生成がピリオド削除など予期せぬ挙動をするため）。

### 3.5 dist/

ビルド成果物。Toshi さんが FTP でアップロードする対象。中身を `research.pyol.net` のドキュメントルート直下に配置する。

### 3.6 docs/

| ファイル | 役割 |
|---|---|
| `GLOSSARY.md` | 用語対訳表 v1.1 |
| `HANDOVER.md` | 本書 |

### 3.7 ルート直下の素材ファイル（参考用、変更しない）

- `構想記録_煩悩ウイルスマッピング_v1.md` ── 構想記録 v1.7 原文（§0 + §1〜§16、§16.4 個人化問題含む）
- `LLM訓練手法選定ガイド_v1.md` ── LLM 訓練の階層解説
- `research_pyol_net_設計指示書_v1.0.md` ── 設計指示書 v1.0（履歴、経歴記述は v1.3 確定形に遡及更新済）
- `research_pyol_net_設計指示書_v1.1.md` ── v1.1（履歴、同上）
- `research_pyol_net_設計指示書_v1.2.md` ── v1.2（履歴）
- `research_pyol_net_設計指示書_v1.3.md` ── v1.3（履歴）
- `research_pyol_net_設計指示書_v1.4.md` ── **v1.4（最新版）**

---

## 4. カスタマイズ箇所

### 4.1 色を変える

`src/styles/global.css` 冒頭の CSS 変数を編集：

```css
:root {
  --color-bg: #FFFFFF;
  --color-bg-alt: #FAFAFA;
  --color-text: #1A1A1A;
  --color-accent: #1E3A5F;     /* メインアクセント */
  --color-link: #2C5282;
  --color-border: #E2E8F0;
}
```

ダークモードは `@media (prefers-color-scheme: dark)` ブロックで上書き。

### 4.2 フォントを変える

`src/styles/global.css` の `--font-ja`, `--font-en` を編集。Google Fonts URL は `src/layouts/BaseLayout.astro` の `<link href="https://fonts.googleapis.com/...">` で指定。

### 4.3 サイト名・メールアドレス・SNS を変える

`src/config.ts` の `SITE` オブジェクトを編集：

```typescript
export const SITE = {
  url: 'https://research.pyol.net',
  name: 'Mindseed Research',
  email: 'matsuura@pyol.net',
  twitter: '@mindseed0805',
  githubRepo: 'https://github.com/zz08matsujp-max/research-pyol-net',
  ...
};
```

### 4.4 ナビゲーション項目を変える

`src/i18n/ja.ts`, `src/i18n/en.ts` の `nav` 部分を編集。`src/components/Header.astro` の `<ul class="nav-list">` でリンクを追加・削除。

### 4.5 新しい論考を追加する

1. `src/content/ja-essays/<slug>.md` と `src/content/en-essays/<slug>.md` を作成
2. フロントマターを既存記事（`precision-economics.md`）と同じ形式で記述、`slug: "<slug>"` を必ず指定
3. ビルドすると `/essays/<slug>/` と `/en/essays/<slug>/` が自動生成される
4. `src/pages/essays/index.astro` と `src/pages/en/essays/index.astro` の一覧に手動でリンクを追加

---

## 5. デプロイ手順

### 5.1 Claude にビルドを依頼する

「ビルドして dist/ を最新化してください」と依頼すると、Claude が以下を実行する：

```bash
# /tmp 上でビルド
BUILD_DIR=/tmp/research-build
SRC=/sessions/.../mnt/research.pyol.net

rsync -a --delete --exclude='._*' --exclude='.smbdelete*' \
  "$SRC/src/" "$BUILD_DIR/src/"
cd "$BUILD_DIR"
npm run build

# dist を反映
rsync -a --exclude='._*' --exclude='.smbdelete*' \
  "$BUILD_DIR/dist/" "$SRC/dist/"
```

### 5.2 Toshi さんが FTP/SFTP でアップロードする

1. FileZilla 等の FTP クライアントを起動
2. レンタルサーバーの `research.pyol.net` ドキュメントルートに接続
3. `/Volumes/disk1/MacBook/research.pyol.net/dist/` の **中身** を選択（dist フォルダ自体ではない）
4. **隠しファイル除外設定**を有効に（`.smbdelete*`、`._*`、`.DS_Store` を送らない）
5. 古い残骸ディレクトリ（`bonno-virus-mapping-v14` など、ピリオド削除版）が dist 内に残っていれば事前に削除
6. アップロード実行
7. ブラウザで `https://research.pyol.net/` と `/en/` が表示されることを確認

### 5.3 自分でビルドする場合（Toshi さん環境）

```bash
cd /Volumes/disk1/MacBook/research.pyol.net
npm install   # 初回のみ（数分かかる）
npm run build
```

`dist/` が更新される。ただしネットワークドライブ上の `npm install` は遅い。Claude sandbox でのビルドを推奨。

---

## 6. よくあるトラブルシュート

### 6.1 アップロード後に CSS が当たらない

`_astro/` ディレクトリのアップロード漏れ。FTP クライアントで隠しではないが、忘れがち。`_` で始まるディレクトリも忘れずに。

### 6.2 文字化けする

サーバーの `Content-Type` ヘッダーで charset が指定されていない可能性。`.htaccess` に以下を追加：

```
AddDefaultCharset UTF-8
```

### 6.3 言語切替リンクが正しいページに飛ばない

`src/i18n/index.ts` の `getAlternateUrl` 関数のロジックを確認。`/about/` ↔ `/en/about/` のような単純なペアは自動で解決される。

### 6.4 `bonno-virus-mapping-v14`（ピリオド削除版）の URL が生成される

Markdown フロントマターに `slug: "bonno-virus-mapping-v1.4"` が抜けている。フロントマターに必ず slug を明示。

### 6.5 ビルドエラー「The collection ... does not exist or is empty」

`src/content/<コレクション名>/` ディレクトリが空、またはコンテンツが無い。記事を追加するか、ビルド時の警告として無視してよい。

### 6.6 ビルドエラー「A content collection schema should not contain `slug`」

`src/content/config.ts` のスキーマ定義に `slug: z.string()` を含めている。削除する。Astro の予約名なので、フロントマターでのみ指定する。

### 6.7 dist/ 内に `.smbdelete*` ファイルが残る

macOS の SMB プロトコル特有の挙動。FTP 除外設定で対処。Toshi さん側で Finder（Shift+Cmd+. で隠しファイル表示）で削除しても可。

---

## 7. 翻訳の継続改善手順

### 7.1 用語の追加

新しい術語が出たら、まず `docs/GLOSSARY.md` に追加してから本文で使う。順序が逆になると一貫性が崩れる。

### 7.2 仏教術語の v0.2 校閲

駒澤大 / 龍谷大 / 仏教大の仏教学者にコンタクト → GLOSSARY.md §1 と構想記録英訳の Translator's Note 該当部分を共有 → 校閲を受ける → GLOSSARY.md を v2.0 に改訂 → 全文に反映。

### 7.3 ネイティブチェック

英訳のブラッシュアップは v0.2 で実施。LessWrong コミュニティ等で読者反応を見るのも有効。誇張表現の混入防止には GLOSSARY.md の §0.1 と本書 §11.1 を継続参照。

---

## 8. 次の v0.2 で取り組むべきこと（優先順）

1. **Astro 5.x 移行** ── sitemap integration の互換性問題を解消、新機能取り込み
2. **`@astrojs/sitemap` 再導入** ── SEO 強化
3. **Pagefind 検索** ── 全文検索（特に構想記録の長文ナビ用）
4. **§13 ExPFC 独立記事化** ── 構想記録 §13 を独立記事として再構成・英訳
5. **§14 Bonnō Embedding 独立記事化** ── 同上
6. **仏教学者校閲** ── §1 GLOSSARY を v2.0 に
7. **ネイティブチェックによる英訳ブラッシュアップ**
8. **Schema.org 構造化データ本格実装**
9. **GitHub Public Repository 公開** ── 透明性証拠として
10. **Cloudflare Web Analytics 導入** ── プライバシー重視のアクセス解析

---

## 9. 連絡先

- Toshi さん（プロジェクトオーナー）: matsuura@pyol.net
- 関連リポジトリ: https://github.com/zz08matsujp-max/research-pyol-net （v0.1 公開済み、Topics 14、Website 設定済み、main ブランチ）

---

**本書は v1.0 である。実装内容や運用が変わったら更新すること。**
