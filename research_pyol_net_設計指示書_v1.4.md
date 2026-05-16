# research.pyol.net 構築指示書 兼 概要設計 v1.4

**初版作成日**: 2026年5月15日（v1.0）
**改訂日**: 2026年5月15日（v1.1：日英完全バイリンガル化への方針転換）
**改訂日**: 2026年5月15日（v1.2：実装過程で確定した運用判断を反映、デプロイ方式変更）
**改訂日**: 2026年5月16日（v1.3：構想記録 v1.6 への深化、独立論考 2 本公開、GitHub Public 前倒し公開、経歴記述の精度向上）
**改訂日**: 2026年5月16日（v1.4：構想記録 v1.7 §16.4 個人化問題追加、URL slug 整理、OGP 画像フルセット、SEO 強化、論考品質改善）
**作成者**: マインドシード研究所 / 松浦 歳宣（Toshinobu Matsuura）
**対象**: Claude Code（実装エージェント）／ 後継者
**目的**: 共鳴者発見のための研究層サイトを **日英完全バイリンガル** で v0.1 立ち上げる
**期限目安**: 3〜5週間で v0.1 公開（v1.4 時点で実装ほぼ完成、検証フェーズ）

*サーバープロジェクトルート：https://research.pyol.net
*GitHub リポジトリ：https://github.com/zz08matsujp-max/research-pyol-net （v0.1 公開済み、Topics 14個設定済み）
*ローカルプロジェクトルート: /Volumes/disk1/MacBook/research.pyol.net
*連絡先: matsuura@pyol.net
*レスポンシブデザインすること

---

## 0. v1.4 改訂の要点（v0.1 最終仕上げ）

v1.3 までで研究プログラムの三階層構造（Level 1/2/3）と独立論考 2 本の公開、GitHub Public 公開、経歴の確定が達成された。v1.4 は **v0.1 完成度を学術コンテンツとしての品質基準に押し上げた** ことを記録する。

### 0.1 構想記録 v1.7 への深化（最重要）

著者が LessWrong 投稿用の英訳作業中に意識化した本質的洞察を §16.4 として追補：

```
g: (T, C, U) → (P_scam, V_active)
  T = テキスト、C = 状況、U = 個人の煩悩感受性プロファイル
```

詐欺判定は「テキスト × 状況 × 個人」の 3 項関係であり、§14.1 の写像定義を発展させる必要がある。さらに、「AI に全部任せていたら見落としそうになる大切なこと」というメタな観察そのものが研究プログラムの根本目的と同型であることから、三階層構造に加えて **Level 0（自己反省的階層）** の存在を示唆。研究プログラムが自分自身を観察対象として含み込む再帰的構造。

### 0.2 URL slug 整理

構想記録の URL を `/concept/bonno-virus-mapping-v1.4/` から **`/concept/bonno-virus-mapping/`**（バージョン番号なし）に変更。理由：

- バージョンが上がっても URL を変える必要がない（v1.4 で URL 安定設計）
- derivedFrom 表記からもバージョン番号を除去（「構想記録 §0」「Concept Record §15」）
- バージョン情報は構想記録ページ内の改訂履歴で管理
- 旧 URL からは `.htaccess` で 301 リダイレクト

### 0.3 OGP 画像フルセット

Toshi さん作成の 3 種類の OGP 画像（1200×630、MindSeed Institute 統一デザイン + Protect Your Only Life）を配置：

- `/public/img/ogp-default.png` ── トップ・About・Contact・構想記録など全ページのデフォルト
- `/public/img/ogp-precision-economics.png` ── §15 独立論考専用
- `/public/img/ogp-buddhism-coordinate.png` ── §0 独立論考専用

EssayLayout で `ogImage` フロントマターから受け取り、BaseLayout で og:image / twitter:image に出力。

### 0.4 SEO 強化フルセット

海外研究者の検索流入を最大化するため、v0.2 送りだった SEO 関連を v0.1 で前倒し実装：

