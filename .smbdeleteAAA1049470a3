# research.pyol.net 構築指示書 兼 概要設計 v1.0

**作成日**: 2026年5月15日
**作成者**: マインドシード研究所 / 松浦 歳宣
**対象**: Claude Code（実装エージェント）
**目的**: 共鳴者発見のための研究層サイトを最小版（v0.1）で立ち上げる
**期限目安**: 2〜3週間で v0.1 公開

*サーバープロジェクトルート：https://research.pyol.net
*ローカルプロジェクトルート:/Volumes/disk1/MacBook/research.pyol.net
*レスポンシブデザインすること
---

## 1. プロジェクト目的（最重要：実装前に必ず読む）

本サイトは「サービス紹介サイト」ではない。「**研究プログラムと研究者の人物の物語を公開する場**」である。実装判断に迷ったら、この一点に立ち返ること。

### 1.1 想定読者（優先順）

1. 海外のAI Safety / Alignment 研究者（Anthropic, DeepMind, MIRI, LessWrong コミュニティ）
2. 日本国内の認知科学・AI研究者（東大、京大、東工大、東北大、産総研）
3. 仏教学者で現代AIに関心を持つ層（駒澤大、龍谷大、仏教大）
4. 詐欺被害研究者（日大 木村敦氏など）
5. 後継者候補となる大学院生・若手研究者

### 1.2 達成すべき UX 目標

サイト訪問者が **5分以内に** 以下を理解できること：

- 松浦歳宣（Toshi Matsuura）が何者か（経歴と思想）
- マインドシード研究所が何をしているか（研究プログラムの骨格）
- §15「精密の経済」が何を主張しているか（思想的核心）
- ai.pyol.net という実動アプリが存在する（論考ではなく実装の証拠）
- どうやって連絡を取れるか（共鳴者からの返信を受け入れる導線）

---

## 2. 制約と前提

### 2.1 技術的制約

- 開発環境: macOS + VSCode、Windows 11 + VSCode（両方で動作すること）
- 開発者背景: 元基盤系エンジニア（C/C++/アセンブラ）、PHP/MySQL は熟練、Next.js/React の経験あり
- 既存資産: pyol.net（PHP/MySQL）、ai.pyol.net（実装済み詐欺対策ツール）
- 既存環境を破壊しないこと。新サブドメインとして独立構築すること

### 2.2 設計哲学

- **3行から始める**: v0.1 は最小機能のみ。完成を待たない
- **枯れた技術を使う**: 新しいだけの技術は採用しない
- **シンプル・イズ・ベスト**: 機能を増やすより、本質を残す
- **冗長性設計**: 単一障害点を作らない（静的サイトなのでビルド済HTMLは別途バックアップ）
- **透明性**: GitHub公開でバージョン履歴が研究プログラムの透明性証拠となる

### 2.3 公開戦略

- **段階公開**: v0.1（最小版、2-3週間） → v0.2（英語版完成、4-6週間） → v1.0（全文公開、3ヶ月後）
- **未完成での公開を恐れない**: README に "Work in Progress" を明記、誠実さのシグナルとして活用

---

## 3. 技術スタック

### 3.1 推奨構成（Primary）

| レイヤ | 技術 | 理由 |
|---|---|---|
| サイトジェネレータ | **Astro** 4.x | Markdown コンテンツファースト、i18n標準対応、TypeScript対応、学術系で実績多 |
| コンテンツ管理 | Markdown ファイル（Git管理） | バージョン履歴が研究プログラムの透明性証拠になる |
| ホスティング | **Cloudflare Pages**（または GitHub Pages） | 無料、CDN付き、独自ドメイン対応 |
| ソース管理 | GitHub Public Repository | 学術界の信頼性、バージョン公開 |
| ドメイン | `research.pyol.net` | CNAME で Cloudflare Pages に接続 |
| 多言語 | Astro 標準 i18n（`/ja/`, `/en/`） | デフォルトは日本語、英語版は `/en/` 配下 |
| 検索 | Pagefind（静的全文検索） | サーバ不要、研究文書の検索性確保 |
| アクセス解析 | Cloudflare Web Analytics（プライバシー重視） | Cookieless、GDPR適合 |

