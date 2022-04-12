function removeChar(str){
  let newstring=str.split("")
    newstring.pop()
    newstring.shift()
   return newstring.join("")
  
  }

  module.exports=removeChar
