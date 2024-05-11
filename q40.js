//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians0(magicianNames) {
    magicianNames.map(function (magicians) { return console.log(magicians); });
}
var magicians = ["Harry Houdini", "Shin Lim", "Dynamo"];
show_magicians0(magicians);
