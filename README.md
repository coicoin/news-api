# News API

## Tap picture to preview on github pages. TODO: add GitHub Actions

**[<img src="./images/news-api.jpg" alt="News API" width="70%"></img>](https://coicoin.github.io/news-api/src/index.html)**

## Run application:  
- Copy and rename `.env.example` to `.env` and set variables with your data  
- Install dependencies by running command `npm install` in your terminal
- Run command in your terminal `npm start`  

## Task

**[News API](https://newsapi.org/)** is a simple HTTP REST API for searching and retrieving news from across the Internet.

## Source

[Original app](https://github.com/rolling-scopes-school/news-JS/)

### Proxy

- News API no longer allows calling the API from other sources except localhost.
- Proxy News API server for use in the deployed version:
  - <https://rss-news-api.onrender.com/> - has additional mocks endpoints - `/mocks/sources` and `/mocks/everything` - that return static data to help prevent exhausting API key requests limit during the developing process.

## Task Requirements Done

- Created own copy of the application.

- Added [TypeScript](https://www.typescriptlang.org/) to the project. \
`npm install typescript --save-dev`\
`npx tsc --init`

- Set up [ESLint](https://eslint.org/) to work with TypeScript.\
`npm i typescript-eslint -D`\
`npm i @typescript-eslint/parser -D`\
`npm i @typescript-eslint/eslint-plugin`

added for eslint issues:
```json
 // .vscode/settings.json
{
  "eslint.workingDirectories": ["./"] // Or a more specific path if needed
}
```

- Configured [Webpack](https://webpack.js.org/) to work with TypeScript.\
`npm i ts-loader -D`

- Migrated the application from JavaScript to TypeScript, using:
  - Enums
  - Interfaces
  - Types
  - Generics - not used
  - Union Types
  - Access modifiers (`private`, `public`)
  - Utility Types (`Partial`, `Pick`, `Readonly`)
- Make the layout adaptive with a design at your discretion.

- Removed the usage of `any` type.

**[See full description on rs-school](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/migration-newip-to-ts.md)**