import minimist from 'minimist';
import { coinFlips, countFlips } from './modules/coin.mjs';
var args = minimist(process.argv.slice(2))
args["number"]
const number = args.number || 1 
const result_array = coinFlips(number);
const count = countFlips(result_array);
console.log(result_array);
console.log(count);