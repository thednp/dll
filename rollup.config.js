'use strict'
import buble from '@rollup/plugin-buble'
import node from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import {terser} from 'rollup-plugin-terser'
import * as pkg from "./package.json";

// set headers
const year = (new Date).getFullYear()
const banner = `/*!
  * DLL.js v${pkg.version} (${pkg.homepage})
  * Copyright 2015-${year} © ${pkg.author}
  * Licensed under MIT (https://github.com/thednp/dll.js/blob/master/LICENSE)
  */`
const miniBanner = `// DLL.js v${pkg.version} | ${year} © ${pkg.author} | ${pkg.license}-License`

// set config
const MIN = process.env.MIN === 'true' // true/false|unset
const FORMAT = process.env.FORMAT // umd|iife|esm|cjs
const ES = process.env.ES // es5|es6

const INPUTFILE = process.env.INPUTFILE ? process.env.INPUTFILE : 'src/index.js'
const OUTPUTFILE = process.env.OUTPUTFILE ? process.env.OUTPUTFILE : (FORMAT === 'umd'
  ? './dist/dll'+(ES?`.${ES}`:'')+(MIN?'.min':'')+'.js'
  : './dist/dll.esm'+(MIN?'.min':'')+'.js')

const OUTPUT = {
  file: OUTPUTFILE,
  format: FORMAT, // or iife
}

const PLUGINS = [
  node({mainFields: ['module']}),
  json()
]

if (MIN){
  PLUGINS.push(terser({output: {preamble: miniBanner}}));
} else {
  OUTPUT.banner = banner;
}

if (ES==='es5') {
  PLUGINS.push(buble());
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