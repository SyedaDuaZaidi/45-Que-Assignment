let guests4 : string[] = ["Bisma","Kinza","Kainat"];
     
let notJoining2 : string = "Kainat";

let newGuest4: string = "Zehra"
guests4[guests4.indexOf(notJoining2)]=newGuest4

console.log("Welcome all! To informing that we found a bigger dinner table.");   
guests4.unshift("Bushra");

let middleGuest1 : string = "Hoorain"
let middleindex1 = guests4.length/2
guests4.splice(middleindex1,0,middleGuest1)

guests4.push("Ayat");

let invitationMessage : string = "You are invited at our home for dinner.";
guests4.map((item)=>console.log(item, "You are invited at our home for dinner."));