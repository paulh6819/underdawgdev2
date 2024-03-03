import { tempWords } from "../scripts/tempWordList";

// What are all of the words that contain the word CAT and are exactly 5 letters long?

function wordsThatContainCatAndAreExactly5LettersLong(arr: string[]): string[] {
  return arr.filter((word) => word.includes("cat") && word.length === 5);
}

console.log(wordsThatContainCatAndAreExactly5LettersLong(tempWords));
