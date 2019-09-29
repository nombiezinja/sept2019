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
// 2 - parse rawInput into test cases
// 3 - implement bfs
// 4 - compare paths by weight 
// 6 - output into .sh

const readline = require('readline');
const fs = require('fs');
const stream = require('stream');

// const inStream = fs.createReadStream('./input-large.in')
const inStream = fs.createReadStream('./input.in')

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


const main = () => {

  rl.on('line', (line) => {
    // First line is the total number of test cases; array will have that number of objects
    lineNumber++;
    parseLineContent(line, lineNumber);
  });

  rl.on('close', () => {
    testCases.forEach((t) => {
      console.log(traverse(t)) // returns a string congruent with expected output format
      // write string to .dat file
    })
  })

  const parseLineContent = (line, lineNumber) => {

    if (lineNumber === 1) {
      return;
    }

    if (lineNumber === 2 || lineNumber === nextTestCase) {
      beginTestCase = lineNumber;
      N = Number(line.split(' ')[0]);
      M = Number(line.split(' ')[1]);
      coordinates = beginTestCase + 1;
      endTestCase = coordinates + N
      nextTestCase = endTestCase + 1;
    }


    if (lineNumber == coordinates) {
      entry = [Number(line.split(' ')[0]), Number(line.split(' ')[1])]
      exit = [Number(line.split(' ')[2]), Number(line.split(' ')[3])]
      return;
    }

    if (coordinates < lineNumber && lineNumber <= endTestCase) {
      [line.split(' ')].forEach((num) => {
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
  }
}

const traverse = (testCase) => {
  //{
  //   "testCase": 5,
  //   "N": 4,
  //   "M": 4,
  //   "entry": [
  //     0,
  //     2
  //   ],
  //   "exit": [
  //     3,
  //     2
  //   ],
  //   "rawInput": [
  // [ [ '-1', '1', '1',   '2' ],
  // [   '1',  '1', '1',   '1' ],
  // [   '2',  '-1','-1',  '1' ],
  // [   '1',  '1', '1',   '1' ] 
  // ] 
  // },
  // start with testCase.rawInput[entry[0]][entry[1]]
  let queue = [];

  // push testCase.rawInput[entry[0] - 1][entry[1]] - up if exists && if > 0 
  // push testCase.rawInput[entry[0]][entry[1] - 1] - left
  // push testCase.rawInput[entry[0]][entry[1] + 1] - right
  // push testCase.rawInput[entry[0] + 1][entry[1]] - down
  // 


}

const formatStr = (result) => {
  //Takes inout and outputs:
  // if path found
  //   Case #1: Mission Impossible.
  // else 
  //   Case #2: 7

}

const getMax = (arr) => {
  return Math.max(...arr);
}

module.exports = (main)

