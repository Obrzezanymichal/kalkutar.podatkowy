let dochod = 80000;
let podatek = 0;


if (dochod <= 30000) {
    podatek = 0;
}
else if (dochod <= 120000) {
    podatek = dochod * 0.12 - 3600;
}
else {
    podatek = 10800 + (dochod - 120000) * 0.32;
}


console.log("Twoj roczny dochod to: " + dochod + " zl");
console.log("Podatek do zaplaty wynosi: " + podatek + " zl");
