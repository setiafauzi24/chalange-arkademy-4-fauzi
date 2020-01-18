function myBiodata (nama,umur){
  let biodataObject = {
    name : nama,
    age : umur,
    addres : "Buah batu Bandung",
    hobbies : ["writing", "reading a book", "playing games"],
    isMarried : false,
    listSchool :[{ 
      "highSchool" : "SMA Mutiara terpadu Palabuhanratu 2010-2013",
      "colage" : "Politeknik Pajajaran ICB Bandung 2013-2016 - accounting and tax management"}],
    skill : [{
      "javaScript": "30%",
      "php" : "0%",
      "c++" : "0%", }],
    interestInCoding : true


  }
return biodataObject
}
console.log(myBiodata ("Setia Muhammad Fauzi",24))
