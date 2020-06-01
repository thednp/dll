'use strict'
import buble from '@rollup/plugin-buble'
import node from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import {terser} from 'rollup-plugin-terser'
import cleanup from 'rollup-plugin-cleanup'
import * as pkg from "./package.json";

// set headers
const year = (new Date).getFullYear()
const banner = `/*!
  * DLL.js v${pkg.version} (${pkg.homepage})
  * Copyright ${year} © ${pkg.author}
  * Licensed under MIT (https://github.com/thednp/dll.js/blob/master/LICENSE)
  */`
const miniBanner = `// DLL.js v${pkg.version} | ${year} © ${pkg.author} | ${pkg.license}-License`

// set config
const MIN = process.env.MIN === 'true' // true/false|unset
const FORMAT = process.env.FORMAT // umd|iife|esm|cjs

const INPUTFILE = process.env.INPUTFILE ? process.env.INPUTFILE : 'src/index.js'
const OUTPUTFILE = process.env.OUTPUTFILE ? process.env.OUTPUTFILE : (FORMAT === 'umd' ? './dist/dll'+(MIN?'.min':'')+'.js' : './dist/dll.esm'+(MIN?'.min':'')+'.js')

const OUTPUT = {
  file: OUTPUTFILE,
  format: FORMAT, // or iife
}

const PLUGINS = [
  node({mainFields: ['module']}),
  json(),
  buble(),
  cleanup()
]

if (MIN){
  PLUGINS.push(terser({output: {preamble: miniBanner}}));
} else {
  OUTPUT.banner = banner;
  // PLUGINS.push(cleanup());
}

if (FORMAT!=='esm') {
  OUTPUT.name = 'dll';
}

export default [
  {
    input: INPUTFILE,
    output: OUTPUT,
    plugins: PLUGINS
  }
]