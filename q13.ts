let guests0: string[] = ["Ali", "Hania","Ayat","Abbas"];
let invitationMessage1 : string = "Salam, I would like u to invite for dinner tommorrow.";
console.log(guests0[0] + " " + invitationMessage1
);
console.log(guests0[1] + " " + invitationMessage1
);
console.log(guests0[2] + " " + invitationMessage1
);
console.log(guests0[3] + " " + invitationMessage1
);

//By Array Method:

let guests2 : string[] = ["Ali", "Hania","Ayat","Abbas"];
guests2.map((item)=>console.log(`Salam,${item} I would like u to invite for dinner tommorrow.`)
);



