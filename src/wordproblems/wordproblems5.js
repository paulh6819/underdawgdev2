"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tempWordList_1 = require("../../scripts/tempWordList");
// What are all of the words that have no E or A and are at least 15 letters long?
function hasNoEOrAAndIsAtLeast15LettersLong(arr) {
  return arr.filter(function (word) {
    return word.length > 14 && !word.includes("a") && !word.includes("e");
  });
}
console.log(hasNoEOrAAndIsAtLeast15LettersLong(tempWordList_1.tempWords));
