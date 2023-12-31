// take the input from the user
const prompt = require('prompt-sync')({sigint: true});
let res

const input = prompt('Inputkan angka genap: ')

if (isNaN(parseInt(input))) {
    console.log("Tidak bisa input selain angka")
}
else if (input < 0) {
  console.log("Tidak bisa input bilangan negatif");
} else if (input % 2 == 1) {
    console.log("Tidak bisa input bilangan ganjil");
} else {
  res = Math.sqrt(input);
  console.log("Akar pangkat 2 dari " +  input +  res);
}

