// astro.config.mjs - Astro サイト設定（i18n 含む）
// 設計指示書 v1.1 §3.1 / 付録B に準拠
//
// 注: @astrojs/sitemap は Astro 4.16 系と routes API 非互換のため
// v0.1 では外している。sitemap は設計指示書 v1.1 §4.2 通り v0.2 で
// 再導入する（Astro 5.x への upgrade と合わせて検討）。
// hreflang は BaseLayout.astro で各ページ個別に設定済み。
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://research.pyol.net',
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [],
  build: {
    format: 'directory'
  }
});
