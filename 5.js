function deretBilang (x,y){
let x = 0;
  if (typeof(x) !='number' && typeof(y) != 'number'){
    return 'parameter bertype number'
  } else if ( x < y){
    return 'parameter x harus lebih besar dibanding y'
  }

 return true


}

deretBilangan(5,3)
