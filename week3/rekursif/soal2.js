/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals(str) {
  let result = "";
  const vocals = ["a", "i", "u", "e", "o", "A", "I", "U", "E", "O"];
  for (let i = 0; i < str.split("").length; i++) {
    if (vocals.includes(str[i])) {
      let changed = String.fromCharCode(str[i].charCodeAt() + 1);
      result += changed;
    } else {
      result += str[i];
    }
  }
  return result;
}
function reverseWord(str) {
  return str.split("").reverse();
}

function setLowerUpperCase(str) {
  return str.map((a) =>
    a == a.toUpperCase()
      ? a.toLowerCase()
      : a == a.toLowerCase()
      ? a.toUpperCase()
      : ""
  );
}

function removeSpaces(str) {
  return str.filter((a) => a != " ");
}

function passwordGenerator(name) {
  return name.length >= 5
    ? removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name)))).join("")
    : "Minimal karakter yang diinputkan adalah 5 karakter";
  // return
  //code di sini
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
