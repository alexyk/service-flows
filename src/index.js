import 'dotenv/config';
import { logError, logGreen } from 'js-tools';


console.clear();
"use strict";

// init tools
  // console shorthand
global.log = console.log;
// process.argv.forEach(item => log(item))

  // command line args
const exec = process.argv[0];
const jsScript = process.argv[1];

  // script args
let args = process.argv.slice(1);
if (args[0].includes("src/index.js")) {
  args = args.slice(1);
}

// init fetch and flows
global.fetch = require('node-fetch');     // TODO: Remove 'global' usage
let flows = require('./flows').default;

// flows
const flowName = args[0];
const flowArgs = args.slice(1);
const current = flows[flowName];




// start logging
// log(`Starting command:'${exec} script:${jsScript}'`)
log(`Starting flow: ${flowName}`)

// start flow from command line
try {
  current(...flowArgs).exec();
  logGreen(`  > Running ${flowName} SUCCESS`);
} catch (error) {
  logError(this, {error, flows}, `  > Running ${flowName} failed: ${error.toString()}`)
}