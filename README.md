# Boilerplate Next Js

Projeto de Web App com TypeScript, ReactJS, NextJS e Styled Components, com todas as configurações iniciais, feito no curso NextJs na prática.
Obs.: Além do que é dito no curso, adicionei dois módulos para Conventional Commits (`commitzen`, `commitlint`), e um para Semantic Versioning (`standard-version`), ambos configurados em conjunto com git hooks.

Anotações e explicações sobre a instalação e configuração:

# Next

Instalação do Next Js
```
yarn create next-app
```
# Typescript

Configuração do typescript no projeto
- Criar arquivo `tsconfig.json`
- Executar:
```
yarn add --dev typescript @types/react @types/node
yarn run dev
```
- o declaration file deve ser criado (next-env.d.ts) Popular auto-completes
- package.json atualizado com as devDependencies
- o arquivo tsconfig.json foi populado com as configurações default
  - `target`: seta a versao do ES que o transpilador deve utilizar
  - `strict`: configura o projeto para ser mais estrito na validação dos tipos - modificar para true
 - Criar pasta src e mover pasta PAGES para dentro de src
  - Renomear o arquivo index.js para index.tsx

## EditorConfig

Carregar configurações de identação e formatação de código padrão.

- Instalar extensão do vscode `EditorConfig`
- Criar arquivo `.editorconfig`
- Adicionar o conteudo abaixo ao arquivo:
```js
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```


## ESLINT

Correção de inconsistências do código.
````
npx eslint --init
````
Opções:
> check syntax and find problems
Javascript
React
Y
Browser
YAML
N

* Instalar dependencias exibidas na tela com o yarn
* O arquivo `.eslintrc.yml` será criado
* Modificar os dados do arquivo por esses:
````yml
env:
  browser: true
  es2021: true
  jest: true
  node: true # evitar avisos pela configuração com commonjs do js
extends:
  - "eslint:recommended"
  - "plugin:react/recommended"
  - "plugin:@typescript-eslint/recommended"
  - "plugin:prettier/recommended"
parser: "@typescript-eslint/parser"
parserOptions:
  ecmaFeatures:
    jsx: true
  ecmaVersion: 12
  sourceType: module
plugins:
  - react
  - react-hooks
  - "@typescript-eslint"
rules:
  no-console: 1
  # Explicitar retorno em todas as funções exportadas, mesmo que o tipo seja implícito. Desabilitado pois o typescript consegue entender o retorno.
  "@typescript-eslint/explicit-module-boundary-types": off

  react-hooks/exhaustive-deps: warn

  # Regra para verificar o uso de hooks corretamente
  react-hooks/rules-of-hooks: error

  # Desabilitada para não ficar avisando sobre os props, pois já estamos usando typescript
  react/prop-types: off

  # Regra que dita que o react para ser utilizado no jsx, precisa ser importado. Desabilitada pois o react já está em escopo global no next
  react/react-in-jsx-scope: off
settings:
  react:
    version: detect
````

## Prettier

Correção de código automática, e validação de erros junto com ESLINT
````
yarn add --dev --exact prettier
````
* Criar arquivo `.prettierrc.yml` na raiz do projeto com o seguinte conteúdo:
````yml
trailingComma: "none" # Remover vírugla no fim do objeto
semi: false # Remover ; ao fim de declaração de variável
singleQuote: true # sempre aspas simples
````
* Instalar dependências do eslint:
````
yarn add --dev eslint-plugin-prettier eslint-config-prettier
````
* Alterar `settings.json` do VsCode, caso não exista, criar a pasta `.vscode` e o arquivo `settings.json` dentro da pasta, com o seguinte conteúdo para deixar de usar o sistema padrão do vscode para formatar o código, e passar a utilizar o prettier com o eslint:
````json
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
````

## Git Hooks

Evitar commits com erro de test ou lint. Com isso, toda vez que for feito um commit, o git hook vai verificar o lint, e não vai deixar passar caso tenha erros.
* Instalar `husky`
````
yarn add husky --dev
yarn husky install
````
* dentro da pasta `.husky`, que será criada com o comando anterior, criar o arquivo `pre-commit`, que conterá todos os comandos a serem rodados antes do commit, e adicionar o seguinte coteúdo:
````bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no-install lint-staged # rodar lint-staged com a instalação do package, sem instalar novamente
````
* Instalar lint-staged e configurar as regras dos comandos que devem ser rodados
````
yarn add lint-staged --dev
````
* Adicionar as chaves `husky` e `lint-staged` ao `package.json` com os seguintes conteúdos:
````json
{
	"husky":{
		"hooks": {
		  "pre-commit": "lint-staged"
		}
	},
	"lint-staged":{
		"src/**/*": [
		  "yarn lint --fix"
		]
	}
}
````

## Testes

Configurar ambiente de testes com Jest, React Testing Library e babel.
````
yarn add --dev jest babel-jest @babel/core @babel/preset-env @babel/preset-typescript @types/jest
````
* Confirmar se na configuração do eslint contém as chaves `jest: true` e `node: true`
* criar arquivo `jest.config.js` na raiz do projeto, com o conteúdo abaixo:
````js
/**
 * testEnvironment: 'jsdom'                                     Informar que o test serpa feito no browser, para o jest simular o DOM
 * testPathIgnorePatterns: ['/node_modules', '/.next']          Ignorar paths
 * collectCoverage: true                                         Teste de cobertura, para saber se está cobrindo tudo
 * collectCoverageFrom: ['src/**\/*.ts(x)']                     Onde será feito o teste de cobertura, no caso na pasta sec, em arquivos .ts ou .tsx
 * setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts</rootDir>']   Arquivo para carregar configurações antes dos tests
 */