### 3.2 代替案（Secondary）

- Hugo（Go製、ビルド高速、ただし開発者の Next.js 経験を活かしにくい）
- Next.js Static Export（オーバースペックだが既知技術）

最終判断は Toshiさんに委ねるが、**Astro を強く推奨**。理由：

1. Markdown を第一級市民として扱う設計（構想記録を直接公開できる）
2. i18n が標準機能（追加プラグイン不要）
3. ビルド出力は純粋な静的HTML（PHP不要、Cloudflare/GitHub Pagesで動く）
4. 軽量（Lighthouseスコア 95+ が標準的に出る）
5. 学術系サイトでの採用例が増加中

---

## 4. サイト構造

### 4.1 ページ一覧（v0.1 最小版）

| パス | 内容 | 言語 | 優先度 |
|---|---|---|---|
| `/` | トップページ（日本語） | JA | P0 |
| `/about/` | 松浦歳宣プロフィール | JA | P0 |
| `/concept/` | 研究プログラム一覧 | JA | P0 |
| `/concept/bonno-virus-mapping-v1.4/` | 構想記録 v1.4 全文 | JA | P0 |
| `/essays/precision-economics/` | §15 独立記事 | JA | P0 |
| `/contact/` | 連絡先 | JA | P0 |
| `/en/` | トップページ（英語） | EN | P1 |
| `/en/about/` | プロフィール英語版 | EN | P1 |
| `/en/essays/precision-economics/` | §15 英語版 | EN | P1 |
| `/en/contact/` | 連絡先英語版 | EN | P1 |

P0 = v0.1で公開、P1 = v0.2で追加。

### 4.2 v0.2 以降の追加予定（将来の拡張用に構造だけ用意しておく）

- `/concept/bonno-virus-mapping-v1.4-en/` - 構想記録英訳
- `/essays/external-prefrontal-cortex/` - §13独立記事
- `/essays/bonno-embedding/` - §14独立記事
- `/journal/` - 研究日誌（不定期更新）
- `/publications/` - 論文・プレプリント一覧
- `/rss.xml` - RSS フィード

---

## 5. ページ別仕様

### 5.1 トップページ `/`

**設計意図**: 5分以内のUX目標を、トップだけで概ね達成すること。

**構成要素（上から順）**:

1. **ヘッダー**: ロゴ「Mindseed Research」、ナビ（About / Concept / Essays / Contact / EN）
2. **ヒーローセクション**:
   - 大見出し: 「煩悩 × AI ── 詐欺対策から始まる、人間理解の研究プログラム」
   - 小見出し: 「20年スパンの長期研究 / マインドシード研究所」
   - サブテキスト: 1〜2文で研究プログラム全体の要約
3. **研究者紹介ブロック**:
   - 松浦歳宣の3行プロフィール（68歳、元基盤系エンジニア、独立研究者）
   - 経歴ハイライト（関電10年 → サムスン30年 → 退職後独立）
   - 「About me」リンク
4. **3層構造の説明ブロック**:
   - 短期: PYOL マインドミラー（ai.pyol.net、実動）
   - 中期: 仏教×AI（煩悩マッピング、構想中）
   - 長期: ASI時代のAI基盤への寄与
5. **核心論考の予告ブロック**:
   - §15「精密の経済 vs 規模の経済」へのリンク
   - 「大手AIが構造的に立ち入れない領域がある」の一文を強調
6. **実装の証拠ブロック**:
   - ai.pyol.net へのリンク（スクリーンショット付き）
   - 「論考ではなく動いている実装」を明示
7. **連絡先ブロック**: Contact ページへの導線
8. **フッター**: プライバシー、利用規約、英語版リンク、GitHub リポジトリリンク

**デザイン要件**:

- ミニマル、学術系（Stanford HAI、MIT CSAIL、Anthropic の研究ページが参考）
- 白基調、控えめなアクセントカラー
- 装飾的アニメーション禁止（誠実さを損なう）
- フォント: 日本語は Noto Sans JP、英語は Inter
- レスポンシブ必須（モバイル経由の研究者も多い）

### 5.2 プロフィールページ `/about/`

