'use strict'

 // LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space. 

function LetterCapitalize(str) { 

  // code goes here 
  var myArr = str.split(' ')
  var newString = "";
  var i = 0;
  while(i < myArr.length){
    var newString = newString + myArr[i][0].toUpperCase() + myArr[i].slice(1) + " "
    i ++
  }
  console.log(newString)
  return str; 
         
}
   
// keep this function call here 
LetterCapitalize("this is a string");




//  FirstFactorial(num) take the num parameter being passed and return the factorial of it (ie. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18.
// function FirstFactorial(num) { 
//   let x = 1;
//   // code goes here  
//   for (let i = 1; i <= num; i++){
    
//     x = x*i
    
//   }
  
//   return x; 
         
// }
   
// // keep this function call here 
// FirstFactorial(4);




//  ??????   SimpleAdding(num) add up all the numbers from 1 to num.   12 returns 78

// function SimpleAdding(num) { 
//   var x = 0;
//   // code goes here 
//   for (var i = 0; i < num; i++) {
    
//     x +=(i+1)
//     console.log(x)
//   }

//   return x; 
// }
// SimpleAdding(12)




// ????? next letter in alaphabet  capitalize vowels
// var string = "this is a test string zoo monkey dog"

// function LetterChanges(str) {

//   // code goes here
//   var newArr = []

//   for (let i = 0; i < str.length; i++) {
//     if (str.charCodeAt(i) < 123 && str.charCodeAt(i) > 96 || str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91) {
//       if (str.charCodeAt(i) === 122) { 
//         newArr.push(97) 
//       } else if(str.charCodeAt(i) === 90){
//         newArr.push(65)
//       }else { 
//         newArr.push(str.charCodeAt(i) + 1) }

//     } else {

//       newArr.push(str.charCodeAt(i))
//     }

//   }

//   var newStr = ""
//   for (var j = 0; j < newArr.length; j++) {
//     let letterStorage = String.fromCharCode(newArr[j])
//     if (letterStorage === 'a' || letterStorage === 'e' || letterStorage === 'i' || letterStorage === 'o' || letterStorage === 'u'){
      
//       newStr += letterStorage.toUpperCase()
//     } else {
//       newStr += letterStorage
//     }
//   }

// console.log(newStr)
// return newStr

// }

// // keep this function call here 
// LetterChanges(string);
