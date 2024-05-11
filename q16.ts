let guests1 : string[] = ["Bisma","Kinza","Kainat"];
     
let notJoining : string = "Kainat";

let newGuest1 : string = "Zehra"
guests1[guests1.indexOf(notJoining)]=newGuest1

guests1.unshift("Bushra");

let middleGuest : string = "Hoorain"
let middleindex = guests1.length/2
guests1.splice(middleindex,0,middleGuest)

guests1.push("Ayat");
console.log(guests1
    );
console.log("We can invite only two people for dinner!"
);
while(guests1.length>2){
let removeguest = guests1.pop();
console.log(`Sorry, ${removeguest} we cannot invite u for a dinner!`)
}
guests1.map((item)=>console.log (`${item} You are still invited for dinner!`)
)
guests1.pop();
guests1.pop();
console.log(guests1
);