**設計意図**: Toshiさん個人の物語を、強い磁力として提示する。

**構成要素**:

1. **基本情報**
   - 氏名: 松浦 歳宣（Matsuura Toshinobu / Toshi）
   - 年齢: 68歳
   - 所属: マインドシード研究所（個人事業）
   - 居住地: 和歌山市
   - 連絡先: info@mindseed.jp

2. **経歴（時系列）**
   - 関西電力 10年（20代〜30代前半）: 計装基盤、リレー制御盤の設計と実装、電力システムの規律を骨に刻む
   - サムスン電子 30年（30代〜60代）: 製品開発、基盤系エンジニア、「ミスマッチが一番相性がいい」を学ぶ
   - 退職後 職業訓練校 3年: 電気理論講師、「脱落者を出さない」を最優先
   - A型・B型事業所 半年見学: 障害者就労支援の現場を内側から把握
   - 現在: マインドシード研究所として独立、20年スパンの研究プログラムに着手

3. **技術背景**
   - C/C++・アセンブラ（40年以上）
   - 8bit CPU から現代までの基盤系エンジニアリングを経験
   - 現在: PHP/MySQL, Flutter/Firebase, Next.js, React Native, Claude/ChatGPT/Claude Code を業務統合

4. **重要な人生イベント**（自己開示として記載）
   - **90年代BBS事件**: 30歳頃、SunOS による草の根BBS運営、9回線モデム、会員300名。刑事5名による逮捕、6名の弁護士による無償弁護も敗訴。「ハードディスクが猥褻物として陳列された」日本初の判例。執行猶予3年。
   - **CineBASIC開発の挫折**: 半年間、動画生成AIの揺らぎ制御に取り組んで断念。「生成AIの揺らぎ」を体感的に理解。
   - **配偶者の詐欺被害（2026年5月）**: FX投資詐欺で約700万円。これを契機に長年温めていた詐欺対策構想を本格化。

5. **思想的核心**
   - 「Protect Your Only Life」哲学
   - ミスマッチ思想（サムスン由来）
   - 「IT業界の野党勢力」としての自己定義
   - 20年スパンの研究と、後継者への引き継ぎ

6. **連絡を歓迎する人**
   - AI Safety / Alignment 研究者
   - 認知科学・神経科学研究者
   - 仏教学者
   - 詐欺被害研究者
   - 後継者候補となる若手研究者

**記述上の注意**:

- 業務上の機密保持があるため、関電・サムスン時代の**具体的な担当技術内容には踏み込まない**
- 役割と思想形成への影響を語るに留める
- BBS事件は公開情報なので明記してよい
- 文体は淡々と、誇張せず

### 5.3 構想記録ページ `/concept/bonno-virus-mapping-v1.4/`

**設計意図**: 構想記録 v1.4 全文を HTML として公開。PDFも併設。

**構成要素**:

1. **メタ情報**: 作成日、バージョン、ライセンス（後述）、PDF版ダウンロードリンク
2. **目次**: 自動生成、サイドバー固定表示（デスクトップ）、ハンバーガー（モバイル）
3. **本文**: Markdown を HTML に変換、見出しにアンカーリンク（引用しやすく）
4. **引用情報ブロック**: BibTeX、APA、Chicago形式での引用情報を提供
5. **改訂履歴**: v1.0 → v1.4 までの変更点を時系列で表示
6. **関連リンク**: §15、§14、§13 の独立記事へのアンカー

**実装上の注意**:

- 各章 (§1, §2, ...) にアンカーリンク `#section-15` の形式で
- 数式が出てきた場合は KaTeX で表示
- 図表があれば SVG または静的画像で
- 印刷時に綺麗に出るよう CSS の `@media print` を設定

### 5.4 §15 独立記事 `/essays/precision-economics/`

**設計意図**: 最も拡散性の高い論考を、構想記録から切り出して独立配信する。

**構成要素**:

