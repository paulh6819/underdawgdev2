import { tempWords } from "../../scripts/tempWordList";

// What are all of the words that both start and end with a Y?

function startsWithEndsWithY(arr: string[]): string[] {
  let result: string[] = [];

  for (let word of arr) {
    if (word[0] === "y" && word[word.length - 1] === "y") {
      result.push(word);
    }
  }
  return result;
}

console.log(startsWithEndsWithY(tempWords));
