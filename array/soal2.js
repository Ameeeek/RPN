let input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {
    let namaBaru = `${input[1]} Elsharawy`
    let provinsi = `Provinsi ${input[2]}`
    input.splice(1,1, namaBaru)
    input.splice(2,1, provinsi)
    input.splice(4,1, "Pria")
    input.push("SMA Internasional Metro")
    console.log(input)
    if(input[3].split('/')){
        console.log("Mei")
    }
    split = input[3].split("/")
    reverse = split.splice(0,2).reverse()
    tanggal = reverse.push(split[0])
    console.log(reverse)

    console.log(input[3].split("/").join("-"))

    spl = input[1].split(" ")
    console.log(spl.splice(0,2).join(" "))
}

dataHandling(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */