var guests1 = ["Bisma", "Kinza", "Kainat"];
var notJoining = "Kainat";
var newGuest1 = "Zehra";
guests1[guests1.indexOf(notJoining)] = newGuest1;
guests1.unshift("Bushra");
var middleGuest = "Hoorain";
var middleindex = guests1.length / 2;
guests1.splice(middleindex, 0, middleGuest);
guests1.push("Ayat");
console.log(guests1);
console.log("We can invite only two people for dinner!");
while (guests1.length > 2) {
    var removeguest = guests1.pop();
    console.log("Sorry, ".concat(removeguest, " we cannot invite u for a dinner!"));
}
guests1.map(function (item) { return console.log("".concat(item, " You are still invited for dinner!")); });
guests1.pop();
guests1.pop();
console.log(guests1);
