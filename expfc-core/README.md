# ExPFC Core

**External Prefrontal Cortex — Core Specification and Reference Implementation**

[![Spec License: CC BY 4.0](https://img.shields.io/badge/Spec%20License-CC%20BY%204.0-lightgrey.svg)](LICENSE-SPEC.md)
[![Code License: MIT](https://img.shields.io/badge/Code%20License-MIT-blue.svg)](LICENSE-CODE.md)
[![Spec Version](https://img.shields.io/badge/Spec-v0.1-orange.svg)](https://research.pyol.net/concept/bonno-virus-mapping/#17)

> 詐欺被害を「前頭前野の一時停止」として神経科学的に再定義し、止まった前頭葉を外部から代行する AI 装置 ── **External Prefrontal Cortex（ExPFC）** ── のコア仕様と参照実装。
>
> The core specification and reference implementation for the **External Prefrontal Cortex (ExPFC)**, an AI device that externally substitutes for a temporarily compromised prefrontal cortex — redefining scam victimization as a neuroscientific phenomenon, not a knowledge problem.

---

## なぜこのリポジトリがあるか / Why this repository exists

**マインドシード研究所** の 20 年スパン研究プログラム「煩悩 × 詐欺ウイルス マッピング」の **中核（Core）部分** を、アプリ実装と切り離した形で公開します。

- **このリポジトリ**: コア仕様、煩悩オントロジー、参照実装（Python）
- **アプリ実装**: 別の開発者・組織が、それぞれの目的（消費者保護、医療、教育、神経倫理研究）に応じて作成

W3C が HTML を仕様として書き、Chrome / Safari / Firefox が独自実装するのと同じ構図です。

The **Mindseed Research** 20-year program "Bonnō × Scam-Virus Mapping" separates its **Core** from app implementations:

- **This repository**: core specification, bonnō ontology, Python reference implementation.
- **App implementations**: built by other developers/organizations for their respective purposes (consumer protection, healthcare, education, neuroethics research).

The architectural model is the same as W3C writing HTML and Chrome / Safari / Firefox implementing it independently.

## リポジトリ構成 / Repository structure

```
expfc-core/
├── README.md                   # このファイル
├── LICENSE-SPEC.md             # 仕様部分のライセンス (CC BY 4.0)
├── LICENSE-CODE.md             # コード部分のライセンス (MIT)
├── bonno_ontology.yaml         # 煩悩オントロジー v0.1 (L1+L2 = 12 次元)
├── schemas/                    # JSON Schemas (API 契約)
│   ├── expfc-input-v0.1.json
│   ├── expfc-output-v0.1.json
│   └── expfc-userprofile-v0.1.json
├── expfc_core/                 # Python 参照実装パッケージ
│   ├── __init__.py
│   ├── types.py                # Dataclass 型定義
│   ├── embedding.py            # 関数 f (実装は v0.2 以降)
│   ├── detector.py             # 3 シグネチャ検出器
│   ├── source_check.py         # 出典明示性チェッカ
│   └── judge.py                # 統合判定 g
├── docs/                       # API ドキュメント、実装ガイド
│   └── SPECIFICATION.md        # 詳細仕様（構想記録 §17 の抜粋）
└── tests/                      # 適合性テスト
    └── README.md
```

## API 概要 / API Overview

### 入力 / Input

```python
from expfc_core import judge, UserProfile, Context

result = judge(
    text="高利回り保証！今すぐ振込！",  # T: 解析対象テキスト
    user_profile=UserProfile(...),       # U: 必須
    context=Context(medium="line"),      # C: オプション
)
```

### 出力 / Output

```python
result.scam_probability      # 0.0–1.0
result.alert_level           # "none" | "info" | "caution" | "warning" | "danger"
result.bonno_vector          # 9 or 108 次元の [0,1] ベクトル
result.fired_signatures      # 3 つの指紋の発火状況
result.source_attribution    # 出典明示性チェック結果
```

詳細は [docs/SPECIFICATION.md](docs/SPECIFICATION.md) と [構想記録 §17](https://research.pyol.net/concept/bonno-virus-mapping/#17) を参照。

## 適合性レベル / Conformance Levels

| Level | 出力次元 | 必須機能 | 想定用途 |
|---|---|---|---|
| **L1 (MVP)** | 9 次元 | f, detect, judge | 初期実装・PoC |
| **L2 (Production)** | 10–20 次元 | L1 + 出典明示性, U プロファイル完全 | Phase 1 本番アプリ |
| **L3 (Full)** | 108 次元 | L2 + 階層的埋め込み, episodic 学習 | Phase 2 以降、研究用途 |

アプリは `"ExPFC Core L1 conformant"` のように適合レベルを明示できます。

## 現在のステータス / Current status

**v0.1 (2026-05-18)** ── 仕様・オントロジー・型定義のみ公開。実装は段階的に追加。

- ✅ Specification (構想記録 §17 に集約)
- ✅ Bonnō Ontology (L1 + L2 = 12 次元)
- ✅ JSON Schemas (Input / Output / U Profile)
- ✅ Python type definitions (`expfc_core/types.py`)
- 🚧 Reference implementation of `f`, `detect`, `check`, `judge` (v0.2 以降)
- 🚧 Conformance test suite (v0.2 以降)
- 🚧 Sample scam corpus (v0.3 以降、匿名化後)

## ライセンス / License

- **仕様 / Specification (`bonno_ontology.yaml`, `schemas/`, `docs/`)**: [CC BY 4.0](LICENSE-SPEC.md)
- **参照実装コード / Reference implementation code (`expfc_core/`, `tests/`)**: [MIT](LICENSE-CODE.md)

## 連絡先 / Contact

- **研究プログラムポータル**: [research.pyol.net](https://research.pyol.net)
- **構想記録（全章）**: [research.pyol.net/concept/bonno-virus-mapping/](https://research.pyol.net/concept/bonno-virus-mapping/)
- **Email**: matsuura@pyol.net
- **X**: [@mindseed0805](https://x.com/mindseed0805)

## 引用 / Citation

```bibtex
@misc{matsuura2026expfcCore,
  author       = {Toshinobu Matsuura},
  title        = {ExPFC Core Specification v0.1},
  year         = {2026},
  publisher    = {Mindseed Research},
  url          = {https://github.com/mindseed-research/expfc-core},
  note         = {See also: \url{https://research.pyol.net/concept/bonno-virus-mapping/#17}}
}
```

---

**Mindseed Research / 松浦 歳宣 (Toshinobu Matsuura)**
和歌山市 / Wakayama, Japan
