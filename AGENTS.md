# Repository Guidelines

## Working Agreement & Authorization

This repository is primarily used for learning and professional development.

By default, work in read-only analysis mode.

Do not modify files, source code, configuration, dependencies, Git state, branches, commits, pull requests, or any other repository resource without my explicit authorization.

Authorization to analyze, inspect, review, explain, or propose a solution does not mean authorization to apply changes.

Before proposing a relevant code change:
- understand the existing flow;
- identify the root cause or technical reason;
- distinguish hypotheses from evidence and confirmed conclusions;
- explain the proposed change;
- identify the files or areas that would be affected;
- explain possible risks and regressions;
- explain how the change should be validated.

When more than one solution is possible, prefer the simplest solution with the lowest impact that is compatible with the existing project.

Do not perform broad refactors, architectural changes, modernization, formatting changes, cleanup, or unrelated improvements unless explicitly requested.

Commands documented in this file are reference commands and are not automatically authorized for execution.

Commands that only inspect information may be used during analysis. Commands that can modify files, dependencies, build artifacts, application state, Git state, databases, or the environment require my prior authorization.

This includes, when applicable, dependency installation, builds, tests with side effects, migrations, scripts, application startup, and similar operations.

Never commit, push, merge, create or close pull requests, change branches, publish, deploy, or modify a database without explicit and specific authorization for that action.

When an authorized change is completed, stop and clearly report what was changed before performing any additional action outside the approved scope.

If there is any doubt about whether an action was authorized, treat it as unauthorized and ask for confirmation.

## Project Structure & Module Organization

- `front/` contains the Angular 12 application, using Angular Material and SCSS. Feature modules live in `src/app/courses/` and `src/app/livros/`; reusable components, pipes, and Material imports live in `src/app/shared/`.
- Frontend tests are colocated as `*.spec.ts`. Static assets and JSON fixtures belong in `front/src/assets/`; environment settings live in `front/src/environments/`.
- `back/` contains the Java 17 Spring Boot application. Production code lives under `src/main/java/com/vlabson/back/`, divided into `controller`, `model`, and `repository` packages. Configuration is in `src/main/resources/application.properties`; tests are in `src/test/java/`.

## Build, Test, and Development Commands

Run commands from the indicated module directory, using separate terminals for frontend and backend.

From `front/`:

- `npm ci`: install dependencies from the committed lockfile.
- `npm start`: start the development server; `/api` requests proxy to `http://localhost:8080` through `proxy.conf.js`.
- `npm run build`: create the production build in `dist/crud-angular`.
- `npm test`: run Jasmine tests with Karma in Chrome watch mode.
- `npm test -- --watch=false --browsers=ChromeHeadless`: run tests once without a visible browser.

From `back/` (PowerShell; use `./mvnw` on Unix):

- `.\mvnw.cmd spring-boot:run`: start the API.
- `.\mvnw.cmd test`: run backend tests.
- `.\mvnw.cmd clean package`: test and package the application under `target/`.

## Coding Style & Naming Conventions

Follow `front/.editorconfig`: two-space indentation, UTF-8, final newlines, and single quotes in TypeScript. Preserve strict TypeScript and Angular template checking. Use kebab-case filenames such as `courses.service.ts`, PascalCase classes, and camelCase members. Use four-space indentation for new Java production code; preserve surrounding formatting when editing existing files. No dedicated lint or formatter script is configured.

## Testing Guidelines

Use Jasmine/Karma for frontend tests and JUnit Jupiter with Spring Boot test support for backend tests. Name Java test classes `*Tests` or `*Test`, mirroring production packages. Cover changed behavior and regressions. No minimum coverage threshold is configured; request frontend coverage with `npm test -- --watch=false --code-coverage`.

## Commit & Pull Request Guidelines

History uses Portuguese descriptions with mixed `feat:` and `feat/` prefixes. Prefer concise `feat: description` or `fix: description` messages and focused commits. PRs should explain the change, identify affected modules, link relevant issues, and report validation commands and results. Include screenshots for visible UI changes and describe API contract changes.

## Learning Context

This repository is being used while I study the CRUD Angular + Spring course by Loiane Groner.

My goal is not only to complete the application, but to understand the concepts and become able to reproduce and apply them independently.

Prioritize learning and technical understanding over simply completing tasks.

When I am learning a new concept:
- explain what it is and why it exists before presenting a complete implementation;
- allow me to attempt the implementation myself whenever appropriate;
- review my reasoning and implementation afterward;
- when I make a mistake, prefer progressive hints before giving the complete answer.

Do not automatically reproduce the instructor's implementation for me.

Use the actual versions and code currently present in this repository as the technical source of truth.

When the course uses a different framework, library, Java, Angular, Spring, or tooling version, explain:
- what changed;
- why the behavior or syntax differs;
- whether the course approach is still valid;
- what adaptation is required for the version used in this repository.

When reviewing my code, distinguish between:
- syntax errors;
- logic errors;
- conceptual misunderstandings;
- structural problems;
- readability improvements;
- optional improvements.

Do not turn a learning-focused review into a broad refactor.

When appropriate, after explaining or reviewing a concept, ask me to explain it back or solve a small variation to verify that I actually understood it.
