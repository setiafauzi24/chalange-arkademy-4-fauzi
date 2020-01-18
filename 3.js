function cek_kata(parameter){
  if (typeof (parameter) != "string"){
    return "parameter harus string!"
  }
  let arayKata = parameter.split(" ")
  let jumlahString = 0
  let angka = "0123456789"
  for (let i=0; i< arayKata.length; i++){
    if (angka.indexOf(arayKata[i])<0){
        jumlahString+=1
    }
  

  
  }
      return jumlahString + '/'+arayKata.length
}
console.log(cek_kata("2 pasang sandal hilang"))
