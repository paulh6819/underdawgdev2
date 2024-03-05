import { tempWords } from "../scripts/tempWordList";

// What are all of the words that have no E or A and are at least 15 letters long?

function hasNoEOrAAndIsAtLeast15LettersLong(arr: string[]): string[] {
  return arr.filter(
    (word) => word.length > 14 && !word.includes("a") && !word.includes("e")
  );
}

console.log(hasNoEOrAAndIsAtLeast15LettersLong(tempWords));
