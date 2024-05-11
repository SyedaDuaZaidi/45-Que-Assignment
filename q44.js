function make_car(manufacturer, modelname) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        modelname: modelname,
    };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return (car[key] = value);
    });
    return car;
}
var mycar1 = make_car("Toyota", "Corrolla", ["colour", "Black"], ["year", 2024]);
console.log(mycar1);
var mycar2 = make_car("Honda", "Civic", ["colour", "white"], ["year", 2022]);
console.log(mycar2);
