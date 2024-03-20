//word problem one
//What are all of the words containing UU?

const parser2 = require("../../scripts/cvsParser");
const words2 = parser2.takesPath("../../csv/sowpods.txt");

function returnsWordsWithUUIncluded(arr: string[]): string[] {
  return arr.filter((word) => word.includes("UU"));
}

console.log(returnsWordsWithUUIncluded(words2));
