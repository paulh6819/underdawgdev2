import { tempWords } from "../../scripts/tempWordList";

// Words with X, Y, and Z: []
function returnsWordsWithXYZIncluded(arr: string[]): string[] {
  return arr.filter(
    (word) => word.includes("x") && word.includes("y") && word.includes("z")
  );
}
console.log(tempWords);
console.log(returnsWordsWithXYZIncluded(tempWords));
