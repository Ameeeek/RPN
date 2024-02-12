function piramid2(num) {
    let result = ''
    for(let i = num; i >= 1; i--){
        for(let j = 1; j <= i;j++ ){
            result += i
        }
        result += '\n'
    }
    for(let i = 2; i <= num; i++){
        for(let j = 1; j <= i;j++ ){
            result += i
        }
        result += '\n'
    }
    console.log(result)
  }
  
  console.log(piramid2(5))
  
  /*
  55555
  4444
  333
  22
  1
  22
  333
  4444
  55555
  */