
// Use a do...while loop to console.log the numbers from 1 to 1000

let number = 0;
do {
  number += 1;
  console.log(number);
} while (number < 1001 -1);

// Create an object (an array with keys and values) called person with the following data:

let person = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female",
};

for (let value of Object.values(person)) {
  console.log(person);
  break;
}

// Use a for...in loop and if statement to console.log the value associated with the key birthDate if the birth year is an odd number.

for (let birthDate in person) {
  let lastNumber = birthDate[birthDate.length -1];
  if (lastNumber % 2 != 0) {
    console.log(person.birthDate + " is an odd year.");
    break;
  }
}

// Create an arrayOfPersons that contains mulitiple objects.

let arrayOfPersons = [
  { 
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female", 
  },
  {
    firstName: "Vincent",
    lastName: "Smith",
    birthDate: "Aug 18, 1900",
    gender: "male", 
  },
  {
    firstName: "Bob",
    lastName: "Johnson",
    birthDate: "Dec 5, 1983",
    gender: "male",
  }
];

for (let value of Object.values(arrayOfPersons)) {
  console.log(arrayOfPersons);
  break;
};

// Use .map() to map over the arrayOfPersons and console.log() their information.

let info = arrayOfPersons.map(function(presentValue) {
  let information = [presentValue.firstName, presentValue.lastName, presentValue.birthDate, presentValue.gender];
  console.log(information);
})

// Use .filter() to filter the persons array and console.log only males in the array

let males = arrayOfPersons.filter(function(presentValue) {
  let onlyMales = presentValue.gender;
  if (onlyMales == 'male') {
    console.log([presentValue.firstName, presentValue.lastName, presentValue.birthDate, presentValue.gender]);
  }
});

// Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.

let bornBefore = arrayOfPersons.filter(function(presentValue) {
  let bornDate = presentValue.birthDate.substring(1, 1);
  if (bornDate <= 1990) {
    console.log([presentValue.firstName, presentValue.lastName, presentValue.birthDate, presentValue.gender]);
  }
});