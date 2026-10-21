# Assemblage 23 Italia — V2 handoff

## Purpose
This repository is the isolated V2 development track for the approved Base44 build. The current production repository and site remain untouched.

## Important provenance notice
- Base44 application: https://app.base44.com/apps/6ad81c942f5f41099acebef8/editor/preview
- Existing GitHub repository (reference only): https://github.com/salvatoresinatra0001-ux/assemblage23-italia
- Reference main commit inspected: `faedad4cc9e96a8920f1a21d7615a008e910d8f4`
- The existing GitHub repository describes an older static **v20 DC** implementation. It is not verified as an export of the current Base44 editor build.
- Do not claim the Base44 UI has been cloned until the full export is downloaded and visually/code compared.

## Versioning model
- Base44 current app = approved visual reference / keep unchanged.
- GitHub V2 repository = independent code track once the full export is available.
- Netlify V2 project = isolated preview/staging target.
- Production repository `assemblage23-italia`, production Netlify project `assemblage23-italia`, and `https://www.assemblage23.it` must not be modified as part of V2 setup.

## Required export contents
1. Application source and complete directory tree.
2. Pages, components, styles, configuration, static assets and fonts.
3. Package manifest and lockfile, build configuration, routing and redirects.
4. Base44 entity schemas and records export where supported and authorized.
5. Backend functions, automation definitions, agent configuration and connector metadata (never include live credentials).
6. List of Base44-only services that need replacement/adaptation outside Base44.
7. `.env.example` with names only; secrets must not enter git.
8. README with local setup, build command, deployment settings and known gaps.

## Migration checklist
- [ ] Export the actual current Base44 app, not just the older static GitHub repository.
- [ ] Inspect all files and asset rights; exclude secrets and user data unless explicitly appropriate.
- [ ] Compare visual reference at desktop and mobile sizes.
- [ ] Confirm routes, interactions, forms, media and accessibility.
- [ ] Configure Netlify V2 to deploy only its own repository and preview domain.
- [ ] Run production build and broken-link checks before first deploy.
- [ ] Keep V2 as preview until explicitly approved.

## Netlify
Intended isolated project: `assemblage23-italia-v2`.
Project dashboard: https://app.netlify.com/projects/assemblage23-italia-v2
No deploy has been triggered by this handoff document. The project needs the exported source connected/configured before a meaningful preview build can be published.

## Known base repository facts (reference only)
- Stack appears to be static HTML/CSS/JS.
- Existing `netlify.toml` publishes `site/`.
- Existing main branch latest inspected commit: `faedad4cc9e96a8920f1a21d7615a008e910d8f4`.
- Existing readme identifies its own build as v20 DC, so do not treat it as the current Base44 export.

## Safety
Never copy `.env`, tokens, API keys, OAuth credentials or private connector payloads into source control.
