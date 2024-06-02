const buttonCheck = document.getElementById("buttonCheck");
let input = document.getElementById("nmbr");
let output = document.getElementById("output");

const romanNumerals = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  XXX: 30,
  XX: 20,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

buttonCheck.addEventListener("click", (event) => {
  inputToRoman(input.value);
  event.preventDefault();
});

function inputToRoman(num) {
  // output.textContent = "";
  let result = "";
  let romanValues = Object.keys(romanNumerals);

  //forEach Loop iteriert durch jedes Element des romanValues Obj
  romanValues.forEach((key) => {
    //prüft, ob der Wert der aktuellen römischen Ziffer kleiner/gleich num ist
    while (romanNumerals[key] <= num) {
      //der Wert der römischen Ziffer wird von num subtrahiert, und die römische Ziffer (key) wird an result angehängt => Prozess wiederholt sich, bis der Wert der römischen Ziffer nicht mehr von num abgezogen werden kann
      num -= romanNumerals[key];
      result += key;
    }
  });
  output.textContent = result;
}
