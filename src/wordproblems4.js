"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tempWordList_1 = require("../scripts/tempWordList");
// What are all of the words that contain the word CAT and are exactly 5 letters long?
function wordsThatContainCatAndAreExactly5LettersLong(arr) {
    return arr.filter(function (word) { return word.includes("cat") && word.length === 5; });
}
console.log(wordsThatContainCatAndAreExactly5LettersLong(tempWordList_1.tempWords));