1. **`/public/robots.txt`** 配置（クローラー誘導、サイトマップ位置指定）
2. **`/sitemap.xml`** 動的生成（`src/pages/sitemap.xml.ts` Astro エンドポイント、hreflang 相互参照付き、全 16 URL）
3. **og:type "article"** 論考ページのみ自動設定（BaseLayout の Props 化）
4. **Schema.org JSON-LD** 構造化データ：
   - `Organization` ──トップページ（Mindseed Research）
   - `Person` + `PostalAddress` ── About ページ
   - `ScholarlyArticle` + `Person` + `Organization` + `CreativeWork` ── 論考ページ
5. v0.2 で：Google Search Console / Bing Webmaster Tools 登録（Toshi さん側）

### 0.5 論考の学術的品質向上

両独立論考（§15・§0、日英 4 ファイル）の品質を学術コンテンツ水準に：

- **自賛的表現の中立化**：「著者が鋭い指摘を行った」→「本研究プログラムは...次の観察から出発する」
- **連絡先セクション追加**：「本稿に共鳴する研究者・批判者・後継者からの連絡を歓迎」
- **References セクション追加**：APA 形式で 7-10 件の代表文献（Damasio, Friston, Picard, Ekman 等）
- **BibTeX citation key 一意化**：`matsuura2026precisionEconomics` / `matsuura2026buddhismCoordinate`
- **kleshas キーワード追加**：英訳の Note on terminology に「in Sanskrit, *kleshas*」を追加（仏教学者の検索性向上）
- **§15.6 参照の明確化**：「姉妹論考 §15」のように姉妹論考としてクロスリンク
- **横展開セクションの具体例**：医療・メンタルヘルス・法務・教育に「For instance」を追加
- **著者脚注**：英訳論考の §1 に `[^author]` 脚注で About ページへリンク

### 0.6 About BBS 事件記述の語順整理

「会員によるアップロードと他会員によるダウンロードが発生し、**運営者（私）の管理責任が問われ**、刑事 5 名による逮捕」── 「ダウンロードした会員 5 名が逮捕されたのか」という誤読を避ける語順に修正。

### 0.7 メールアドレス変更

`zz08matsu@mindseed.jp` → **`matsuura@pyol.net`**（既存が不安定なため）。src/config.ts 一元管理で全ページ反映。

### 0.8 callout-label からバージョン番号削除

`concept/index.astro` の callout-label「Concept Record v1.4」を「Concept Record」に。URL 整理と同じ思想（バージョン依存なし）。

### 0.9 v0.1 で達成済みのスコープ（v1.4 時点）

| 項目 | 状態 |
|---|---|
| 日英 14 ページ + 独立論考 2 本（4 ページ）= 18 ページ + sitemap.xml | ✅ |
| 構想記録 v1.7（§0 + §1〜§16 + Appendix、日英、Level 0 自己反省的階層を示唆） | ✅ |
| 独立論考 2 本（§15・§0、日英、References・連絡先・脚注付き、APA 形式） | ✅ |
| 用語対訳表 GLOSSARY v1.1（v1.2 で新術語追加予定） | ✅ |
| GitHub Public 公開（Topics 14、Website 設定、main ブランチ） | ✅ |
| FTP/SFTP デプロイ手順確立 + `.htaccess`（リダイレクト + UTF-8） | ✅ |
| OGP 画像フルセット（default + 論考 2 種、1200×630） | ✅ |
| SEO フルセット（robots.txt、sitemap.xml、og:type、Schema.org JSON-LD） | ✅ |
| X 公開告知（日英バイリンガル、AI Safety 機関メンション） | ✅ |
| 設計指示書 v1.4 / HANDOVER v1.1 | ✅ |

残課題（v0.2 以降）：Pagefind 検索、RSS フィード、Schema.org の本格拡張、§13/§14 独立記事化、仏教学者校閲、ネイティブチェック、Astro 5.x 移行、LessWrong クロスポスト（Toshi さん熟成中）。

---

## 1. プロジェクト目的（v1.2 と同一）

本サイトは「サービス紹介サイト」ではない。「**研究プログラムと研究者の人物の物語を公開する場**」である。

### 1.1 想定読者（優先順）

1. **海外のAI Safety / Alignment 研究者**（Anthropic, DeepMind, MIRI, LessWrong コミュニティ）── 最優先
2. 日本国内の認知科学・AI研究者
3. 仏教学者（駒澤大、龍谷大、仏教大）
4. 詐欺被害研究者（日大 木村氏など）
5. 後継者候補となる大学院生・若手研究者

