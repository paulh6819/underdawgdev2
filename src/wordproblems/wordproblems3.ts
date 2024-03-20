const parser4 = require("../../scripts/cvsParser");
const words4 = parser4.takesPath("../../csv/sowpods.txt");

function wordsWithQnotU(arr: string[]): string[] {
  return arr.filter((word) => word.includes("Q") && !word.includes("U"));
}

console.log(wordsWithQnotU(words4));
