var guests3 = ["Bisma", "Kinza", "Kainat"];
guests3.map(function (item) { return console.log(item, "Tommorrow I plan iftar party at my home so , u join us."); });
var notJoining1 = "Kainat";
console.log(notJoining1, "not joining us for iftar party.");
var newGuest3 = "Zehra";
guests3[guests3.indexOf(notJoining1)] = newGuest3;
console.log(guests3);
