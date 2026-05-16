// src/i18n/en.ts - English UI dictionary
// Per design spec v1.1 §6.4 / §8

export const en = {
  nav: {
    home: 'Home',
    about: 'About',
    concept: 'Research Program',
    essays: 'Essays',
    contact: 'Contact',
    languageSwitch: '日本語'
  },
  footer: {
    copyright: 'Mindseed Research',
    license: 'License: CC BY 4.0',
    github: 'GitHub',
    workInProgress: 'Work in Progress'
  },
  common: {
    languageSwitch: 'Switch language',
    backToTop: 'Back to top',
    pdfDownload: 'Download PDF',
    revisionHistory: 'Revision history',
    citation: 'Citation'
  },
  meta: {
    siteTitle: 'Mindseed Research',
    siteDescription: 'Bonnō × AI — A research program in human understanding, beginning with anti-scam'
  }
} as const;
