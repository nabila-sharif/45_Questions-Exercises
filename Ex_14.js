//if you could invite Anyone,living or deceased,to dinner,who would you invite?make a list that includes at least three people you'd like to invite to dinner.then use your list to print a message to each person,inviting them to dinner.
var myFriends = ["asli", "gulshan", "ferhat", "abida", "sara"];
//1st method with loopl
//for(let i = 0; i < myFriends.length; i++){
//  console.log(`miss.${myFriends[i]}!  you are invited to my dinner on monday\n`);
//
//2nd method using map()
myFriends.map(function (ib) {
    console.log("miss . ".concat(ib, "! you are invited to my dinner on monday\n"));
});
