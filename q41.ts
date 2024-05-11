function show_magicians1(magicianNames: string[]){
    magicianNames.map((names)=>console.log((names)));
}
function make_great1(magicianNames : string[]){
    return magicianNames.map((names=>`${names} is a great magician!`));
}
let magicianNames: string[] = ["David Blaine","Derren Brown","Juan Tamariz"];
make_great1(magicianNames);
let great_magicians = make_great1(magicianNames);
show_magicians1(great_magicians);