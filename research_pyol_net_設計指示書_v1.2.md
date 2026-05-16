# research.pyol.net 構築指示書 兼 概要設計 v1.2

**初版作成日**: 2026年5月15日（v1.0）
**改訂日**: 2026年5月15日（v1.1：日英完全バイリンガル化への方針転換）
**改訂日**: 2026年5月15日（v1.2：実装過程で確定した運用判断を反映、デプロイ方式変更）
**作成者**: マインドシード研究所 / 松浦 歳宣
**対象**: Claude Code（実装エージェント）／ 後継者
**目的**: 共鳴者発見のための研究層サイトを **日英完全バイリンガル** で v0.1 立ち上げる
**期限目安**: 3〜5週間で v0.1 公開（v1.2 時点で実装側はほぼ完了）

*サーバープロジェクトルート：https://research.pyol.net
*ローカルプロジェクトルート: /Volumes/disk1/MacBook/research.pyol.net
*レスポンシブデザインすること

---

## 0. v1.2 改訂の要点（実装結果を踏まえた更新）

v1.1 は方針転換（日英完全バイリンガル化）の宣言だった。v1.2 は **その方針に沿った実装が一巡した結果、運用上の判断として確定したこと** を記録する。これにより v0.2 以降や後継者の引継ぎ時に、なぜそうしたかが追える。

### 0.1 デプロイ方式の変更（重要）

v1.1 までは Cloudflare Pages を主推奨としていたが、Toshi さんの判断により **既存の pyol.net レンタルサーバーへの FTP/SFTP 直接アップロード方式** に変更。`dist/` の中身をサブドメイン `research.pyol.net` のドキュメントルートに展開する形。ビルドは Claude の sandbox 環境で実施し、成果物のみをローカルディレクトリに配置する運用。詳細は §10 を参照。

### 0.2 sitemap integration の v0.2 送り

`@astrojs/sitemap` の v3.2〜v3.7 と Astro 4.16 の routes API に互換性問題があり、ビルドが落ちる。v0.1 では sitemap を一旦外し、v0.2 で Astro 5.x への移行と合わせて再導入する判断。hreflang は BaseLayout で各ページ個別に手動設定済みなので、SEO 上の致命的問題はない。

### 0.3 コンテンツコレクション名の確定

Astro のコンテンツコレクションは、コレクション名がディレクトリ名と一致する仕様。v1.1 §6.1 では `src/content/ja/essays/` のような階層を想定していたが、Astro の標準挙動に合わせて以下に確定：

```
src/content/
├── config.ts
├── ja-essays/      # 日本語論考コレクション
├── en-essays/      # 英語論考コレクション
├── ja-concept/     # 日本語構想記録コレクション
└── en-concept/     # 英語構想記録コレクション
```

### 0.4 コンテンツコレクション schema から slug を削除

Astro の制約：コンテンツコレクションの schema に `slug` フィールドを含めるとビルドエラー（予約名）。代わりにフロントマターに `slug: "..."` を直接記述する方針に変更。これでファイル名のピリオド（v1.4 の `.4`）が URL から消えるバグも回避できる。`src/content/config.ts` には `slug` フィールドを定義しない。

### 0.5 PYOL マインドミラーの位置付け表現の精度向上

実装過程で Toshi さんから「煩悩マッピングはまだ実装していない、現段階は一般的な詐欺被害の注意喚起程度」とのフィードバックがあり、サイト全文で表現を修正：

- 旧: 「実動する詐欺対策ツール」「本研究プログラムの実装側」
- 新: 「実動中の詐欺被害注意喚起ツール」「本研究プログラムの出発点であり、煩悩マッピング等の本格機能は今後の実装課題」

§15 独立記事の §6 表ヘッダーには「PYOL マインドミラー（精密の経済 ── **完成形の設計目標**）」と注記し、現状の機能と将来の設計目標を明確に区別。

### 0.6 About ページのプライバシー配慮

