/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  let sorted = [[], [], []];
  for (let i = 0; i < animals.length; i++) {
    if (animals[i][0] == "c") {
      sorted[1].push(animals[i]);
    } else if (animals[i][0] == "a") {
      sorted[0].push(animals[i]);
    } else if (animals[i][0] == "k") {
      sorted[2].push(animals[i]);
    }
  }
  return sorted;
  // return animals.sort()
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
