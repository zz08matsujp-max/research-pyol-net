// src/i18n/ja.ts - 日本語 UI 文言辞書
// 設計指示書 v1.1 §6.4 / §8 に準拠

export const ja = {
  // ヘッダー・ナビ
  nav: {
    home: 'ホーム',
    about: 'About',
    concept: '研究プログラム',
    essays: '論考',
    contact: '連絡先',
    languageSwitch: 'English'
  },
  // フッター
  footer: {
    copyright: 'マインドシード研究所',
    license: 'ライセンス: CC BY 4.0',
    github: 'GitHub',
    workInProgress: '作業中（Work in Progress）'
  },
  // 共通
  common: {
    languageSwitch: '言語を切り替える',
    backToTop: 'トップへ戻る',
    pdfDownload: 'PDF版ダウンロード',
    revisionHistory: '改訂履歴',
    citation: '引用情報'
  },
  // メタ情報
  meta: {
    siteTitle: 'マインドシード研究所',
    siteDescription: '煩悩 × AI ── 詐欺対策から始まる、人間理解の研究プログラム'
  }
} as const;
