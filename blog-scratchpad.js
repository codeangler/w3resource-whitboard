//  next letter in alaphabet  capitalize vowels
var string = "thisz"

function LetterChanges(str) { 

  // code goes here
    var newArr = []
  for (var i = 0 ; i < str.length; i++){
   
    newArr.push(str.charCodeAt(i) + 1)
  }
  var newStr = ""
  for (var j = 0; j < newArr.length; j ++){
      newStr += (String.fromCharCode(newArr[j]))
      console.log(newStr)
  }
    console.log(newArr)
//     var newStr = newArr.fromCharCode
//   return newStr; 
         
}
   
// keep this function call here 
LetterChanges(string);
