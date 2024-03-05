"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tempWordList_1 = require("../scripts/tempWordList");
// What are all of the words containing a Q but not a U?
function wordsWithQnotU(arr) {
    return arr.filter(function (word) { return word.includes("q") && !word.includes("u"); });
}
console.log(wordsWithQnotU(tempWordList_1.tempWords));
