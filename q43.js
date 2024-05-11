function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Ingredients need for making sandwich");
    items.map(function (breadsandwich) { return console.log(breadsandwich); });
    console.log("\nSandwich is ready to eat!\n");
}
sandwich("chicken", "cheese", "mayo");
sandwich("vegetables", "ketchup");
sandwich("egg");
