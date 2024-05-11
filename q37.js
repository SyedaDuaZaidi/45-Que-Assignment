function city(cityName, countryName) {
    if (countryName === void 0) { countryName = "Pakistan"; }
    console.log("".concat(cityName, " is in ").concat(countryName));
}
city("Karachi");
city("Beijing", "China");
city("Quetta");
city("Mumbai", "India");
