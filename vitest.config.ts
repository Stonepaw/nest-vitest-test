import {defineConfig} from 'vite'
import * as path from "path";

const config = require('./tsconfig.base.json')

const paths = config.compilerOptions.paths;

const aliases = {}

for(const key in paths) {
  aliases[key] = path.join(__dirname, paths[key][0])
}

export default defineConfig({
  resolve: {
    alias: aliases,
  },
  test: {
    globals: true,
    environment: 'node',
  },
})
