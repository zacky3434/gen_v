// nomer 4
function celciusKeFahrenheit(celcius) {
    return (celcius * 9/5) + 32;
}

let suhuCelcius = 30;
let suhuFahrenheit = celciusKeFahrenheit(suhuCelcius);

console.log(suhuCelcius + "°C sama dengan " + suhuFahrenheit + "°F");
// nomer 1
const hitungLuas = (alas, tinggi) => 0.5 * alas * tinggi;

let a = 12;
let t = 5;

console.log(`Luas segitiga dengan alas ${a} dan tinggi ${t} adalah ${hitungLuas(a, t)}`);
// nomer 2
const cekAngkaSingkat = angka => 
    angka > 0 ? "Angka Positif" : angka < 0 ? "Angka Negatif" : "Nol";

console.log(cekAngkaSingkat(10)); // Output: Angka Positif
console.log(cekAngkaSingkat(-5)); // Output: Angka Negatif
console.log(cekAngkaSingkat(0));  // Output: Nol
