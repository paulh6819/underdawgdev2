const parser5 = require("../../scripts/cvsParser");
const words5 = parser5.takesPath("../../csv/sowpods.txt");
// What are all of the words that contain the word CAT and are exactly 5 letters long?

function wordsThatContainCatAndAreExactly5LettersLong(arr: string[]): string[] {
  return arr.filter((word) => word.includes("CAT") && word.length === 5);
}

console.log(wordsThatContainCatAndAreExactly5LettersLong(words5));
