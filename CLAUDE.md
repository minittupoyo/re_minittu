# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun run dev       # 開発サーバー起動 (http://localhost:3000)
bun run build     # プロダクションビルド
bun run generate  # 静的サイト生成
bun run preview   # プロダクションビルドのプレビュー
```

パッケージマネージャーは **Bun** を使用。`npm`/`yarn`/`pnpm` は使わない。

## アーキテクチャ

Nuxt 4 + `@nuxt/content` v3 のブログサイト。

### ディレクトリ構造

- `app/` — Nuxt 4 のアプリケーションコード（pages/layouts/composables/assets）
- `content/blog/` — ブログ記事 Markdown（`blog` コレクション）
- `content/page/` — 固定ページ Markdown（`pages` コレクション）
- `content.config.ts` — コレクションスキーマ定義（zod）
- `nuxt.config.ts` — Nuxt 設定（remark プラグイン含む）

### コンテンツ

`content.config.ts` で2つのコレクションを定義：

- `blog`: `title`, `description`, `date`（coerce.date）, `tags`（string[]）が必須フロントマター
- `pages`: `title`, `description` が必須フロントマター

ページからは `queryCollection("blog")` / `queryCollectionItemSurroundings()` で取得。

### UI コンポーネント

`@nuxt/ui` v4 のコンポーネントを使用（`UContainer`, `UPage`, `UBlogPost` 等）。Tailwind CSS v4。
アイコンは `i-lucide-*`（Lucide）と `i-tabler-*`（Tabler）が利用可能。
`ui` prop にも Tailwind クラスが使える（VSCode の IntelliSense 対応済み）。

### Markdown 拡張

`nuxt.config.ts` の `content.build.markdown.remarkPlugins` に設定：
- `remark-breaks` — 改行をそのまま `<br>` に変換
- `remark-link-card-plus` — 単独行の URL をリンクカードに変換

リンクカードのスタイルは `app/assets/main.css` に定義（`.remark-link-card-plus__*`）。

### ルーティング

- `/` — トップページ（`app/pages/index.vue`）
- `/blog` — 記事一覧（日付降順）
- `/blog/[slug]` — 記事詳細（TOC・前後記事ナビ付き）
- `/about` — About ページ

### composables

- `useFormatDate(date)` — 日本語形式（YYYY/MM/DD）の日付フォーマット
