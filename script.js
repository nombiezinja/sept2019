// Steps
// 1 - Be able to parse line by line and create this object:
// {
      // testcase: <integer>,
      // N: <integer>,
      // M: <integer>,
      // entry: [integer, integer].       
      // exit: [integer], integer],
      // rawInput: []
// }
// 2 - parse rawInput into adjacency list
// 3 - implement Dijkstra 
// 4 - alter Dijkstra and let it keep running until find all shortest paths
// 5 - compare paths by weight 
// 6 - output into .sh

const readline = require('readline');
const fs = require('fs');
const stream = require('stream');

const inStream = fs.createReadStream('./input.in')
const outStream = new stream();
const rl = readline.createInterface(inStream, outStream);

let lineNumber = 0;
let beginTestCase;
let endtestCase; 
let nextTestCase;
rl.on('line', function(line) {
  // First line is the total number of test cases; array will have that number of objects
  lineNumber++;
  if (lineNumber === 1) {
    console.log(`There are a total of ${line} test cases`);
    return;
  }

  if (lineNumber === 2) {
    beginTestCase = lineNumber;
  }

  console.log(line.split(' '));
  endTestCase = Number(line.split(' ')[0]) + 1
  nextTestCase = endTestCase + 1;
  console.log(`TestCase begins at ${beginTestCase}, ends at${endTestCase}`);
});