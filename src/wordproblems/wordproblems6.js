"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tempWordList_1 = require("../../scripts/tempWordList");
// What are all of the words that have a B and an X and are less than 5 letters long?
function wordsWithBAndXLessThanFiveLettersLong(arr) {
  return arr.filter(function (word) {
    return word.length < 5 && word.includes("x") && word.includes("b");
  });
}
console.log(wordsWithBAndXLessThanFiveLettersLong(tempWordList_1.tempWords));
