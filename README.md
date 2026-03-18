# Design Playground

A Storybook starter kit for scaffolding UI pages with the Envato Design System. Open this repo in Cursor and use the included layout examples as starting points — describe the page you want to Cursor and it will scaffold a new story for you.

## Prerequisites

- Node.js >= 22
- GitHub CLI (`gh`) — used to authenticate with GitHub Packages

## Setup

### 1. Install the GitHub CLI

```bash
brew install gh
```

> Don't have Homebrew? Install it first at [brew.sh](https://brew.sh).

### 2. Authenticate with GitHub

```bash
gh auth login --scopes read:packages
```

This opens a browser-based flow — just follow the prompts. The `read:packages` scope lets npm download `@envato/design-system` from GitHub Packages.

Then expose your token to npm:

```bash
export GITHUB_TOKEN=$(gh auth token)
```

> Add this line to your `~/.zshrc` (or `~/.bashrc`) so you don't need to repeat it in future sessions.

### 3. Install dependencies

```bash
npm install --legacy-peer-deps
```

> `--legacy-peer-deps` is required because `react-slider` declares React 16–18 as a peer dependency.

### 4. Start Storybook

```bash
npm run storybook
```

Storybook opens at [http://localhost:6006](http://localhost:6006) (or 6007 if 6006 is already in use).

## Layout examples

Three ready-to-use page layouts live in `app/examples/`. Open any of them in Cursor as a reference when scaffolding a new page.

| Story | File | Use when… |
|---|---|---|
| **App Shell** | `app/examples/AppShell.stories.tsx` | Any page with a sidebar nav |
| **Content Grid** | `app/examples/ContentGrid.stories.tsx` | Browse, search results, galleries |
| **Settings Page** | `app/examples/SettingsPage.stories.tsx` | Forms, preferences, account pages |

## Adding a new page

1. Copy the closest example from `app/examples/` into `app/routes/your-page/`
2. Open it in Cursor and describe the UI you want — paste in a Figma URL or describe the layout in plain English
3. Run `npm run storybook` and check your story at [http://localhost:6006](http://localhost:6006)

Storybook auto-discovers any file matching `app/**/*.stories.tsx`.

## What's included

### Design System
- Full Envato Design System with light/dark mode toggle (toolbar top-right)
- PolySans font family
- Icon sprite

### Layout components (from `@envato/design-system/components`)
- `Box` — the base building block for all layout and spacing
- `Stack` — vertical layout with spacing tokens
- `Columns` — responsive grid with `minColumnWidth`
- `Bleed` — escape a parent's padding (needed for fullscreen layouts)
- `Hidden` — show/hide content at responsive breakpoints
- `Text` — typography (variants: `title-1`–`title-4`, `subheading`, `body-large`, `body-small`, `label-large`, `label-small`, `micro`)
- `Button`, `IconButton` — actions

### Navigation
- `app/components/Navigation/` — collapsible sidebar (drawer on narrow, panel on wide)
- `app/components/Navigation/storyData.ts` — ready-made nav item and accordion fixtures

### Story infrastructure (applied globally — no setup needed per story)
- React Router memory router
- All app context providers
- i18n with locale switcher (EN, ES, PT-BR, DE, FR)
- Light/dark color scheme switcher
- Accessibility checks via a11y addon

## Build for static hosting

```bash
npm run build-storybook
```

Output goes to `storybook-static/`.

## Deploying to GitHub Pages (Envato org)

The repo ships with a GitHub Actions workflow (`.github/workflows/deploy-storybook.yml`) that builds and deploys Storybook to GitHub Pages on every push to `main`. The site is private — only members of the Envato org can access it.

### First-time setup for a new repo

**1. Create the repo in the Envato org**

```bash
gh repo create envato/<repo-name> --private --description "..." --source=. --remote=origin --push
```

**2. Add the npm auth token as a repository secret**

The `@envato/design-system` package lives on GitHub Packages and requires authentication. Add your GitHub personal access token (needs `read:packages` scope) as a secret named `NPM_TOKEN`:

```bash
gh secret set NPM_TOKEN --body "your_token_here" --repo envato/<repo-name>
```

**3. Enable GitHub Pages**

```bash
gh api repos/envato/<repo-name>/pages --method POST -f build_type=workflow
```

That's it. Push to `main` and the Actions workflow will build and publish automatically. You can monitor runs at `https://github.com/envato/<repo-name>/actions`.

### How the workflow authenticates

Because `.npmrc` is gitignored (it contains a local auth token), the workflow writes a fresh `.npmrc` at build time using the `NPM_TOKEN` secret:

```yaml
- run: |
    echo "//npm.pkg.github.com/:_authToken=${{ secrets.NPM_TOKEN }}" > .npmrc
    echo "@envato:registry=https://npm.pkg.github.com" >> .npmrc
```