### 1.2 達成すべき UX 目標

5 分以内に：松浦歳宣が何者か / マインドシード研究所の活動 / **§0 仏教を座標系として採用する** / §15 精密の経済 / ai.pyol.net の現状 / 連絡方法を理解できる。

---

## 2. 制約と前提（v1.2 と同一）

ネットワークドライブ運用、Claude sandbox 環境でビルド、ターミナルで Git 操作可能。

設計哲学：「3行から始める」「枯れた技術を使う」「シンプル・イズ・ベスト」「冗長性設計」「透明性」「多言語を第一級市民として扱う」「誇張禁止」「**自己批判的健全性**」（§16）「**自己反省的階層 Level 0**」（§16.4、v1.4 追加）。

公開戦略：v0.1（v1.4 時点完成）→ v0.2（+4〜6週間） → v1.0（+3ヶ月）。

---

## 3. 技術スタック（v1.4 確定）

| レイヤ | 技術 | バージョン |
|---|---|---|
| サイトジェネレータ | Astro | 4.16.x |
| TypeScript | strict mode | 5.6+ |
| コンテンツ管理 | Markdown ファイル + コンテンツコレクション | - |
| ホスティング | 既存 pyol.net レンタルサーバー（FTP/SFTP） | - |
| GitHub | Public Repository | v0.1 公開済 |
| ドメイン | research.pyol.net | サブドメイン |
| 多言語 | Astro 標準 i18n（`/`= ja, `/en/`= en） | - |
| sitemap | Astro エンドポイント手書き（v1.4） | - |
| 構造化データ | Schema.org JSON-LD（v1.4） | - |
| OGP | 論考固有画像 + デフォルト（1200×630、v1.4） | - |
| サーバー設定 | `.htaccess`（UTF-8 強制、301 リダイレクト、v1.4） | - |
| ライセンス | CC BY 4.0 | - |

v0.2 で追加予定: Pagefind 検索、RSS、@astrojs/sitemap（Astro 5.x 移行後）

---

## 4. サイト構造

### 4.1 ページ一覧（v1.4 時点、全 18 HTML + sitemap.xml + robots.txt）

| パス | 内容 | 言語 | 状態 |
|---|---|---|---|
| `/` | トップページ（Organization JSON-LD） | JA | ✅ |
| `/about/` | プロフィール（Person JSON-LD） | JA | ✅ |
| `/concept/` | 研究プログラム一覧 | JA | ✅ |
| `/concept/bonno-virus-mapping/` | 構想記録 v1.7（§0 + §1〜§16） | JA | ✅ |
| `/essays/` | 論考一覧 | JA | ✅ |
| `/essays/precision-economics/` | §15 独立記事（ScholarlyArticle JSON-LD、固有 OGP） | JA | ✅ |
| `/essays/buddhism-as-coordinate-system/` | §0 独立記事（ScholarlyArticle JSON-LD、固有 OGP） | JA | ✅ |
| `/contact/` | 連絡先（matsuura@pyol.net） | JA | ✅ |
| `/en/...` | 上記すべての英訳ペア（合計 9 ページ） | EN | ✅ |
| `/sitemap.xml` | hreflang 相互参照付き、16 URL | - | ✅ |
| `/robots.txt` | サイトマップ位置指定 | - | ✅ |
| `/.htaccess` | UTF-8 強制 + 301 リダイレクト | - | ✅ |

---

## 5〜12: v1.2 から大きな変更なし

§5（ページ別仕様）〜§12（不明点があれば）の本文は v1.2 を参照。

---

## 13. 最終確認チェックリスト（v1.4 更新版）

### 共通

- [x] トップページが 5分以内 UX 目標を達成（日英両方）
- [x] 全ページに OGP / Twitter Card（日英両方、論考は固有画像）
- [x] 全ページに `<link rel="alternate" hreflang>` 日英相互設定
- [x] 全ページに canonical URL
- [x] `og:type` 論考は "article"、他は "website"
- [x] Schema.org JSON-LD（Organization / Person / ScholarlyArticle）
- [x] sitemap.xml 生成（16 URL、hreflang 含む）
- [x] robots.txt 配置
- [x] `.htaccess`（UTF-8 + 旧 URL リダイレクト）
- [x] GitHub Public、Topics 14、Website 設定
- [x] LICENSE（CC BY 4.0）
- [ ] モバイル表示崩れ確認（Toshi さん側）
- [ ] Lighthouse スコア 90+（Toshi さん側）
- [ ] `research.pyol.net` 実アクセス（FTP アップロード後）
- [ ] HTTPS 有効
- [ ] 言語切替 UI 動作
- [ ] Google Search Console 登録、sitemap 送信（v0.2 で実施）
- [ ] Bing Webmaster Tools 登録（v0.2 で実施）

