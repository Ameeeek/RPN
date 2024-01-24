
// 11.21

let namaku = "AmekChayankDillaCelamanyaEak"
let result = ''
// diberikan pertanyaan untuk membalik suatu kata tanpa menggunakan method reverse. 
// gunakan metode for loop yang mengindex string tersebut dari arah kanan ke kiri lalu lalu taruh hasil index
// tersebut ke result

for(let i = namaku.length - 1; i>= 0; i--){
    console.log(namaku[i])
    result += namaku[i]
}
console.log(result)

// the trick here is just to think about the looping variabel as an imaginary pointer, pointing on the current looping index. 