1. **タイトル**: 「精密の経済 vs 規模の経済 ── 大手AIが立ち入れない領域について」
2. **英語サブタイトル**: "Economies of Precision vs Economies of Scale: The Domain Big AI Cannot Enter"
3. **要約（150字）**: SNSやLLMで簡単に共有されることを想定
4. **本文**: 構想記録 §15 をベースに、独立記事として読めるよう導入と結論を加筆
5. **引用情報**: BibTeX、APA、Chicago
6. **共有ボタン**: X、Facebook、LinkedIn、はてなブックマーク
7. **英語版へのリンク**

### 5.5 連絡先ページ `/contact/`

**設計意図**: 共鳴者からの返信を最大化する導線。

**構成要素**:

1. **歓迎する連絡内容**: 共同研究、批判、後継者候補からの接触、メディア取材、引用依頼
2. **連絡手段**:
   - Email: info@mindseed.jp（主）
   - GitHub Issues: リポジトリの Issues ページへリンク（公開議論用）
   - X (旧Twitter): @mindseed0805
3. **返信ポリシー**: 「すべてに返信を約束はできないが、目を通します」
4. **言語**: 日本語、英語、可能なら韓国語も歓迎

---

## 6. コンテンツ要件

### 6.1 既存資産の取り込み

以下の文書を Markdown として `src/content/` 配下に配置：

```
src/content/
├── ja/
│   ├── concept/
│   │   └── bonno-virus-mapping-v1.4.md       # 構想記録 v1.4 全文
│   └── essays/
│       └── precision-economics.md             # §15 独立記事化
└── en/
    ├── concept/
    │   └── bonno-virus-mapping-v1.4.md       # 英訳（v0.2で追加）
    └── essays/
        └── precision-economics.md             # §15 英訳（v0.2で追加）
```

- 既存の構想記録 Markdown は、最小限の調整で取り込めること
- フロントマター（YAML）で title, date, version, tags, lang を管理

### 6.2 英語翻訳の方針

- v0.1 では英訳は不要、トップページの英語版（要約レベル）のみ用意
- v0.2 で §15 英訳を最優先
- 翻訳は Claude / GPT で初稿生成 → Toshiさん が校正、というワークフロー
- 翻訳ファイルは `/en/` 配下に同じ構造で配置

### 6.3 ライセンス

**推奨**: Creative Commons Attribution 4.0 International (CC BY 4.0)

- 学術界の標準
- 引用される時に出典明記が義務化される（Toshiさんの「これは私が最初に考えた」の証拠機能と整合）
- 改変・商用利用は許可（後継者が引き継ぎやすい）

各 Markdown ファイルのフロントマターに `license: CC BY 4.0` を明記、サイトフッターにも表示。

---

## 7. SEO とメタデータ

### 7.1 必須メタデータ

各ページに以下を設定：

- `<title>`: ページタイトル + " | Mindseed Research"
- `<meta name="description">`: 150字以内
- `<meta property="og:*">`: OGP一式（image, title, description, type, url）
- `<meta name="twitter:*">`: Twitter Card 一式
- `<link rel="canonical">`: カノニカルURL（日英で相互設定）
- `<link rel="alternate" hreflang="...">`: 多言語切替用

### 7.2 構造化データ（Schema.org）

学術コンテンツとして以下を埋め込む：

- トップ: `Organization` + `Person`（松浦歳宣）
- プロフィール: `Person` (詳細)
- 構想記録: `ScholarlyArticle`
- §15論考: `ScholarlyArticle` or `Article`

これにより Google Scholar / Semantic Scholar からの拾われやすさが向上する。

### 7.3 サイトマップとロボット

- `/sitemap.xml` 自動生成（Astroの sitemap integration）
- `/robots.txt` 設置（全許可）
- Search Console 登録（日英両ドメイン）

---

## 8. ディレクトリ構造（推奨）