### 日本語ページ

- [x] 構想記録 v1.7 全文（§0 + §1〜§16）
- [x] §15 独立記事（自賛的表現除去、References、Contact、固有 OGP）
- [x] §0 独立記事（同上）
- [x] About（BBS 事件・CineBASIC・関係者の被害、語順整理済）
- [x] 経歴記述が v1.3 確定形（関西電力 / 個人事業 / サムスンSDS / 職業訓練校 / 職業リハビリテーションセンター / 現在）
- [x] PYOL マインドミラーの位置付け（実動中の詐欺被害注意喚起ツール）
- [x] メールアドレス matsuura@pyol.net
- [ ] 連絡先動作確認（Toshi さん側でメール送信テスト）

### 英語ページ

- [x] `/en/` トップが日本語版と同水準
- [x] `/en/concept/bonno-virus-mapping/` 全文（§0 + §1〜§16）
- [x] §15 / §0 英訳（References、Contact、固有 OGP、著者脚注）
- [x] §0 英訳に "in Sanskrit, kleshas" 追加（仏教学者向け検索性）
- [x] §15.6 参照を「companion essay」として明確化
- [x] About 英訳（"someone close to the author"、operator responsibility 明示）
- [x] Contact 英訳
- [x] 用語対訳表 GLOSSARY と術語整合
- [x] 誇張表現なし（"revolutionary" "groundbreaking" "world-first" "novel"）
- [x] 著者造語に定義文併記
- [x] Translator's Note（仏教術語の保守化、v0.2 校閲予定）
- [x] 著者英文表記 "Toshinobu Matsuura" 統一
- [x] サムスン関連 "Samsung SDS" 統一

### v0.2 送り

- [ ] sitemap.xml（既に手書き実装済、@astrojs/sitemap への置換は Astro 5.x 移行と合わせて）
- [ ] Pagefind 検索
- [ ] RSS フィード
- [ ] Schema.org 拡張（CitationCount、ResearcherID 等）
- [ ] §13 / §14 独立記事化
- [ ] 仏教学者校閲（駒澤大・龍谷大・仏教大）
- [ ] ネイティブチェック
- [ ] LessWrong クロスポスト（Toshi さん熟成中）

---

**本指示書は v1.4 である。次回の改訂は v0.2 着手時に v1.5 として作成する想定。**

---

## 改訂履歴

- **v1.0**（2026-05-15）: 初版作成
- **v1.1**（2026-05-15）: 日英完全バイリンガル化への方針転換
- **v1.2**（2026-05-15）: 実装過程の運用判断、デプロイ方式変更
- **v1.3**（2026-05-16）: 構想記録 v1.6（§0 新設）、独立論考 2 本、GitHub 公開、経歴精度向上
- **v1.4**（2026-05-16、同日改訂）: 構想記録 v1.7（§16.4 個人化問題、Level 0 自己反省的階層）、URL slug 整理（bonno-virus-mapping）、OGP 画像フルセット（3 種、1200×630）、SEO 強化フルセット（robots.txt、sitemap.xml 動的生成、og:type article、Schema.org JSON-LD: Organization/Person/ScholarlyArticle）、論考の学術的品質向上（自賛的表現除去、References セクション APA 形式 7-10 件、Contact セクション、BibTeX citation key 一意化、kleshas 追加、§15.6 参照明確化、横展開具体例、著者脚注）、About BBS 事件語順整理、メールアドレス matsuura@pyol.net、callout-label バージョン番号削除、`.htaccess`（UTF-8 + 301 リダイレクト）。
- v0.2 以降: Pagefind 検索、RSS、Schema.org 拡張、§13/§14 独立記事化、仏教学者校閲、ネイティブチェック、Astro 5.x 移行、LessWrong クロスポスト
