/*store a person name in a variable,and then print that person's name in lowercase,uppercase,and titlecase.*/

const personName: string = "nabilaSharif";

// lowercase
console.log(personName.toLowerCase());

//uppercase
console.log(personName.toUpperCase());

//titlecase

let firstLetter: string = personName.charAt(0).toUpperCase();
let restLetter: string = personName.slice(1).toLowerCase();

let titleCase = firstLetter + restLetter;

console.log(titleCase);