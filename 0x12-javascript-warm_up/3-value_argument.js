#!/usr/bin/node
let arg = 'No argument';
for (const val of process.argv.slice(2)) {
  arg = val;
  break;
}
console.log(arg);
