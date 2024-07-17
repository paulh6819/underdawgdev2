interface person {
  id: number;
  age: number;
  name: string;
}

// Create a function that compares to Person objects. This will have 2 parameters, both being Person objects to compare. and return a boolean.
// Person objects should be considered equal if they share the same id.

const paul: person = {
  id: 123,
  age: 69,
  name: "Paul Henderson",
};

const greg: person = {
  id: 1234,
  age: 100,
  name: "Greg the Great",
};

const anotherPerson: person = {
  id: 123,
  age: 26,
  name: "Another Person",
};
const yetAnotherPerson: person = {
  id: 3,
  age: 26,
  name: "DJ khalid",
};

const solo: person = {
  id: 7,
  age: 5,
  name: "Loser",
};

const peopleObjArray = [paul, greg, anotherPerson, yetAnotherPerson];

//make a function that declares whether or not two people are the same

function personCompare(obj: person, obj2: person): boolean {
  return obj.id === obj2.id;
}

console.log(personCompare(paul, greg));
console.log(personCompare(paul, paul));
console.log(personCompare(greg, paul));
console.log(personCompare(paul, anotherPerson));

// Create a function that accepts two parameters. An array of Persons as a haystack to look thru. And a single Person object as the needle.$
// This is equivalent to the function previously made that accepts an array of numbers as a haystack, and a single number as the needle.
// If the needle is found, return the index it was found in the haystack. if it was not found return -1

function lookingForPerson(objArray: person[], personObj: person): number {
  for (let i = 0; i < objArray.length; i++) {
    if (objArray[i].id === personObj.id) {
      return i;
    }
  }

  return -1;
}

console.log(lookingForPerson(peopleObjArray, paul));
console.log(lookingForPerson(peopleObjArray, greg));
console.log(lookingForPerson(peopleObjArray, solo));