配偶者の詐欺被害について、配偶者ご本人がオープンな記述を望まれない意向のため、**「配偶者」→「関係者」**（英文では `the spouse` → `someone close to the author / a close relation`）に変更。BBS 事件は逆に「直接的な原因」として「会員が猥褻画像をアップロードし、他の会員がそれをダウンロードする事案」を本文に明記。誤解を避けるための積極的な記述。

### 0.7 v0.1 で sitemap を外したことに伴う §4.2 の調整

「Pagefind 検索」「RSS フィード」と並んで「sitemap」も v0.2 行きの追加項目として明記。

---

## 1. プロジェクト目的（最重要：実装前に必ず読む）

本サイトは「サービス紹介サイト」ではない。「**研究プログラムと研究者の人物の物語を公開する場**」である。実装判断に迷ったら、この一点に立ち返ること。

### 1.1 想定読者（優先順）

1. **海外のAI Safety / Alignment 研究者**（Anthropic, DeepMind, MIRI, LessWrong コミュニティ）── 最優先。彼らが英語で全コンテンツを読める状態が v0.1 の必須要件
2. 日本国内の認知科学・AI研究者（東大、京大、東工大、東北大、産総研）
3. 仏教学者で現代AIに関心を持つ層（駒澤大、龍谷大、仏教大）── 日本語が主、英語術語の併記により国際発信支援
4. 詐欺被害研究者（日大 木村敦氏など）
5. 後継者候補となる大学院生・若手研究者

### 1.2 達成すべき UX 目標

サイト訪問者が **5分以内に** 以下を理解できること（**日本語・英語いずれの読者についても**）：

- 松浦歳宣（Toshinobu Matsuura）が何者か（経歴と思想）
- マインドシード研究所が何をしているか（研究プログラムの骨格）
- §15「精密の経済」が何を主張しているか（思想的核心）
- ai.pyol.net という実動アプリが存在する（**ただし煩悩マッピング機能は構想段階**であることも明示）
- どうやって連絡を取れるか（共鳴者からの返信を受け入れる導線）

---

## 2. 制約と前提

### 2.1 技術的制約

- 開発環境: macOS + VSCode、Windows 11 + VSCode（両方で動作すること）
- 開発者背景: 元基盤系エンジニア（C/C++/アセンブラ）、PHP/MySQL は熟練、Next.js/React の経験あり
- 既存資産: pyol.net（PHP/MySQL）、ai.pyol.net（実動中の詐欺被害注意喚起ツール）
- 既存環境を破壊しないこと。新サブドメインとして独立構築すること
- v1.2 で確定: ネットワークドライブ（/Volumes/disk1/MacBook/research.pyol.net）上で開発。ビルドは Claude sandbox 環境で実行し、成果物のみネットワークドライブに配置

### 2.2 設計哲学

- **3行から始める**: v0.1 は最小機能のみ。完成を待たない
- **枯れた技術を使う**: 新しいだけの技術は採用しない
- **シンプル・イズ・ベスト**: 機能を増やすより、本質を残す
- **冗長性設計**: 単一障害点を作らない（静的サイトなのでビルド済HTMLは別途バックアップ）
- **透明性**: バージョン履歴が研究プログラムの透明性証拠となる
- **多言語を第一級市民として扱う**: 英語は「あとで足すもの」ではなく、設計の出発点から組み込む
- **誇張禁止**: "groundbreaking", "revolutionary", "novel", "world-first" 等は使わない（v0.2 以降も継続）

### 2.3 公開戦略

- **v0.1（最小バイリンガル版、3〜5週間、v1.2 時点でほぼ完了）**: 日英両言語で必須ページ全公開
- **v0.2（拡充版、+4〜6週間）**: sitemap integration、Pagefind 検索、RSS、構造化データ本格実装、§13/§14 独立記事化、仏教術語の校閲、Astro 5.x 移行検討
- **v1.0（全文公開、3ヶ月後）**: 構想記録の追加章、研究日誌、改訂履歴自動表示
- **未完成での公開を恐れない**: README に "Work in Progress / 作業中" を日英併記、誠実さのシグナルとして活用

