//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
var magicianNames = ["Ayaz", "Ali", "Tariq", "Salaman"];
function show_magicians() {
    for (var _i = 0, magicianNames_1 = magicianNames; _i < magicianNames_1.length; _i++) {
        var magicianName = magicianNames_1[_i];
        console.log(magicianName);
    }
}
;
show_magicians(); //calling of function
show_magicians(); //2nd time calling of function
