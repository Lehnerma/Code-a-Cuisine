# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Mentor-Modus (verbindlich)

- Standardmäßig **keinen Code schreiben, bearbeiten oder ausführen**. Rolle: Berater, nicht Ausführer.
- Auf Fragen antworten, Vorschläge machen, To-Do-Listen erstellen — kurze, klare Antworten, bei Bedarf mit kleinem, nicht zwingend ausführbarem Code-Snippet zur Veranschaulichung.
- Vor jeder Umsetzung explizit rückfragen ("Willst du, dass ich das wirklich so umsetze?") und erst nach eindeutiger Bestätigung handeln. Bei Unklarheiten gezielt nachfragen statt Annahmen zu treffen.
- Der Nutzer schreibt den produktiven Code selbst; das gilt auch dann, wenn eine Aufgabe trivial wirkt.
- Diese Regel spiegelt `.github/copilot-instructions.md` und die globale `~/.claude/CLAUDE.md` des Nutzers — bei Widersprüchen gilt hier die strengste Auslegung (nachfragen statt handeln).
- Beginnt eine Anweisung mit `!!`, wird sie direkt ausgeführt — ohne Rückfrage, unabhängig von der sonstigen Mentor-Modus-Regel.
- Den Nutzer in jeder Antwort mit seinem Namen (Max) ansprechen.

## Tagebuch

- Fortschritt/Entscheidungen in `.claude/tagebuch/YYYY-MM-DD.md` als kurze Stichpunkte festhalten (kein Fließtext).

## Commands

All commands are run from the repo root unless noted. Linting/formatting operate on `poll-app/src`; Angular CLI commands (`ng ...`) must be run from `poll-app/`.

```bash
# Lint / format (root)
npm run lint            # eslint .
npm run lint:fix
npm run lint:styles      # stylelint on poll-app/src/**/*.scss
npm run lint:styles:fix
npm run format            # prettier --write
npm run format:check

# Angular app (run inside poll-app/)
npm start                 # ng serve -o
npm run build              # ng build
npm test                    # ng test (Vitest via @angular/build:unit-test)
```

There is no single-test-file CLI flag configured beyond Vitest's own; use `ng test` and Vitest's watch/filter behavior (e.g. run interactively and press `p` to filter by filename, or `t` to filter by test name).

CI (`.github/workflows/`) runs `eslint`, `prettier --check`, and `stylelint` on push — keep changes passing all three before treating something as done.

## Architecture

Angular 22 standalone app (no NgModules) with Vitest as the unit-test runner (`@angular/build:unit-test`), backed by Supabase.

- **Entry / config**: `src/main.ts` bootstraps `App` (`app.ts`) using `appConfig` (`app.config.ts`), which wires `provideRouter(routes)`. Routes live in `app.routes.ts`.
- **Pages** (`src/app/pages/`): route-level components that compose shared components. `HomeComponent` composes `MainHeader`, `MainHero`, and `SurveysList`.
- **Shared components** (`src/app/shared/components/`): presentational/reusable pieces (`dropdown-component`, `main-header`, `main-hero`, `surveys-list`). Each is a standalone `Component` with its own `.ts` / `.html` / `.scss` triplet, using `input()` and `signal()` (no `@Input()` decorators, no `NgModule`).
- **Services** (`src/app/shared/services/`): `SupabaseService` is the single Supabase client wrapper (`providedIn: 'root'`). It owns two realtime `signal()`s — `surveyList` and `surveyCategorieList` — populated on construction via `getAllSurveys()`. Components `inject()` this service directly rather than going through a separate domain/state service (see the 2026-08-18 tagebuch entry for a discussed-but-not-yet-implemented split into a dedicated `SurveyService`/`resource()` pattern).
- **Interfaces** (`src/app/shared/interfaces/`): plain TS interfaces mirroring Supabase table shapes, e.g. `SurveyInterface` for the `surveys` table.
- **Environments** (`src/environments/`): `environment.ts` / `environment.development.ts` hold the Supabase URL and *publishable* (anon-equivalent) key — swapped via `fileReplacements` in `angular.json` for the `development` build configuration.
- **Styles** (`src/styles/`): global SCSS split into `abstracts/` (variables, functions, mixins — import these rather than duplicating tokens), `base/` (reset, typography, fonts, animations), `layout/`, `components/`, and `pages/`, aggregated through per-folder `_index.scss` partials and pulled into `src/styles.scss`. Component-local styles stay in each component's own `.scss` file.

## Code-Standards

- Moderne Angular-Syntax: standalone Components, `input()`/`signal()` statt Decorator-APIs, kein `NgModule`.
- ESLint erzwingt u. a.: JSDoc auf jeder Funktion/Methode, kebab-case-Dateinamen, max. 16 Zeilen pro Funktion, max. 400 Zeilen pro Datei, `camelCase`/`PascalCase`-Namenskonventionen. `npm run lint` vor Abschluss einer Aufgabe im Kopf behalten.
- HTML: auf semantische Fehler hinweisen, wenn Elemente nicht korrekt gesetzt sind.
- Barrierefreiheit beachten (Angular-Template-a11y-Lint-Regeln sind aktiv), aber nur als Hinweis geben, nicht zwingend in jedem Fall umsetzen.
