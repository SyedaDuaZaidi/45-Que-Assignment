var currentUsers = ["Asad", "Dua", " Hoor", "Ali", "Fatima"];
var newUsers = ["Asad", "Dua", "Hina", "Abbas", "Zehra"];
newUsers.map(function (newOneUser) {
    var ourCondition = currentUsers.some(function (currentOneUser) { return currentOneUser.toLowerCase() === newOneUser.toLowerCase(); });
    if (ourCondition) {
        console.log("Person will need to enter a new username.");
    }
    else {
        console.log("The username is available.");
    }
});
