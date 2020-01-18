function userNameValidity (username){
  if(username[0] != username[0].toLowerCase()){
    return "username false"}
  else if(username.length < 5 && username.length >12){
    return "username false"
  }else if (username == "_"){
    return "username false"
  }
  return "username true"
  
  }

console.log(userNameValidity ("fiona_mareta"))
console.log(userNameValidity ("fionamareta99"))
console.log(userNameValidity ("FionaMATRETAA"))


function passwordValidity (password){
  let int = 0;
  let simbol = '';
  if (password.length != 7){
    return "password false" }
    else if(password != password.toUpperCase()){
      return "password false"
    }
   for (let i=0; i < password.length; i++){
     let number ='123456789'
     let symbole = `!$%^&*@()_+|~-={}[]:";'<>?,./`
    let checkInt = number.indexOf(password[i])
    let checkSymbole = symbole.indexOf(password[i])
    if (checkInt != '-1'){
      int +=1;
    }else if(checkSymbole != '-1'){
      simbol +=1
    }
   }
   if (int == 0 || int > 1){
     return "password false"
   }else if(simbol == 0 || simbol > 1){
     return "password false"
   }
   return "password true"
}
console.log(passwordValidity('1WORLD!'))