---

## 3. 技術スタック

### 3.1 確定構成（v1.2 時点）

| レイヤ | 技術 | バージョン |
|---|---|---|
| サイトジェネレータ | Astro | 4.16.x |
| TypeScript | strict mode | 5.6+ |
| コンテンツ管理 | Markdown ファイル + コンテンツコレクション | - |
| ホスティング | **既存 pyol.net レンタルサーバー（FTP/SFTP）** | - |
| ドメイン | `research.pyol.net` | サブドメイン |
| 多言語 | Astro 標準 i18n（`/`= ja, `/en/`= en） | - |
| 検索 | （v0.2 で Pagefind 導入予定） | - |
| サイトマップ | （v0.2 で再導入予定、Astro 5.x 移行と合わせて） | - |
| ライセンス | CC BY 4.0 | - |

### 3.2 v1.2 時点で外している技術

- `@astrojs/sitemap`: v3.2〜v3.7 と Astro 4.16 の routes API 非互換のため v0.2 送り
- Cloudflare Pages: Toshi さん判断で FTP 方式に変更したため不採用
- GitHub Public Repository: v0.2 以降で公開検討（v0.1 では FTP のみ）

---

## 4. サイト構造

### 4.1 ページ一覧（v1.2 時点で実装済み、全 14 ページ）

| パス | 内容 | 言語 | 状態 |
|---|---|---|---|
| `/` | トップページ（日本語） | JA | ✅ 実装済 |
| `/about/` | 松浦歳宣プロフィール | JA | ✅ 実装済（経歴・自己開示3件・思想的核心） |
| `/concept/` | 研究プログラム一覧 | JA | ✅ 実装済 |
| `/concept/bonno-virus-mapping-v1.4/` | 構想記録 v1.4 全文 | JA | ✅ 実装済（111KB） |
| `/essays/` | 論考一覧 | JA | ✅ 実装済 |
| `/essays/precision-economics/` | §15 独立記事 | JA | ✅ 実装済（§14.10 統合済） |
| `/contact/` | 連絡先 | JA | ✅ 実装済 |
| `/en/` | トップページ | EN | ✅ 実装済 |
| `/en/about/` | プロフィール | EN | ✅ 実装済 |
| `/en/concept/` | 研究プログラム一覧 | EN | ✅ 実装済 |
| `/en/concept/bonno-virus-mapping-v1.4/` | 構想記録全文 | EN | ✅ 実装済（114KB） |
| `/en/essays/` | 論考一覧 | EN | ✅ 実装済 |
| `/en/essays/precision-economics/` | §15 独立記事 | EN | ✅ 実装済 |
| `/en/contact/` | 連絡先 | EN | ✅ 実装済 |

### 4.2 v0.2 以降の追加予定

- `/essays/external-prefrontal-cortex/` および英訳 ── §13 独立記事
- `/essays/bonno-embedding/` および英訳 ── §14 独立記事
- `/journal/` および英訳 ── 研究日誌（不定期更新）
- `/publications/` および英訳 ── 論文・プレプリント一覧
- `/sitemap.xml`、`/en/sitemap.xml` ── Astro 5.x 移行と合わせて
- `/rss.xml` および `/en/rss.xml` ── RSS フィード
- Pagefind 検索（日英両対応）
- 構造化データ（Schema.org）の本格実装

---

## 5. ページ別仕様

### 5.1〜5.5 ── 設計指示書 v1.1 §5 を参照（仕様自体に変更なし、実装で確定した詳細のみ §0.5 §0.6 に記載）

---

## 6. コンテンツ要件

### 6.1 既存資産の取り込み（v1.2 確定構造）

```
src/content/
├── config.ts                                  # コンテンツコレクション定義（schema に slug フィールドは含めない）
├── ja-concept/
│   └── bonno-virus-mapping-v1.4.md           # 構想記録 v1.4 全文（フロントマターで slug 指定）
├── en-concept/
│   └── bonno-virus-mapping-v1.4.md           # 構想記録英訳全文
├── ja-essays/
│   └── precision-economics.md                 # §15 独立記事（§14.10 統合済）
└── en-essays/
    └── precision-economics.md                 # §15 英訳
```

