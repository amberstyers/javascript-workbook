'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
  let popped = stacks [startStack].pop;
  stacks[endStack].push(popped);
}

function isLegal(startStack, endStack) {
  let lastItemStartStack  = stacks[startStack][stacks[startStack].length-1];
  let lastItemEndStack = stacks[endStack][stacks[endStack].length-1];
  console.log('lastItemStartStack', lastItemStartStack);
  console.log('lastItemEndStack', lastItemEndStack);
  if(lastItemStartStack > lastItemEndStack) {
    console.log('This is an illegal move')
    return false;
  } else {
    console.log('Legal move');
    return true;  
  }
}

function checkForWin() {
  if((stacks['b'].length === 4) || (stacks['c'].length === 4)) {
    return true
  } else {
    return false;
  }
}




function towersOfHanoi(startStack, endStack) {
  if(isLegal(startStack, endStack)) {
    movePiece(startStack, endStack);
    checkForWin();
  }

}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });
// added test for move piece, some errors, though
  describe('#movePiece()', () => {
    it('shold move piece', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
