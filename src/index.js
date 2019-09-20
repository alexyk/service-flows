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
const args = process.argv.slice(2);
// init fetch and flows
global.fetch = require('node-fetch');     // TODO: Remove 'global' usage
let flows = require('./flows').default;

// flows
const flowName = args[0];
const flowArgs = args[1];
const current = flows[flowName];




// start logging
log(`Starting '${exec} ${jsScript}'`)



// start flow from command line
try {
  current(...flowArgs);
  logGreen(`  > Running ${flowName} SUCCESS`);
} catch (error) {
  logError(this, {error, flows}, `  > Running ${flowName} failed`)
}