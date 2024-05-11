//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians0(magicianNames : string[]){
    magicianNames.map((magicians)=>console.log(magicians));
}
let magicians : string[] = ["Harry Houdini" , "Shin Lim" , "Dynamo"];
show_magicians0(magicians);
