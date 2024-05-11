let currentUsers =["Asad", "Dua", " Hoor", "Ali", "Fatima"];
let newUsers =["Asad", "Dua", "Hina", "Abbas", "Zehra"];
newUsers.map((newOneUser)=>{
let ourCondition = currentUsers.some(currentOneUser=>currentOneUser.toLowerCase()===newOneUser.toLowerCase());
if (ourCondition){
    console.log("Person will need to enter a new username."
);
}
else {
    console.log("The username is available."
);
}
})