function show_magicians1(magicianNames) {
    magicianNames.map(function (names) { return console.log((names)); });
}
function make_great1(magicianNames) {
    return magicianNames.map((function (names) { return "".concat(names, " is a great magician!"); }));
}
var magicianNames = ["David Blaine", "Derren Brown", "Juan Tamariz"];
make_great1(magicianNames);
var great_magicians = make_great1(magicianNames);
show_magicians1(great_magicians);