フロントマターのスキーマは `src/content/config.ts` 参照。**`slug` はスキーマに含めず、フロントマターで個別指定**する（Astro 制約への対応）。

### 6.2 英語翻訳の方針（v1.1 §6.2 と同一、誇張禁止・誤訳ゼロ・GLOSSARY 準拠）

### 6.3 ライセンス（CC BY 4.0、v1.1 と同一）

### 6.4 用語対訳表

`docs/GLOSSARY.md` v1.1 が確定版。Toshi さん校正済み。仏教術語は v0.1 では英訳のみの保守化、v0.2 で仏教学者校閲予定。

---

## 7. SEO とメタデータ（v1.1 と同一）

ただし v1.2 時点で sitemap.xml は未生成。hreflang は BaseLayout で各ページ個別に設定済みなので、Google Search Console での認識に問題はない。

---

## 8. ディレクトリ構造（v1.2 確定）

```
research-pyol-net/  (= /Volumes/disk1/MacBook/research.pyol.net/)
├── README.md                            # プロジェクト概要、Work in Progress 宣言（日英併記）
├── LICENSE                              # CC BY 4.0
├── astro.config.mjs                     # Astro 設定（i18n のみ、sitemap は v0.2 送り）
├── package.json                         # @astrojs/sitemap は依存から外している
├── tsconfig.json
├── .gitignore
├── 構想記録_煩悩ウイルスマッピング_v1.md   # 元素材（参考用、変更しない）
├── LLM訓練手法選定ガイド_v1.md            # 元素材（参考用、変更しない）
├── research_pyol_net_設計指示書_v1.0.md   # v1.0 履歴
├── research_pyol_net_設計指示書_v1.1.md   # v1.1 履歴
├── research_pyol_net_設計指示書_v1.2.md   # 現行版（本書）
├── public/
│   └── favicon.svg
├── dist/                                # ビルド成果物（Claude sandbox から rsync で配置）
│   ├── index.html, about/, concept/, essays/, contact/, _astro/
│   └── en/index.html, en/about/, ...
├── src/
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── concept/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro            # 動的ルーティング（コレクションから）
│   │   ├── essays/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── contact.astro
│   │   └── en/
│   │       └── (同じ構造)
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── LanguageSwitcher.astro
│   │   └── CitationBox.astro
│   ├── i18n/
│   │   ├── ja.ts
│   │   ├── en.ts
│   │   └── index.ts                     # ヘルパ関数
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── EssayLayout.astro            # essays と concept で共用
│   ├── content/
│   │   ├── config.ts
│   │   ├── ja-concept/, en-concept/
│   │   └── ja-essays/, en-essays/
│   ├── styles/
│   │   └── global.css
│   └── config.ts                        # サイト全体定数
└── docs/
    ├── GLOSSARY.md                      # 用語対訳表 v1.1
    └── HANDOVER.md                      # 引き継ぎ書
```

---

## 9. 開発フェーズ

### Phase 1: v0.1（最小バイリンガル版） ── 目標 3〜5週間（v1.2 時点で実装側はほぼ完了）

✅ 完了項目（Step 1〜6）：
1. Astro プロジェクト初期化
2. 用語対訳表 GLOSSARY.md v1.1
3. §15 独立記事（日英両方、§14.10 統合済）
4. 構想記録 v1.4 全文（日英両方、Translator's Note 付）
5. トップ・About・Contact（日英両方、本格コンテンツ）
6. ビルドと dist/ 配置

⏳ 残り（Step 7、Toshi さん側）：
- FTP/SFTP アップロード
- DNS 設定（research.pyol.net サブドメイン）
- HTTPS 化
- 表示確認、Lighthouse スコア確認
- §13 チェックリスト全項目の検証

