import { tempWords } from "../../scripts/tempWordList";
// What are all of the words containing a Q but not a U?

function wordsWithQnotU(arr: string[]): string[] {
  return arr.filter((word) => word.includes("q") && !word.includes("u"));
}

console.log(wordsWithQnotU(tempWords));
