тут что-то типо описания проекта, короче это Fresh блин не помню
```
rostor
├─ README.md
├─ backend
│  ├─ .editorconfig
│  ├─ .npmrc
│  ├─ .prettierignore
│  ├─ .prettierrc.json
│  ├─ Dockerfile
│  ├─ README.md
│  ├─ components.json
│  ├─ docker-compose.yml
│  ├─ eslint.config.mjs
│  ├─ next-sitemap.config.cjs
│  ├─ next.config.ts
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ playwright.config.ts
│  ├─ postcss.config.js
│  ├─ public
│  │  ├─ favicon.ico
│  │  ├─ favicon.svg
│  │  └─ website-template-OG.webp
│  ├─ redirects.ts
│  ├─ src
│  │  ├─ Footer
│  │  │  ├─ Component.tsx
│  │  │  ├─ RowLabel.tsx
│  │  │  ├─ config.ts
│  │  │  └─ hooks
│  │  │     └─ revalidateFooter.ts
│  │  ├─ Header
│  │  │  ├─ Component.client.tsx
│  │  │  ├─ Component.tsx
│  │  │  ├─ Nav
│  │  │  │  └─ index.tsx
│  │  │  ├─ RowLabel.tsx
│  │  │  ├─ config.ts
│  │  │  └─ hooks
│  │  │     └─ revalidateHeader.ts
│  │  ├─ access
│  │  │  ├─ anyone.ts
│  │  │  ├─ authenticated.ts
│  │  │  └─ authenticatedOrPublished.ts
│  │  ├─ app
│  │  │  ├─ (frontend)
│  │  │  │  ├─ (sitemaps)
│  │  │  │  │  ├─ pages-sitemap.xml
│  │  │  │  │  │  └─ route.ts
│  │  │  │  │  └─ posts-sitemap.xml
│  │  │  │  │     └─ route.ts
│  │  │  │  ├─ [slug]
│  │  │  │  │  ├─ page.client.tsx
│  │  │  │  │  └─ page.tsx
│  │  │  │  ├─ globals.css
│  │  │  │  ├─ layout.tsx
│  │  │  │  ├─ next
│  │  │  │  │  ├─ exit-preview
│  │  │  │  │  │  └─ route.ts
│  │  │  │  │  ├─ preview
│  │  │  │  │  │  └─ route.ts
│  │  │  │  │  └─ seed
│  │  │  │  │     └─ route.ts
│  │  │  │  ├─ not-found.tsx
│  │  │  │  ├─ page.tsx
│  │  │  │  ├─ posts
│  │  │  │  │  ├─ [slug]
│  │  │  │  │  │  ├─ page.client.tsx
│  │  │  │  │  │  └─ page.tsx
│  │  │  │  │  ├─ page
│  │  │  │  │  │  └─ [pageNumber]
│  │  │  │  │  │     ├─ page.client.tsx
│  │  │  │  │  │     └─ page.tsx
│  │  │  │  │  ├─ page.client.tsx
│  │  │  │  │  └─ page.tsx
│  │  │  │  └─ search
│  │  │  │     ├─ page.client.tsx
│  │  │  │     └─ page.tsx
│  │  │  └─ (payload)
│  │  │     ├─ admin
│  │  │     │  ├─ [[...segments]]
│  │  │     │  │  ├─ not-found.tsx
│  │  │     │  │  └─ page.tsx
│  │  │     │  └─ importMap.js
│  │  │     ├─ api
│  │  │     │  ├─ [...slug]
│  │  │     │  │  └─ route.ts
│  │  │     │  ├─ graphql
│  │  │     │  │  └─ route.ts
│  │  │     │  └─ graphql-playground
│  │  │     │     └─ route.ts
│  │  │     ├─ custom.scss
│  │  │     └─ layout.tsx
│  │  ├─ blocks
│  │  │  ├─ ArchiveBlock
│  │  │  │  ├─ Component.tsx
│  │  │  │  └─ config.ts
│  │  │  ├─ Banner
│  │  │  │  ├─ Component.tsx
│  │  │  │  └─ config.ts
│  │  │  ├─ CallToAction
│  │  │  │  ├─ Component.tsx
│  │  │  │  └─ config.ts
│  │  │  ├─ Code
│  │  │  │  ├─ Component.client.tsx
│  │  │  │  ├─ Component.tsx
│  │  │  │  ├─ CopyButton.tsx
│  │  │  │  └─ config.ts
│  │  │  ├─ Content
│  │  │  │  ├─ Component.tsx
│  │  │  │  └─ config.ts
│  │  │  ├─ Form
│  │  │  │  ├─ Checkbox
│  │  │  │  │  └─ index.tsx
│  │  │  │  ├─ Component.tsx
│  │  │  │  ├─ Country
│  │  │  │  │  ├─ index.tsx
│  │  │  │  │  └─ options.ts
│  │  │  │  ├─ Email
│  │  │  │  │  └─ index.tsx
│  │  │  │  ├─ Error
│  │  │  │  │  └─ index.tsx
│  │  │  │  ├─ Message
│  │  │  │  │  └─ index.tsx
│  │  │  │  ├─ Number
│  │  │  │  │  └─ index.tsx
│  │  │  │  ├─ Select
│  │  │  │  │  └─ index.tsx
│  │  │  │  ├─ State
│  │  │  │  │  ├─ index.tsx
│  │  │  │  │  └─ options.ts
│  │  │  │  ├─ Text
│  │  │  │  │  └─ index.tsx
│  │  │  │  ├─ Textarea
│  │  │  │  │  └─ index.tsx
│  │  │  │  ├─ Width
│  │  │  │  │  └─ index.tsx
│  │  │  │  ├─ config.ts
│  │  │  │  └─ fields.tsx
│  │  │  ├─ MediaBlock
│  │  │  │  ├─ Component.tsx
│  │  │  │  └─ config.ts
│  │  │  ├─ RelatedPosts
│  │  │  │  └─ Component.tsx
│  │  │  └─ RenderBlocks.tsx
│  │  ├─ collections
│  │  │  ├─ Categories.ts
│  │  │  ├─ Media.ts
│  │  │  ├─ Pages
│  │  │  │  ├─ hooks
│  │  │  │  │  └─ revalidatePage.ts
│  │  │  │  └─ index.ts
│  │  │  ├─ Posts
│  │  │  │  ├─ hooks
│  │  │  │  │  ├─ populateAuthors.ts
│  │  │  │  │  └─ revalidatePost.ts
│  │  │  │  └─ index.ts
│  │  │  └─ Users
│  │  │     └─ index.ts
│  │  ├─ components
│  │  │  ├─ AdminBar
│  │  │  │  ├─ index.scss
│  │  │  │  └─ index.tsx
│  │  │  ├─ BeforeDashboard
│  │  │  │  ├─ SeedButton
│  │  │  │  │  ├─ index.scss
│  │  │  │  │  └─ index.tsx
│  │  │  │  ├─ index.scss
│  │  │  │  └─ index.tsx
│  │  │  ├─ BeforeLogin
│  │  │  │  └─ index.tsx
│  │  │  ├─ Card
│  │  │  │  └─ index.tsx
│  │  │  ├─ CollectionArchive
│  │  │  │  └─ index.tsx
│  │  │  ├─ Link
│  │  │  │  └─ index.tsx
│  │  │  ├─ LivePreviewListener
│  │  │  │  └─ index.tsx
│  │  │  ├─ Logo
│  │  │  │  └─ Logo.tsx
│  │  │  ├─ Media
│  │  │  │  ├─ ImageMedia
│  │  │  │  │  └─ index.tsx
│  │  │  │  ├─ VideoMedia
│  │  │  │  │  └─ index.tsx
│  │  │  │  ├─ index.tsx
│  │  │  │  └─ types.ts
│  │  │  ├─ PageRange
│  │  │  │  └─ index.tsx
│  │  │  ├─ Pagination
│  │  │  │  └─ index.tsx
│  │  │  ├─ PayloadRedirects
│  │  │  │  └─ index.tsx
│  │  │  ├─ RichText
│  │  │  │  └─ index.tsx
│  │  │  └─ ui
│  │  │     ├─ button.tsx
│  │  │     ├─ card.tsx
│  │  │     ├─ checkbox.tsx
│  │  │     ├─ input.tsx
│  │  │     ├─ label.tsx
│  │  │     ├─ pagination.tsx
│  │  │     ├─ select.tsx
│  │  │     └─ textarea.tsx
│  │  ├─ cssVariables.js
│  │  ├─ endpoints
│  │  │  └─ seed
│  │  │     ├─ contact-form.ts
│  │  │     ├─ contact-page.ts
│  │  │     ├─ home-static.ts
│  │  │     ├─ home.ts
│  │  │     ├─ image-1.ts
│  │  │     ├─ image-2.ts
│  │  │     ├─ image-hero-1.ts
│  │  │     ├─ image-hero1.webp
│  │  │     ├─ image-post1.webp
│  │  │     ├─ image-post2.webp
│  │  │     ├─ image-post3.webp
│  │  │     ├─ index.ts
│  │  │     ├─ post-1.ts
│  │  │     ├─ post-2.ts
│  │  │     └─ post-3.ts
│  │  ├─ environment.d.ts
│  │  ├─ fields
│  │  │  ├─ defaultLexical.ts
│  │  │  ├─ link.ts
│  │  │  └─ linkGroup.ts
│  │  ├─ heros
│  │  │  ├─ HighImpact
│  │  │  │  └─ index.tsx
│  │  │  ├─ LowImpact
│  │  │  │  └─ index.tsx
│  │  │  ├─ MediumImpact
│  │  │  │  └─ index.tsx
│  │  │  ├─ PostHero
│  │  │  │  └─ index.tsx
│  │  │  ├─ RenderHero.tsx
│  │  │  └─ config.ts
│  │  ├─ hooks
│  │  │  ├─ populatePublishedAt.ts
│  │  │  └─ revalidateRedirects.ts
│  │  ├─ payload-types.ts
│  │  ├─ payload.config.ts
│  │  ├─ plugins
│  │  │  └─ index.ts
│  │  ├─ providers
│  │  │  ├─ HeaderTheme
│  │  │  │  └─ index.tsx
│  │  │  ├─ Theme
│  │  │  │  ├─ InitTheme
│  │  │  │  │  └─ index.tsx
│  │  │  │  ├─ ThemeSelector
│  │  │  │  │  ├─ index.tsx
│  │  │  │  │  └─ types.ts
│  │  │  │  ├─ index.tsx
│  │  │  │  ├─ shared.ts
│  │  │  │  └─ types.ts
│  │  │  └─ index.tsx
│  │  ├─ search
│  │  │  ├─ Component.tsx
│  │  │  ├─ beforeSync.ts
│  │  │  └─ fieldOverrides.ts
│  │  └─ utilities
│  │     ├─ canUseDOM.ts
│  │     ├─ deepMerge.ts
│  │     ├─ formatAuthors.ts
│  │     ├─ formatDateTime.ts
│  │     ├─ generateMeta.ts
│  │     ├─ generatePreviewPath.ts
│  │     ├─ getDocument.ts
│  │     ├─ getGlobals.ts
│  │     ├─ getMeUser.ts
│  │     ├─ getMediaUrl.ts
│  │     ├─ getRedirects.ts
│  │     ├─ getURL.ts
│  │     ├─ mergeOpenGraph.ts
│  │     ├─ toKebabCase.ts
│  │     ├─ ui.ts
│  │     ├─ useClickableCard.ts
│  │     └─ useDebounce.ts
│  ├─ tailwind.config.mjs
│  ├─ tests
│  │  ├─ e2e
│  │  │  ├─ admin.e2e.spec.ts
│  │  │  └─ frontend.e2e.spec.ts
│  │  ├─ helpers
│  │  │  ├─ login.ts
│  │  │  └─ seedUser.ts
│  │  └─ int
│  │     └─ api.int.spec.ts
│  ├─ tsconfig.json
│  ├─ vitest.config.mts
│  └─ vitest.setup.ts
└─ frontend
   ├─ .nuxt
   │  ├─ app.config.mjs
   │  ├─ components.d.ts
   │  ├─ imports.d.ts
   │  ├─ manifest
   │  │  └─ meta
   │  │     └─ 2abd3df5-e626-4fe3-ac8a-f70573da35d0.json
   │  ├─ nuxt-fonts-global.css
   │  ├─ nuxt-icon-client-bundle.mjs
   │  ├─ nuxt-icon-server-bundle.mjs
   │  ├─ nuxt.d.ts
   │  ├─ nuxt.json
   │  ├─ nuxt.node.d.ts
   │  ├─ nuxt.shared.d.ts
   │  ├─ schema
   │  │  ├─ nuxt.schema.d.ts
   │  │  └─ nuxt.schema.json
   │  ├─ tsconfig.app.json
   │  ├─ tsconfig.json
   │  ├─ tsconfig.node.json
   │  ├─ tsconfig.server.json
   │  ├─ tsconfig.shared.json
   │  ├─ types
   │  │  ├─ app.config.d.ts
   │  │  ├─ build.d.ts
   │  │  ├─ builder-env.d.ts
   │  │  ├─ components.d.ts
   │  │  ├─ imports.d.ts
   │  │  ├─ layouts.d.ts
   │  │  ├─ middleware.d.ts
   │  │  ├─ modules.d.ts
   │  │  ├─ nitro-config.d.ts
   │  │  ├─ nitro-imports.d.ts
   │  │  ├─ nitro-layouts.d.ts
   │  │  ├─ nitro-middleware.d.ts
   │  │  ├─ nitro-nuxt.d.ts
   │  │  ├─ nitro-routes.d.ts
   │  │  ├─ nitro.d.ts
   │  │  ├─ plugins.d.ts
   │  │  ├─ runtime-config.d.ts
   │  │  ├─ shared-imports.d.ts
   │  │  ├─ ui.d.ts
   │  │  └─ vue-shim.d.ts
   │  ├─ ui
   │  │  ├─ accordion.ts
   │  │  ├─ alert.ts
   │  │  ├─ auth-form.ts
   │  │  ├─ avatar-group.ts
   │  │  ├─ avatar.ts
   │  │  ├─ badge.ts
   │  │  ├─ banner.ts
   │  │  ├─ blog-post.ts
   │  │  ├─ blog-posts.ts
   │  │  ├─ breadcrumb.ts
   │  │  ├─ button.ts
   │  │  ├─ calendar.ts
   │  │  ├─ card.ts
   │  │  ├─ carousel.ts
   │  │  ├─ changelog-version.ts
   │  │  ├─ changelog-versions.ts
   │  │  ├─ chat-message.ts
   │  │  ├─ chat-messages.ts
   │  │  ├─ chat-palette.ts
   │  │  ├─ chat-prompt-submit.ts
   │  │  ├─ chat-prompt.ts
   │  │  ├─ chat-reasoning.ts
   │  │  ├─ chat-shimmer.ts
   │  │  ├─ chat-tool.ts
   │  │  ├─ checkbox-group.ts
   │  │  ├─ checkbox.ts
   │  │  ├─ chip.ts
   │  │  ├─ collapsible.ts
   │  │  ├─ color-picker.ts
   │  │  ├─ command-palette.ts
   │  │  ├─ container.ts
   │  │  ├─ context-menu.ts
   │  │  ├─ dashboard-group.ts
   │  │  ├─ dashboard-navbar.ts
   │  │  ├─ dashboard-panel.ts
   │  │  ├─ dashboard-resize-handle.ts
   │  │  ├─ dashboard-search-button.ts
   │  │  ├─ dashboard-search.ts
   │  │  ├─ dashboard-sidebar-collapse.ts
   │  │  ├─ dashboard-sidebar-toggle.ts
   │  │  ├─ dashboard-sidebar.ts
   │  │  ├─ dashboard-toolbar.ts
   │  │  ├─ drawer.ts
   │  │  ├─ dropdown-menu.ts
   │  │  ├─ editor-drag-handle.ts
   │  │  ├─ editor-emoji-menu.ts
   │  │  ├─ editor-mention-menu.ts
   │  │  ├─ editor-suggestion-menu.ts
   │  │  ├─ editor-toolbar.ts
   │  │  ├─ editor.ts
   │  │  ├─ empty.ts
   │  │  ├─ error.ts
   │  │  ├─ field-group.ts
   │  │  ├─ file-upload.ts
   │  │  ├─ footer-columns.ts
   │  │  ├─ footer.ts
   │  │  ├─ form-field.ts
   │  │  ├─ form.ts
   │  │  ├─ header.ts
   │  │  ├─ index.ts
   │  │  ├─ input-date.ts
   │  │  ├─ input-menu.ts
   │  │  ├─ input-number.ts
   │  │  ├─ input-tags.ts
   │  │  ├─ input-time.ts
   │  │  ├─ input.ts
   │  │  ├─ kbd.ts
   │  │  ├─ link.ts
   │  │  ├─ listbox.ts
   │  │  ├─ main.ts
   │  │  ├─ marquee.ts
   │  │  ├─ modal.ts
   │  │  ├─ navigation-menu.ts
   │  │  ├─ page-anchors.ts
   │  │  ├─ page-aside.ts
   │  │  ├─ page-body.ts
   │  │  ├─ page-card.ts
   │  │  ├─ page-columns.ts
   │  │  ├─ page-cta.ts
   │  │  ├─ page-feature.ts
   │  │  ├─ page-grid.ts
   │  │  ├─ page-header.ts
   │  │  ├─ page-hero.ts
   │  │  ├─ page-links.ts
   │  │  ├─ page-list.ts
   │  │  ├─ page-logos.ts
   │  │  ├─ page-section.ts
   │  │  ├─ page.ts
   │  │  ├─ pagination.ts
   │  │  ├─ pin-input.ts
   │  │  ├─ popover.ts
   │  │  ├─ pricing-plan.ts
   │  │  ├─ pricing-plans.ts
   │  │  ├─ pricing-table.ts
   │  │  ├─ progress.ts
   │  │  ├─ radio-group.ts
   │  │  ├─ scroll-area.ts
   │  │  ├─ select-menu.ts
   │  │  ├─ select.ts
   │  │  ├─ separator.ts
   │  │  ├─ sidebar.ts
   │  │  ├─ skeleton.ts
   │  │  ├─ slideover.ts
   │  │  ├─ slider.ts
   │  │  ├─ stepper.ts
   │  │  ├─ switch.ts
   │  │  ├─ table.ts
   │  │  ├─ tabs.ts
   │  │  ├─ textarea.ts
   │  │  ├─ timeline.ts
   │  │  ├─ toast.ts
   │  │  ├─ toaster.ts
   │  │  ├─ tooltip.ts
   │  │  ├─ tree.ts
   │  │  └─ user.ts
   │  ├─ ui-image-component.ts
   │  └─ ui.css
   ├─ README.md
   ├─ app
   │  ├─ app.vue
   │  ├─ assets
   │  │  └─ css
   │  │     └─ main.css
   │  ├─ pages
   │  │  └─ index.vue
   │  └─ stores
   ├─ bun.lock
   ├─ nuxt.config.ts
   ├─ package.json
   ├─ public
   │  ├─ favicon.ico
   │  └─ robots.txt
   └─ tsconfig.json

```