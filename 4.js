
function cetak_gambar(parameter) {
   
  if (typeof(parameter) != 'number'){
    return 'parameter anda harus angka , tolong perbaiki'
  } else if ( parameter % 2 == 0){
    return 'parameter anda genap, tolong perbaiki'
  }

let olah = (parameter -1) / 2
let x = 'x  '
let varUp = '=  '
let valueUp = varUp.repeat(parameter)
valueUp= setCharAt(valueUp,valueUp.length -3,'x')
valueUp =setCharAt(valueUp,0,'x');

for(let i=0; i<olah; i++){
console.log(valueUp)
};

console.log(x.repeat(parameter))

for(let i=0; i<olah; i++){
console.log(valueUp)
}

}

cetak_gambar(7)
{
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}