### Phase 2: v0.2（拡充版） ── 目標 +4〜6週間

1. sitemap integration 再導入（Astro 5.x 移行と合わせて）
2. Pagefind 検索機能（日英両対応）
3. RSS フィード（日英両方）
4. 構造化データ（Schema.org）の本格実装
5. §13 独立記事 `/essays/external-prefrontal-cortex/` および英訳
6. §14 独立記事 `/essays/bonno-embedding/` および英訳
7. ネイティブチェックによる英訳ブラッシュアップ
8. 仏教学者による術語校閲（駒澤大・龍谷大・仏教大）

### Phase 3: v1.0（全文公開） ── 目標 3ヶ月

（v1.1 と同一）

---

## 10. デプロイ手順（v1.2 で全面改訂）

### 10.1 Claude sandbox でビルド

Claude が以下のコマンドを実行して `dist/` を生成：

```bash
# /tmp 上でビルドして node_modules がネットワークドライブを汚さない
BUILD_DIR=/tmp/research-build
SRC=/sessions/.../mnt/research.pyol.net

rsync -a --delete --exclude='._*' --exclude='.smbdelete*' \
  "$SRC/src/" "$BUILD_DIR/src/"
cd "$BUILD_DIR"
npm run build

# 成果物のみネットワークドライブに反映
rsync -a --exclude='._*' --exclude='.smbdelete*' \
  "$BUILD_DIR/dist/" "$SRC/dist/"
```

### 10.2 Toshi さんが FTP/SFTP でアップロード

1. レンタルサーバーで `research.pyol.net` サブドメインを作成、ドキュメントルートを設定
2. `/Volumes/disk1/MacBook/research.pyol.net/dist/` の **中身を**（dist フォルダごとではなく中身を）FTP でアップロード
3. アップロード前に隠しファイル（`.smbdelete*`、`._*`、`.DS_Store`）を除外設定にする
4. **古いビルドの残骸ディレクトリ**（例: `bonno-virus-mapping-v14`、ピリオド削除版など）が混入していないか確認、あれば削除
5. DNS で `research.pyol.net` の A/CNAME レコードをサーバーに向ける
6. SSL 証明書を取得（Let's Encrypt 等）して HTTPS 化
7. `https://research.pyol.net/` で日本語トップ、`https://research.pyol.net/en/` で英語トップが表示されることを確認

### 10.3 アップロード後の確認

- `Content-Type: text/html; charset=UTF-8` が正しく送出されているか
- `_astro/` ディレクトリ内の CSS が読み込まれているか
- favicon.svg が表示されているか
- Google Fonts (Inter, Noto Sans JP) が読み込まれているか
- モバイル表示（DevTools の 375px 等）で崩れがないか
- ダークモード（macOS システム設定で切替）で文字が読めるか

### 10.4 継続デプロイ

コンテンツ更新時は、Claude にビルド依頼 → 新しい `dist/` を Toshi さんがアップロード（または rsync で同期）。

---

## 11. 注意事項（Claude / 後継者への補足）

### 11.1 やってはいけないこと

- 既存の pyol.net、ai.pyol.net、その他のサブドメインに**一切手を加えない**
- pyol.net の PHP/MySQL 環境に依存させない
- データベースは使わない（v0.1〜v1.0 までは完全静的）
- ユーザー認証機能を入れない
- アクセスログを過剰に収集しない（プライバシー重視）
- **英語翻訳で誇張表現（"revolutionary" "groundbreaking" "world-first" "novel" 等）を使わない**
- **PYOL マインドミラーを「煩悩マッピング実装済み」のように書かない**（実動中の機能は詐欺被害注意喚起レベル）
- **配偶者個人を特定する記述を入れない**（「関係者」「someone close to the author」を使う）
- ネットワークドライブ上で `npm install` しない（node_modules がネットワークドライブを膨張させる、ビルドは sandbox 上の `/tmp` で行う）
- コンテンツコレクションのスキーマに `slug` フィールドを含めない（Astro 予約名）

