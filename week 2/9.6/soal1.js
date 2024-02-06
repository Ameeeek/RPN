function changeMe(arr) {
  // you can only write your code here!
  if (arr.length == 0) return "";
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    res += `
        ${i + 1}. ${arr[i][0]} ${arr[i][1]}: 
        firstName :${arr[i][0]},
        lastName: ${arr[i][1]},
        gender: ${arr[i][2]},
        age: ${
          arr[i][3] == undefined
            ? "Invalid Birth Year"
            : new Date().getFullYear() - arr[i][3]
        }
    `;

    // res.push(person)
  }
  return res;
  //   return res.map((a)=>{
  //     return `1. ${a.firstName} ${a.lastName} \n ${a}`
  //  })
}

// TEST CASES
console.log(
  changeMe([
    ["Christ", "Evans", "Male", 1982],
    ["Robert", "Downey", "Male"],
  ])
);
// 1. Christ Evans:
// Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',

//   age: 41 } 2023 - 1982 = 41 kan yak wkwk
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }

changeMe([]); // ""