```
research-pyol-net/
├── README.md                          # プロジェクト概要、Work in Progress 宣言
├── LICENSE                            # CC BY 4.0
├── astro.config.mjs                   # Astro 設定（i18n含む）
├── package.json
├── tsconfig.json
├── .github/
│   └── workflows/
│       └── deploy.yml                 # Cloudflare Pages 自動デプロイ
├── public/
│   ├── images/
│   │   ├── ogp-default.png            # OGP デフォルト画像
│   │   └── profile-toshi.jpg          # プロフィール写真（任意）
│   ├── pdf/
│   │   ├── 構想記録_v1.4.pdf
│   │   └── concept-v1.4-en.pdf        # v0.2 で追加
│   └── favicon.svg
├── src/
│   ├── pages/
│   │   ├── index.astro                # 日本語トップ
│   │   ├── about.astro
│   │   ├── concept/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro       # 動的ルーティング
│   │   ├── essays/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   ├── contact.astro
│   │   └── en/
│   │       ├── index.astro
│   │       ├── about.astro
│   │       ├── concept/
│   │       ├── essays/
│   │       └── contact.astro
│   ├── components/
│   │   ├── Header.astro               # サイト共通ヘッダー
│   │   ├── Footer.astro
│   │   ├── LanguageSwitcher.astro     # 日英切替
│   │   ├── CitationBox.astro          # 引用情報表示
│   │   └── TableOfContents.astro      # 構想記録の目次
│   ├── layouts/
│   │   ├── BaseLayout.astro           # 基本レイアウト
│   │   ├── EssayLayout.astro          # 論考用
│   │   └── ConceptLayout.astro        # 構想記録用
│   ├── content/
│   │   ├── config.ts                  # コンテンツコレクション定義
│   │   ├── ja/
│   │   │   ├── concept/
│   │   │   │   └── bonno-virus-mapping-v1.4.md
│   │   │   └── essays/
│   │   │       └── precision-economics.md
│   │   └── en/
│   │       ├── concept/               # v0.2 で追加
│   │       └── essays/                # v0.2 で追加
│   └── styles/
│       └── global.css
└── docs/
    ├── DESIGN.md                      # この設計書
    ├── DEPLOY.md                      # デプロイ手順
    └── HANDOVER.md                    # 引き継ぎ書（後継者向け）
```

---

## 9. 開発フェーズ

### Phase 1: v0.1（最小版） — 目標2〜3週間

**実装スコープ**:

1. Astro プロジェクト初期化
2. 基本レイアウト（Header, Footer, LanguageSwitcher）
3. トップページ `/`（日本語）
4. プロフィールページ `/about/`
5. 構想記録ページ `/concept/bonno-virus-mapping-v1.4/`
6. §15 独立記事 `/essays/precision-economics/`
7. 連絡先ページ `/contact/`
8. 英語版トップ `/en/`（最小版、要約のみ）
9. SEO メタデータ全ページ
10. Cloudflare Pages デプロイ設定
11. GitHub Public Repository 公開
12. `research.pyol.net` DNS 設定

**完了基準**:

- Lighthouse スコア 90+ （Performance, Accessibility, Best Practices, SEO）
- モバイル/デスクトップ両対応
- 全ページに OGP 設定
- GitHub に公開済み
- `research.pyol.net` で実際に閲覧可能

### Phase 2: v0.2（英語版充実） — 目標4〜6週間

**追加スコープ**:

1. §15 英語版 `/en/essays/precision-economics/`
2. プロフィール英語版 `/en/about/`
3. 連絡先英語版 `/en/contact/`
4. Pagefind 検索機能
5. RSS フィード
6. 構造化データ（Schema.org）の本格実装

### Phase 3: v1.0（全文公開） — 目標3ヶ月

**追加スコープ**:

1. 構想記録 v1.4 英訳全文
2. §13、§14 独立記事化
3. 研究日誌 `/journal/` 開設
4. 改訂履歴の自動表示

---

## 10. デプロイ手順

### 10.1 初回デプロイ

1. GitHub に Public リポジトリ作成: `mindseed-research/research-pyol-net`
2. Cloudflare Pages で新規プロジェクト作成、GitHub 連携
3. ビルドコマンド: `npm run build`
4. 出力ディレクトリ: `dist`
5. カスタムドメイン設定: `research.pyol.net`
6. pyol.net の DNS で CNAME レコード追加: `research.pyol.net` → `<project>.pages.dev`
7. SSL 証明書は Cloudflare が自動発行（Let's Encrypt）

### 10.2 継続デプロイ

- main ブランチへの push で自動ビルド・デプロイ
- プレビュー: PR ごとに preview URL が生成される

---

## 11. 注意事項（Claude Code への補足）

