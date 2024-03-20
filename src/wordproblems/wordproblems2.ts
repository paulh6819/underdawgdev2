const parser3 = require("../../scripts/cvsParser");
const words3 = parser3.takesPath("../../csv/sowpods.txt");

// Words with X, Y, and Z: []
function returnsWordsWithXYZIncluded(arr: string[]): string[] {
  return arr.filter(
    (word) => word.includes("X") && word.includes("Y") && word.includes("Z")
  );
}
console.log(returnsWordsWithXYZIncluded(words3));