module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules', '/.next'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts</rootDir>']
}
````
- Configurar babel para ser possível utilizar recursos novos do JS no Jest, e o babel vai traduzir para o resto do ambiente. Criar arquivo `.babelrc` na raiz, e adicionar os dados abaixo:
````json
{
  "presets": ["next/babel", "@babel/preset-typescript"]
}
````
- Criar pasta `.jest` na raiz, e criar arquivo `setup.ts` dentro dela
- Adicionar comando de `test` e `test watch` ao `package.json`; Adicionar  `"test": "jest"` e `"test:watch": "yarn test --watch"` aos scripts do package.json
- Instalar React Testing Library (melhor que enzime, pois renderiza o componentes real, e o enzime faz shallow rendering(pesquisar o que é isso)) para renderizar os componentes no DOM, e jest-dom para extender o jest com matchers
````json
yarn add --dev @testing-library/react @testing-library/jest-dom
````
- importar jest-dom no arquivo `setup.ts` do jest, criado anteriormente;
` import '@testing-library/jest-dom'`
- criar o primeiro test
- adicionar `yarn test --findRelatedTests --bail` à chave `lint-staged` do `package.json`
- O atributo `--bail` vai avisar ao jest que ele deve parar na primeira falha que ocorrer
- O atributo `--findRelatedTests` informa ao jest para executar os tests apenas das coisas que foram modificadas, ou seja, quando fizer coisas fora, como modificar configurações e outros, ele não vai quebrar.

## Styled Components

- Instalar dependências
````
yarn add --dev @types/styled-components babel-plugin-styled-components
yarn add styled-components
````
- Configurar Babel: abrir arquivo `.babelrc`, e adicionar o trecho abaixo, acima de `presets`
````json
"plugins": [
    [
      "babel-plugin-styled-components", { "ssr": true }
    ]
  ]
````
- Configurar arquivo `_document.tsx` para o styled components funcionar com SSR.
- Crie o arquivo `_document.tsx` dentro da pasta pages, e adicione o conteúdo abaixo:
````tsx

import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang="pt-BR">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

````
- Criar estilos globais; Criar pasta `pages/styles` e arquivo `global.ts` dentro dela, com o seguinte conteúdo:
````ts
import { createGlobalStyle } from 'styled-components'
const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`
export default GlobalStyles

````
- Configurar absolute imports (para não precisar voltando pastas com "../../"), adicionando a prop `baseUrl` com valor `src` ao `compilerOptions` do arquivo `tsconfig.json`
- Importar GlobalStyles no arquivo `_app.tsx`; Caso `_app.tsx` não existe, criar com o seguinte conteúdo:
````tsx
import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <meta
          name="description"
          content="A simple project starter to work with Typescript, React, Next and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
export default App

````
- Instalar `jest-styled-components` para melhorar os snapshots e mostrar o css alterado.
````
yarn add --dev jest-styled-components
````
- Importar `jest-styled-components` no arquivo `./jest/setup.ts`; `import 'jest-styled-components'`

## PWA

Adicionar funcionalidade de PWA usando `next-pwa`

- Instalar lib `next-pwa`

````
yarn add next-pwa
````
- Criar arquivo `next.config.js` na raiz do projeto para configurar o pwa, com o seguinte conteúdo:
````js
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProduction = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disabled: !isProduction
  }
})

````
- Criar arquivo `manifest.json` na pasta `public`, com o seguinte conteúdo:
````json
{
  "name": "NextJS Na prática - Boilerplate",
  "short_name": "NextJS Na prática",
  "icons": [
    {
      "src": "/img/icon-192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "/img/icon-512.png",
      "type": "image/png",
      "sizes": "512x512"
    },
    {
      "src": "/img/maskable_icon_x192.png",
      "type": "image/png",
      "sizes": "192x192",
      "purpose": "any maskable"
    },
    {
      "src": "/img/maskable_icon_x512.png",
      "type": "image/png",
      "sizes": "512x512",
      "purpose": "any maskable"
    }
  ],
  "background_color": "#06092B",
  "description": "Boilerplate utilizando Typescript, React, NextJS, e Styled Components",
  "display": "fullscreen",
  "start_url": "/",
  "theme_color": "#06092B"
}


````
- Importar `manifest.json` no head do arquivo `_app.tsx`;
````html
<link rel="manifest" href="/manifest.json" />
<meta name="theme-color" content="#06092B" />
````
# Adição pessoal

## Conventional Commits

- Adiciona a lib `Commitizen` para padronizar as mensagens dos commits de acordo com os Conventional Commits
````
yarn add --dev commitizen

````
- Adicionar conteúdo abaixo ao package.json
````json
"config": {
  "commitizen": {
    "path": "./node_modules/cz-conventional-changelog"
  }
}
````
- Criar o arquivo `.husky/prepare-commit-msg` com o conteúdo:
````sh
#!/bin/bash
exec < /dev/tty && node_modules/.bin/cz --hook || true
````
- Ajustar permissões dos arquivos (Caso no linux ou MAC):
````sh
chmod ug+x .husky/*
chmod ug+x .git/hooks/*
````
- Adicionar lib `commitlint`
````
yarn add --dev @commitlint/config-conventional @commitlint/cli
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
````