### 11.2 守ってほしいこと

- ファイルの冒頭に必ず `# ファイル名 + 機能概要` のコメントを入れる（Toshi さんの慣習）
- コード内のコメントは日本語で（英語が必要な場合は併記）
- production-ready, paste-ready なコードを書く
- ハードコードを避け、設定は `src/config.ts` に集約
- セマンティックHTMLを徹底（`<article>`, `<section>`, `<nav>` など）
- 術語は必ず `docs/GLOSSARY.md` を参照して統一
- 日英ページペアの相互リンク（hreflang + UI上の言語切替）を必ず設置
- ビルド後は `dist/` 内の `.smbdelete*` を確認・除外
- 構想記録 / 論考の Markdown フロントマターには `slug: "..."` を必ず明示する

### 11.3 引き継ぎ書 HANDOVER.md

`docs/HANDOVER.md` に以下を記録（v1.2 時点で初版作成済み）：

- 実装した内容と未実装の内容
- 各ファイルの役割
- カスタマイズ箇所（色、フォント、文言）
- デプロイ手順
- よくあるトラブルシュート
- 翻訳の継続改善手順
- 次の v0.2 で取り組むべきこと

これは20年スパンの研究プロジェクトの一部であり、**将来 Toshi さん以外の人が引き継ぐ可能性**がある前提で書く。

---

## 12. 不明点があれば

実装中に判断が分かれる箇所が出てきた場合、以下の優先順位で判断：

1. 本指示書（特に §1「プロジェクト目的」と §0「v1.x 改訂の要点」）に立ち戻る
2. Toshi さんの過去資料（構想記録 v1.4、LLM 訓練手法選定ガイド v1）に照らす
3. それでも判断できない場合は、Toshi さんに確認

「研究プログラムと人物の物語を、日英両方で公開する場」という原則がブレなければ、細部の判断は概ね収束する。

---

## 13. 最終確認チェックリスト（v0.1 公開前、v1.2 で更新）

### 共通

- [ ] トップページが 5分以内 UX 目標を達成しているか（日英両方）
- [ ] 全ページに OGP / Twitter Card が設定されているか（日英両方）
- [ ] 全ページに `<link rel="alternate" hreflang>` が日英相互設定されているか
- [ ] モバイルで表示崩れがないか（日英両方）
- [ ] Lighthouse スコアが 90+ か（日英両方）
- [ ] LICENSE ファイル（CC BY 4.0）が配置されているか
- [ ] `research.pyol.net` で実際にアクセスできるか
- [ ] HTTPS が有効か
- [ ] 言語切替 UI が全ページで動作するか
- [ ] dist/ 内の古い残骸ディレクトリ（例: `bonno-virus-mapping-v14`）を削除したか

### 日本語ページ

- [ ] 構想記録 v1.4 全文が読めるか
- [ ] §15 独立記事が読めるか（§14.10 統合の流れが自然か）
- [ ] プロフィールページに BBS 事件・CineBASIC 挫折・関係者の被害含め経歴が記載されているか
- [ ] PYOL マインドミラーの位置付けが「実動中の詐欺被害注意喚起ツール」となっているか
- [ ] 連絡先が機能しているか（メール送信テスト）

### 英語ページ

- [ ] `/en/` トップが日本語版と同水準の情報量を持つか
- [ ] `/en/concept/bonno-virus-mapping-v1.4/` 全文が公開されているか
- [ ] `/en/essays/precision-economics/` が独立記事として完結しているか
- [ ] `/en/about/` がプロフィール全文を網羅しているか（"someone close to the author" の表現になっているか）
- [ ] `/en/contact/` が機能しているか
- [ ] 用語対訳表 `docs/GLOSSARY.md` とサイト内術語が整合しているか
- [ ] 誇張表現（"revolutionary" "groundbreaking" "world-first" "novel" 等）が含まれていないか
- [ ] 著者造語（"Economies of Precision", "Bonnō Embedding", "ExPFC"）に定義文が併記されているか
- [ ] 構想記録英訳の冒頭に Translator's Note（仏教術語の保守化、v0.2 で校閲）が明記されているか

