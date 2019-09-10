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

const inStream = fs.createReadStream('./input-large.in')
const outStream = new stream();
const rl = readline.createInterface(inStream, outStream);

let lineNumber = 0;
let testCaseNum = 1;
let entry; 
let exit;
let beginTestCase;
let endtestCase; 
let nextTestCase;
let coordinates;
let testCases = [];
let rawTestCase = [];

rl.on('line', function(line) {
  // First line is the total number of test cases; array will have that number of objects
  lineNumber++;
  if (lineNumber === 1) {
    return;
  }

  if (lineNumber === 2 || lineNumber === nextTestCase) {
    beginTestCase = lineNumber;
    N = Number(line.split(' ')[0]);
    M = Number(line.split(' ')[1]);
    coordinates = beginTestCase + 1;
    endTestCase = coordinates + N
    nextTestCase =  endTestCase + 1;
  }


  if (lineNumber == coordinates) {
    console.log(`Coordinates for test case is ${line}`);
    entry = [Number(line.split(' ')[0]), Number(line.split(' ')[1])]  
    exit = [Number(line.split(' ')[2]), Number(line.split(' ')[3])]  
    return;
  }

  if (coordinates < lineNumber && lineNumber <= endTestCase) {
    [...line.split(' ')].forEach((num)=>{
      rawTestCase.push(num);
    })
  }

  if (lineNumber == endTestCase) {

    let testCase = {
      testCase: testCaseNum, 
      N: N, 
      M: M, 
      entry: entry, 
      exit: exit, 
      rawInput: rawTestCase
    }
    
    rawTestCase = [];
    testCases.push(testCase); 
    testCaseNum++;
  }
  console.log("testCases are", testCases);

});

const parseLineContent = () => {

}