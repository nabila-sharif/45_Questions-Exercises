//More Guest
//you just found a bigger dinner table ,so now more space is available think of three more guest to invite to dinner.
//.start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table .
//Add one new guest to the begginning of your Array. 
//use append() to add one new guest to the end of your list .
//print  a new set of invitation messages. one for each person in your list .
var myFriends = ["asli", "gulshan", "ferhat", "abida", "sara"];
console.log(myFriends);
console.log("we have 3 more friends to invite on dinner");
//adding three more friends
//add at beggining
myFriends.unshift("saba");
//["saba", "asli","gulshan","ferhat","abida","sara"];
console.log(myFriends);
//add at middle
myFriends.splice(2, 0, "Ali");
console.log(myFriends);
//add a last
myFriends.push("sameer");
console.log(myFriends);
//print all friends along with message
for (var i = 0; i < myFriends.length; i++) {
    console.log("hello friend. ".concat(myFriends[i], " you are invited to my dinner"));
}