### v0.2 送り（v0.1 では未実装で OK）

- [ ] sitemap.xml ── v0.2 で Astro 5.x 移行と合わせて再導入
- [ ] Pagefind 検索 ── v0.2 で導入
- [ ] RSS フィード ── v0.2 で導入
- [ ] Schema.org 構造化データ ── v0.2 で本格実装
- [ ] §13 / §14 独立記事化 ── v0.2 で順次
- [ ] 仏教学者による術語校閲 ── v0.2 で実施

---

**本指示書は v1.2 である。Claude / 後継者で実装中に追加判断が必要になった場合、本指示書を v1.3, v1.4 と更新していくこと。**

---

## 付録 A: Astro プロジェクト初期化コマンド例

```bash
# 既に v1.2 時点で初期化済み。再構築が必要な場合のみ参照。
npm create astro@latest research-pyol-net -- --template minimal --typescript strict --no-install --no-git
cd research-pyol-net
npm install
npm install astro@^4.16.0    # 4.16 系を明示固定
# @astrojs/sitemap は v0.2 で再導入予定のため v0.1 では入れない
npm install -D @astrojs/check typescript

# 開発サーバー起動
npm run dev
```

## 付録 B: astro.config.mjs（v1.2 確定）

```javascript
// astro.config.mjs - i18n のみ、sitemap は v0.2 送り
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://research.pyol.net',
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
    routing: { prefixDefaultLocale: false }
  },
  integrations: [],
  build: { format: 'directory' }
});
```

## 付録 C: 推奨配色（v1.1 と同一）

学術的・誠実・静謐な印象を目指す：

- 背景: `#FFFFFF` / `#FAFAFA`（ライト）、`#0F1419` / `#1A2027`（ダーク）
- 文字: `#1A1A1A` / `#E8E8E8`
- アクセント: `#1E3A5F`
- リンク: `#2C5282`
- 罫線: `#E2E8F0`

## 付録 D: 用語対訳表

`docs/GLOSSARY.md` v1.1 が確定版。詳細はそちらを参照。

---

**改訂履歴**:
- **v1.0**（2026-05-15）: 初版作成。Claude Code向け指示書として v0.1 公開までの全要件を記述。英語版は v0.2 送りを想定。
- **v1.1**（2026-05-15）: 想定読者最優先層（海外 AI Safety 研究者）への戦略的整合性を確保するため、v0.1 から日英完全バイリンガルに方針転換。§4.1 の英語ページ全てを P0 に昇格、§6.2 翻訳方針を全面改訂、§6.4 用語対訳表を新設、§9 Phase 1 のスコープと期間を 3〜5週間に拡大、§13 チェックリストにバイリンガル関連項目を追加、§5.4 で §15 独立記事に §14.10 のインセンティブ非対称性論点を統合する指示を明記、付録 D 用語対訳表テンプレを新設。
- **v1.2**（2026-05-15、同日改訂）: 実装過程で確定した運用判断を §0 に集約。デプロイ方式を Cloudflare Pages から FTP/SFTP 直接アップロード方式に変更（§10 全面改訂）。`@astrojs/sitemap` の互換性問題により sitemap を v0.2 送りに変更。コンテンツコレクション名を `ja-essays` / `en-essays` / `ja-concept` / `en-concept` に確定（§6.1）。schema から `slug` フィールドを削除しフロントマターで指定する方針に確定。PYOL マインドミラーの位置付け表現を「実動中の詐欺被害注意喚起ツール、煩悩マッピングは構想段階」に明確化（§0.5）。配偶者の被害記述を「関係者」表現に変更（§0.6）。BBS 事件に直接的な原因を本文に明記。実装済み 14 ページのチェックボックスを §4.1 に整理。最終確認チェックリストを実装結果に合わせて整理（§13）。
- v0.2 以降: 実装進捗、外部協力者との対話、検証結果に応じて更新
