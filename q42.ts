function show_magicians(magicianNames2: string[]){
    magicianNames2.map((names)=>console.log((names)));
}
function make_great(magicianNames2 : string[]){
    return magicianNames2.map((names=>`${names} is a great magician!`));
}
let magicianNames2 : string[] = ["David Blaine","Derren Brown","Juan Tamariz"];
let copyMagicianNames = magicianNames2.slice()
let makeGreatCopy = make_great(copyMagicianNames);
show_magicians(magicianNames2);
show_magicians(makeGreatCopy);