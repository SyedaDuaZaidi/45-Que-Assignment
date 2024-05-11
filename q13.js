var guests0 = ["Ali", "Hania", "Ayat", "Abbas"];
var invitationMessage1 = "Salam, I would like u to invite for dinner tommorrow.";
console.log(guests0[0] + " " + invitationMessage1);
console.log(guests0[1] + " " + invitationMessage1);
console.log(guests0[2] + " " + invitationMessage1);
console.log(guests0[3] + " " + invitationMessage1);
//By Array Method:
var guests2 = ["Ali", "Hania", "Ayat", "Abbas"];
guests2.map(function (item) { return console.log("Salam,".concat(item, " I would like u to invite for dinner tommorrow.")); });
