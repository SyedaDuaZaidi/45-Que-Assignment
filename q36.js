function make_shirt1(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I LOVE TYPESCRIPT"; }
    console.log("Making shirt of ".concat(size, " size with ").concat(message, " printed on it."));
}
make_shirt1();
make_shirt1("medium");
make_shirt1("small");
make_shirt1("any size", "I AND MY SELF");
