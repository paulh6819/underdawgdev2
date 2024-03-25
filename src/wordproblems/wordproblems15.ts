// What are all of the letters that never appear consecutively in an English word? For example, we know that “U” isn’t an a
// nswer, because of the word VACUUM, and we know that “A” isn’t an answer, because of “AARDVARK”, but which l
// etters never appear consecutively?

const parser15 = require("../../scripts/cvsParser");
const words15 = parser5.takesPath("../../csv/sowpods.txt");

function noTwoLettersInARow(arr: string[]): string[] {
  const letterObj = { A: 0, B: 0 };
}
