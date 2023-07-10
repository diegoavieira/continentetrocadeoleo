# React Design System

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/diegoavieira/rdsystem/blob/master/LICENSE)
[![test workflow](https://github.com/diegoavieira/rdsystem/actions/workflows/test.yml/badge.svg)](https://github.com/diegoavieira/rdsystem/actions/workflows/test.yml)
[![publish workflow](https://github.com/diegoavieira/rdsystem/actions/workflows/publish.yml/badge.svg)](https://github.com/diegoavieira/rdsystem/actions/workflows/publish.yml)
[![deploy workflow](https://github.com/diegoavieira/rdsystem/actions/workflows/deploy.yml/badge.svg)](https://github.com/diegoavieira/rdsystem/actions/workflows/deploy.yml)

Access the [documentation](https://diegoavieira.github.io/rdsystem) for more information.

## Development

Server local is run on http://localhost:8080.

```sh
npm start
```

## Test

Unit testing coverage can be found in the directory `/coverage/index.html` or [documentation test coverage](https://diegoavieira.github.io/rdsystem/coverage/index.html).

```sh
npm run test
```

To test a single file, install globa the `jest`:

```sh
npm i -g jest
```

And run the command with the spec file. Example:

```sh
jest --coverage=false libs/components/RdsContainer/RdsContainer.spec.tsx
```

## Build

Build is run with `.github/workflows`.

## Release Semver

### Feature

- In the github, create `feature/[name]` branch from `develop`.

- When finished the code, create merge request from `feature` to `develop`.

- To create a production version, create `release/[version]` branch from `develop`.

- In the local, change to `release/[version]` and run `npm run release`;

- In the github, create merge request from `release/[version]` to `master`.

- Then, create merge request from `master` to `develop`.

### Hotfix

- Create `hotfix/[name]` branch from `tag`.

- When finished the code, run `npm run release`.

- In the github, create merge request from `hotfix/[name]` to `master`.

- Then, create merge request from `master` to `develop`.
