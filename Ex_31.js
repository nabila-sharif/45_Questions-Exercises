//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.
var userNames2 = ["Ali", "Abdrahim", "Asad", "Abdulahad", "Abdulbarri"];
//to remove all members
//userNames2 = [];
//console.log(userNames2);
if (userNames2.length > 0) {
    for (var i = 0; i < userNames2.length; i++) {
        if (userNames2[i] == "Admin") {
            console.log("\n  Hello ".concat(userNames2[i], " would you like to see a status report?\n"));
        }
        else {
            console.log("Hello ".concat(userNames2[i], " \" thank you for logging in again!"));
        }
    }
}
else {
    console.log("We need to find some users!");
}
