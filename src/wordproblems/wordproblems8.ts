import { tempWords } from "../../scripts/tempWordList";

// What are all of the words with no vowel and not even a Y?

function wordsWithNoVowelsOrY(arr: string[]): string[] {
  return arr.filter((word) => {
    let vowels: string = "aeuioy";
    let toUpperCaseVowels = vowels.toUpperCase();
    let splitWord: string[] = word.toUpperCase().split("");
    for (let char of splitWord) {
      if (toUpperCaseVowels.includes(char)) {
        console.log("this should be a vowel:", char);
        splitWord.pop();
        break;
      }
    }
    return splitWord.length === word.length;
  });
}

console.log(wordsWithNoVowelsOrY(tempWords));
