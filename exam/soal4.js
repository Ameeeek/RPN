/*
  menghitung jumlah karakter yang duplikat
  misal ada aabbc maka a dan b adalah duplikat maka return 2
  misal ada AaBbc maka a dan b juga duplikat ga peduli dia huruf besar atau tidak
*/
function duplicateCount(text) {
  let container = [];
  for (let i = 0; i < text.length; i++) {
    let filter = text.toLowerCase().split("").filter((a) => a == text[i]).join("");
    if (container == 0 && filter.length > 2) {
      container.push(filter);
    } else if (filter.length >= 2 && container.includes(filter) != true) {
      container.push(filter);
    }
  }
  return container.length;
}
// kok gw bodoh bgt ya taik bbabiiiiiiiiii knp gw ga kepikiran sihhh ngntnntndkdoskacsfkdmkxz,xzckk,x,z,mzx,.
console.log(duplicateCount("")); //0
console.log(duplicateCount("abcde")); //0
console.log(duplicateCount("aabbcde")); //2
console.log(duplicateCount("aabBcde")); //2
console.log(duplicateCount("Indivisibility")); //1
console.log(duplicateCount("Indivisibilities")); //2
console.log(duplicateCount("abcabcdABcefGhg")); //4
