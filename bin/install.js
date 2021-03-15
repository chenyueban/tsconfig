#!/usr/bin/env node
/* eslint-disable no-console */

const fs = require('fs')
const path = require('path')

const pkgUp = require('pkg-up')

const TSCONFIG_JSON_CONTENT = `{
  "extends": "@chenyueban/tsconfig",
  "compilerOptions": {
    "outDir": "dist",
  },
  "exclude": [
    "node_modules/",
    "dist/"
  ],
  "include": [
    "src/**/*.ts"
  ],
}
`

async function main() {
  const cwd = path.join(__dirname, '..', '..')
  const pkg = await pkgUp({ cwd })
  if (!pkg) {
    return 0
  }
  const pkgDir = path.dirname(pkg)

  const tsconfigFile = path.join(pkgDir, 'tsconfig.json')

  if (!fs.existsSync(tsconfigFile)) {
    console.info(`@chenyueban/tsconfig: auto generated ${tsconfigFile}`)
    fs.writeFileSync(tsconfigFile, TSCONFIG_JSON_CONTENT)
  }
  return 0
}

main()
  .then(process.exit)
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
