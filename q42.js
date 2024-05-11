function show_magicians(magicianNames2) {
    magicianNames2.map(function (names) { return console.log((names)); });
}
function make_great(magicianNames2) {
    return magicianNames2.map((function (names) { return "".concat(names, " is a great magician!"); }));
}
var magicianNames2 = ["David Blaine", "Derren Brown", "Juan Tamariz"];
var copyMagicianNames = magicianNames2.slice();
var makeGreatCopy = make_great(copyMagicianNames);
show_magicians(magicianNames2);
show_magicians(makeGreatCopy);
