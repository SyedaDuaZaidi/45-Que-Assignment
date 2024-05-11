//string Test(==/!=);
let river : string = "indus";

console.log("river is equal to indus ?")
console.log(river == 'indus'
);
console.log("river is not equal to indus ?")
console.log(river != 'indus'
);

//lowercase Test(==/!=);
let river1 : string = "indus";
let uppercaseRiver = "INDUS";

console.log("Is INDUS is equal to indus after converting to lowercase ?")
console.log(uppercaseRiver.toLowerCase()=="indus"
);
console.log("Is INDUS is notequal to indus after converting to lowercase ?")
console.log(uppercaseRiver.toLowerCase()!="indus"
);

//numerical Test ==,!=,>,<,>=,<=;
let five = 5
let ten = 10

//==,!= :
console.log("Is five is equal to 5 ?");
console.log(five == 5
);
console.log("Is ten is notequal to 10 ?");
console.log(ten != 10
);
//>,< :
console.log("Is ten is greaterthan five ?");
console.log(10>5
);
console.log("Is ten is lessthan five ?");
console.log(10<5
);
//>=,<= :
console.log("Is five is lessthan or equalto five ?");
console.log(5<=5
);
console.log("Is five is greaterthan or equal to ten ?");
console.log(5>=10
);

//&&,|| Test;
let three = 3
let nine = 9

console.log("Is three is lessthan or equalto three and three is notequal to nine ?");
console.log(3<=3 && five!= 9
);
console.log("Is three equal to nine or nine lessthan three ?");
console.log(three == 9 || 9<3
);

//array Test;
let foodArray =["Biryani","Pasta","Qorma","Desert"];
//includes;
console.log("Is Biryani includes in my foodArray ?");
console.log(foodArray.includes("Biryani")
);
//not includes;
console.log("Is Biryani notincludes in my foodArray ?");
console.log(!foodArray.includes("Biryani")
);
