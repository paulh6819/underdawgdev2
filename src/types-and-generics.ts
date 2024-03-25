// a function that takes a User (make interface)
// User has firstName, lastName, birthday (string), role
// returns a String greeting them on their birthday
// "Happy birthday, <firstName> <lastName>!"

type User = {
  firstName: string;
  lastName?: string;
  birthday: string;
};

const alexFromNC: User = {
  firstName: "Alex",
  lastName: "Koch",
  birthday: "1989-02-19",
};

function takesUser(user: User): string {
  const today = new Date();
  const birthday = new Date(user.birthday);

  birthday.setFullYear(today.getFullYear());
  if (birthday < today) {
    birthday.setFullYear(today.getFullYear() + 1);
  }

  const oneDay = 24 * 60 * 60 * 1000;
  const diffDays = Math.round((birthday.getTime() - today.getTime()) / oneDay);

  if (diffDays === 0) {
    return `Happy birthday, ${user.firstName} ${user.lastName}!`;
  } else {
    return `Hello, ${user.firstName} ${user.lastName}. Your birthday is in ${diffDays} days!`;
  }
}

console.log(takesUser(alexFromNC));
