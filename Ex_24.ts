//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings

//• Tests using the lower case function

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

//• Tests using "and" and "or" operators

//• Test whether an item is in a array

//• Test whether an item is not in a array


//equality and inequality
let myName = "Sara";
console.log(myName == "Sara");  //true equal to
console.log(myName !== "sara"); //true not equal to

//numerics
let myNumber = 10;
console.log(myNumber == 10); //true
console.log(myNumber !== 10); //true
console.log(myNumber > 5); //true greater than
console.log(myNumber < 5); //false less than
console.log(myNumber <= 5); //false less than equal to
console.log(myNumber >= 5); //true greater or equal to


 // and & ===== or  |

 let num1 = 10;
 let num2 =5;

 console.log(num1 > 9 && num2 < 5);  //false
        //true stat     false state
        
console.log(num1 > 9 || num2 < 5); //false
      //true stat        false stat

      let myArray = [2 ,3,"sara"];
      let myString = "sidra";

      console.log(Array.isArray(myArray));  //true
      console.log(Array.isArray(myString));  //false
