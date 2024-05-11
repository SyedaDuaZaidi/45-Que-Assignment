function make_car(manufacturer :string , modelname : string , ...options :[string , any][]){
    const car : any ={
        manufacturer : manufacturer,
        modelname : modelname,
    };
    options.forEach(([key,value])=>(car[key] = value));
    
    return car;
}             
const mycar1 = make_car("Toyota" , "Corrolla", ["colour","Black"],["year" , 2024]);
console.log(mycar1
);
const mycar2 = make_car("Honda" , "Civic" , ["colour" , "white"],["year" , 2022]);
console.log(mycar2
);