### 11.1 やってはいけないこと

- 既存の pyol.net、ai.pyol.net、その他のサブドメインに**一切手を加えない**
- pyol.net の PHP/MySQL 環境に依存させない
- データベースは使わない（v0.1〜v1.0 までは完全静的）
- ユーザー認証機能を入れない
- アクセスログを過剰に収集しない（プライバシー重視）

### 11.2 守ってほしいこと

- ファイルの冒頭に必ず `# ファイル名 + 機能概要` のコメントを入れる（Toshiさんの慣習）
- コード内のコメントは日本語で（英語が必要な場合は併記）
- production-ready, paste-ready なコードを書く
- ハードコードを避け、設定は `src/config.ts` に集約
- セマンティックHTMLを徹底（`<article>`, `<section>`, `<nav>` など）

### 11.3 引き継ぎ書（HANDOVER.md）の作成

実装完了時、`docs/HANDOVER.md` に以下を記録：

- 実装した内容と未実装の内容
- 各ファイルの役割
- カスタマイズ箇所（色、フォント、文言）
- デプロイ手順
- よくあるトラブルシュート
- 次の v0.2 で取り組むべきこと

これは20年スパンの研究プロジェクトの一部であり、**将来 Toshiさん以外の人が引き継ぐ可能性**がある前提で書く。

---

## 12. 不明点があれば

実装中に判断が分かれる箇所が出てきた場合、以下の優先順位で判断：

1. 本指示書（特に §1「プロジェクト目的」）に立ち戻る
2. Toshiさんの過去資料（CAREER_cowork.md、構想記録 v1.4、LLM訓練手法選定ガイド v1）に照らす
3. それでも判断できない場合は、Toshiさんに確認

「研究プログラムと人物の物語を公開する場」という原則がブレなければ、細部の判断は概ね収束する。

---

## 13. 最終確認チェックリスト（v0.1 公開前）

- [ ] トップページが 5分以内 UX 目標を達成しているか
- [ ] 全ページに OGP / Twitter Card が設定されているか
- [ ] モバイルで表示崩れがないか
- [ ] Lighthouse スコアが 90+ か
- [ ] GitHub リポジトリが Public で、README が整っているか
- [ ] LICENSE ファイル（CC BY 4.0）が配置されているか
- [ ] 構想記録 v1.4 全文が読めるか
- [ ] §15 独立記事が読めるか
- [ ] プロフィールページに BBS 事件含め経歴が記載されているか
- [ ] 連絡先が機能しているか（メール送信テスト）
- [ ] `research.pyol.net` で実際にアクセスできるか
- [ ] HTTPS が有効か
- [ ] サイトマップが生成されているか
- [ ] Google Search Console に登録したか

---

**本指示書は v1.0 である。Claude Code で実装中に追加判断が必要になった場合、本指示書を v1.1, v1.2 と更新していくこと。**

---

## 付録 A: Astro プロジェクト初期化コマンド例

```bash
# プロジェクト作成
npm create astro@latest research-pyol-net -- --template minimal --typescript strict --no-install --no-git

cd research-pyol-net
npm install

# 必要な統合をインストール
npm install @astrojs/sitemap @astrojs/rss
npm install -D @astrojs/check typescript

# 開発サーバー起動
npm run dev
```

## 付録 B: astro.config.mjs の最小構成

```javascript
// astro.config.mjs - Astro サイト設定（i18n、サイトマップ含む）
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://research.pyol.net',
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [sitemap()],
  build: {
    format: 'directory'
  }
});
```

## 付録 C: 推奨配色（参考）

学術的・誠実・静謐な印象を目指す：

- 背景: `#FFFFFF` / `#FAFAFA`（ライトモード）、`#0F1419` / `#1A2027`（ダークモード）
- 文字: `#1A1A1A` / `#E8E8E8`
- アクセント: `#1E3A5F`（既存 ai.pyol.net のテーマカラーと統一）
- リンク: `#2C5282`
- 罫線: `#E2E8F0`

---

**改訂履歴**:
- v1.0（2026-05-15）: 初版作成。Claude Code向け指示書として v0.1 公開までの全要件を記述。
