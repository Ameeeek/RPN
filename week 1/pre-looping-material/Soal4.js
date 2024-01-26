// 4. Breaking Sentence (yet Again) and Count Each Length
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);
let exampleSecondword4 = word4.substring(4,14);
let exampleThirdword4 = word4.substring(15,17);
let exampleFourthword4 = word4.substring(18,20);
let exampleFifthword4 = word4.substring(21,26);

let firstWordLength = exampleFirstWord4.length;
let secondWordLength = exampleSecondword4.length;
let ThirdWordLength= exampleThirdword4.length;
let FourthWordLength = exampleFourthword4.length;
let FifthWordLength = exampleFifthword4.length;

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + exampleSecondword4 + ', with length: ' + secondWordLength);
console.log('Third Word: ' + exampleThirdword4 + ', with length: ' + ThirdWordLength);
console.log('Fourth Word: ' + exampleFourthword4 + ', with length: ' + FourthWordLength);
console.log('Fifth Word: ' + exampleFifthword4 + ', with length: ' + FifthWordLength);
