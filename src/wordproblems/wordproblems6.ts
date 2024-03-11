import { tempWords } from "../../scripts/tempWordList";

// What are all of the words that have a B and an X and are less than 5 letters long?

function wordsWithBAndXLessThanFiveLettersLong(arr: string[]): string[] {
  return arr.filter(
    (word) => word.length < 5 && word.includes("x") && word.includes("b")
  );
}

console.log(wordsWithBAndXLessThanFiveLettersLong(tempWords));
