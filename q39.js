function make_album(artistName, albumTitle) {
    console.log("\"".concat(artistName, "\" , \"").concat(albumTitle, "\""));
}
console.log("List Of My Music Album");
make_album("Miles Davis", "Kind Of Blue");
make_album("Marvin Gaye", "What's Going On?");
make_album("Michael Jackson", "Off The Wall");
function make_album2(artistName, albumTitle, trackNumber) {
    console.log("\"".concat(artistName, "\" , \"").concat(albumTitle, "\" ,\"").concat(trackNumber, "\""));
}
console.log("\nList Of My Music Album with its TrackNumber");
make_album2("The Beatless", "Rubber Soul", 4);
make_album2("Nirvana", "Never Mind", 30);
make_album2("Paul Simmon", "Grace Land", 25);
