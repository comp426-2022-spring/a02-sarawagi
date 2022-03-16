import { flipACoin } from "./modules/coin.mjs";
import minimist from 'minimist';
var args = minimist(process.argv.slice(2))
args["call"];
const call = args.call;
if(call != 'heads' || call != "tails"){
    console.log("Error: no input.");
    console.log("Usage: node guess-flip --call=[head|tails]");
    process.exit(1)
}
const result = flipACoin(call);
console.log(result);