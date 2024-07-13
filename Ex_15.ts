//changing Guest list:
//you just heard that one of your guests can't make the dinner, so you need to send out a new set of invitations. you'll have to think of someone alse to invite.
//.start with your program from Exercise 14.add a print statement at the end of your program stating the name of the guest who can't make it
//.modify your List,replacing the name of the guest who can't make it with the name of the new person you are inviting.
//.print a second set of invitation messages, one for each person who still in your List.


const myFriends: string[] = ["asli","gulshan","ferhat","abida","sara"];

console.log(`due to some personal reason miss.${myFriends[2]} will not come`);
myFriends[2] = "eman";

console.log(`new list of my friends who are coming to my dinner\n`);
for(let i = 0; i < myFriends.length; i++){
    console.log(`${i}. ${myFriends[i]}`);
}