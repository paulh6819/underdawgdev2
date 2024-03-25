
const string = "this is my practice string hello worldw"

function lengthOfLastWord(s: string): number | undefined{
    
    //split the string into an array, split on spaces, get the length of last index, use at function becuase its new

    const splitString: string[] = s.split(" ")
    console.log(splitString)
   
    return splitString.at(-1)?.length





};

console.log(lengthOfLastWord(string))