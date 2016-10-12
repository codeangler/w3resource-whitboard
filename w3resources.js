"use strict"; // permits es6 in node
// const total = [ 0, 1, 2, 3 ].reduce( ( acc, cur ) => acc + cur, 0 );
// console.log(total)

// ((str) => {console.log(str)})("something"); // ### ES6 build works. Need to ';' after 'use strict' but works in chrome dev tools

// 10.12.2016


// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. Go to the editor
function computeExponent(base, n) {
  return Math.pow(base, n)
};

function makeMathPow(base, n){
  return Array.apply(null, {length: n}).fill(base).reduce((prev, current) => {return (prev * current)},1)
};

// refactor colloboration with senior dev.
const mathPower = (base, n) => {
  return Array.apply(null, {length: n})
  .fill(base)
  .reduce((prev, curr) => prev * curr, 1);
}
console.log(mathPower(3, 3))

console.log(computeExponent(7,2));
console.log(makeMathPow(2, 3));


// 16. Write a JavaScript function to extract unique characters from a string. Go to the editor
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"
// Click me to see the solution.

// 17. Write a JavaScript function to  get the number of occurrences of each letter in specified string. Go to the editor
// Click me to see the solution.

// 18. Write a function for searching JavaScript arrays with a binary search. Go to the editor
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
// Click me to see the solution.

// 19. Write a JavaScript function that returns array elements larger than a number. Go to the editor
// Click me to see the solution.

// 20. Write a JavaScript function that generates a string id (specified length) of random characters. Go to the editor
// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
// Click me to see the solution.

// 10-10-2016
// 14. Write a JavaScript function to convert an amount to coins. Go to the editor
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1
//
// let coins = {
//     'quarters': 25,
//     'dimes': 10,
//     'nickels': 5,
//     'pennies': 1
// }
// var amountToCoins = function(amt, coins) {
//     // console.log(coins)
//     let changeReturn = {
//         'quarters': 0,
//         'dimes': 0,
//         'nickels': 0,
//         'pennies': 0,
//         // addCoin : function(coin){
//         //   changeReturn[coin] = changeReturn[coin] ++;
//         // }
//     };
//     let amtRemaining = amt;
//     for (var coin in coins) {
//         for (let i = 0; i < amt; i++) {
//             // console.log(i)
//             if (coins[coin] <= amtRemaining) {
//                 // console.log(coin)
//                 switch (coin) {
//                     case "quarters":
//                         // console.log('you added a quarter');
//                         amtRemaining -= coins[coin];
//                         changeReturn[coin]++;
//                         break;
//
//                     case "dimes":
//                         // console.log('you added a dime');
//                         amtRemaining -= coins[coin];
//                         changeReturn[coin]++;
//                         break;
//
//                     case "nickels":
//                         // console.log('you added a nickel');
//                         amtRemaining -= coins[coin];
//                         changeReturn[coin]++;
//                         break;
//
//                     case "pennies":
//                         // console.log('you added a penny');
//                         amtRemaining -= coins[coin];
//                         changeReturn[coin]++;
//                         break;
//
//                     default:
//                         console.log('something in default')
//                 }
//             }
//
//         }
//     }
//   return(changeReturn)
// };
//
// console.log(amountToCoins(43, coins))

// 10-06-2016
// 13. Write a JavaScript function to compute the factors of a positive integer. Go to the editor
// Click me to see the solution.

// var N = 10;
// var output = Array.apply(null, {length: N + 1}).map(Number.call, Number).filter(function(e){if(N % e === 0){ return e}})

// console.log(output);

// let positiveInteger = (num) => {
//   let arr = new Array();
//   for(let i = 1; i < num +1; i ++){
//     if(num % i === 0){
//       arr.push(i);
//     }
//   }
//   return arr
// }

// console.log(positiveInteger(12))
// console.log(positiveInteger(15))
// console.log(positiveInteger(17))

// 12. Write a JavaScript function which says whether a number is perfect. Go to the editor
// According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

// let perfectNumber = (num) => {
//   let aliquotSum = [] // how would I generate an array with pure funcitonal programming
//   for(let i = 1; i < num; i ++){
//     if(num % i === 0){
//       aliquotSum.push(i)
//     }
//   }
//   console.log(aliquotSum.reduce((prev, current, i) => prev + current , 0));
//   if (aliquotSum.reduce((prev, current) => prev + current , 0) === num){
//     if ((aliquotSum.reduce((prev, current) => prev + current , 0) + num) / 2 === num){
//       return `you have a perfectNumber ${num}`
//     }
//   } else{
//     return false;
//   }
// }
// console.log(perfectNumber(6));

// refactor idea with .filter()

//  10-05-2016

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. Go to the editor
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4

// first arrange array in sequence.   .filter()?  then reduce?
// ((arr) => {
//   let sortedArray = arr.sort((a, b) => a - b)
//   console.log(`This is the second lowest number ${sortedArray[1]}, and this is the second greatest ${sortedArray[(sortedArray.length-2)]}`);
// })([421,12342,324,423,15]);


// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. Go to the editor
// ((n) => {
//   let matrix = []
//   for(let i = 0; i < n; i++){
//     matrix.push([])
//     for (let j = 0; j < n; j++){
//       let x;
//         (i == j ? x = 1 : x = 0);
//         matrix[i].push(x);

//     }
//   }
//   console.log(matrix.join('\n'))
// })(3);

// let identityMatrix = [[1,0,0],[0,1,0],[0,0,1]]
// console.log(identityMatrix.join("\n"));

// console.log("");

// refactor answer from Ron Rieger
// function identityMatrix(size){
//   var r = new Array(size);
//   for(var i = 0; i < size; i++){
//     r[i] = new Array(size).fill(0);
//     r[i][i] = 1;
//   }
//   return r;
// }

// console.log(identityMatrix(4));

// 9. Write a JavaScript function which accepts an argument and returns the type. Go to the editor
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

// ((input) => console.log(typeof(input)))(false)

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. Go to the editor
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// let ultimatePrime = number => {
//   let sqrt = (Math.floor(Math.sqrt(number)));
//   if (number === 1)return false;
//   if (number === 2 || number === 3) return true;
//   for (let i = 2 ; i < sqrt + 1; i++){
//     if(number % i === 0) return false
//   }
//   return `${number} is prime`
// }

// console.log(ultimatePrime(37))

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. Go to the editor
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5
// ((str) => console.log(
//   str.split('')
//   .reduce(
//     (prev, current) => {
//       if("aeiouAEIOU".split('').indexOf(current) != -1){
//         return ++prev;
//       } else{
//         return prev
//       };
//       },0 )
//   ))("The quick brown fox");
//  NOTE:   prefix incrementor vs postfix incrementor is critical for this to work   ++prev  != prev++

// Basic #12  Write a JavaScript program to get the website URL (loading page).
// console.log(window.location.href)

/* Basic #11. Write a JavaScript program to convert temperatures to and from celsius, fahrenheit. Go to the editor
[ Formula : c/5 = (f-32)/9 [ where c = temperature in celsius and f = temperature in fahrenheit ]
Expected Output :
60°C is 140 °Fp
45°F is 7.222222222222222°C  */
// ;(function(){
//     const temperature = prompt("enter a temperature to convert with it's declaration e.g. '45, f' or '100, c'").split(', ')
// //     console.log(temperature.split(', '))
//     switch (temperature[1]){
//         case "c": const fahrenheit = ((Number(temperature[0])/5)*9) + 32
//         console.log(`${temperature[0]} celsius, is ${fahrenheit} fahrenheit`)
//         break;
//         case "f": const celsius = ((Number(temperature[0])-32/9)*5)
//         console.log(`${temperature[0]} fahrenheit, is ${celsius} celsius`)
//         break;
//         default: console.log('err')
//     }

// })();


//10. write an program to calculate multiplication and division of two numbers (input from user)

// var a = prompt('Enter a number');
// var b = prompt('Enter a number');

// var confirm = confirm("Ok to Multiply; Cancel for division")
// if (confirm) {

//   console.log(a * b)

// } else {
//   console.log(a / b)
// }

// 9. basic calculate days left until christmas
// let thisMoment = new Date()
// let xMas = new Date(thisMoment.getFullYear(), 11, 25)
// let _msPerDay = 24*60*60*1000;
// let _daysTilXmas = (thisMoment < xMas)? console.log( Math.round( ( xMas.getTime() - thisMoment.getTime() ) / _msPerDay )): console.log("better luck next year")
// if (thisMoment < xMas) {
//   let daysToGo = (xMas.getTime() - thisMoment.getTime())/ _msPerDay
//   console.log(Math.round(daysToGo));
//  } else {
//   console.log(thisMoment)
// }



/* 8. Write a JavaScript program where the program takes a random integer between 1 to 10,
the user is then prompted to input a guess number. If the user input matches with guess number,
the program will display a message "Good Work" otherwise display a message "Not matched".

// const userinput = 7; // prompt("Guess a number betten 1-10")
// let thisTime = Math.floor(Math.random()* 10 +1 );
// console.log(thisTime)
// if (userinput === thisTime) {console.log("Good Work")} else {console.log('Not Matched')}


/* basic 7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050. */

// var Sundays = []
// var year = 2014

// // While date is <= 2050  i++
// while(year <= 2050){
//   var testDate = new Date(year,0,1);
//   var weekday = testDate.getDay();

//   if (weekday === 0){
//     Sundays.push(testDate.getFullYear())
//   }
//   year ++
// }
// console.lowg(Sundays)

// #6 basic   test for leap year
// let year = 1992
// let x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// console.log(x);

/* 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. Go to the editor
Example string : 'Web Development Tutorial'
Expected Output : 'Development' */

// let longword = (str) => str.split(' ').reduce(function(prev, curr, i, arr) { if (prev.length < curr.length) {return curr } else {return prev}
// }, "")
// console.log(longestWord('this is sentence with different length words'))
/*
5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. Go to the editor
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox '
*/
// (function(str) {
//   var upperFirst = str.split(' ').map(function(e) {return (e[0].toUpperCase() + e.slice(1))}).join(" ")
//   console.log(upperFirst)
// }('the quikc brown fox'))

// someone else's response
// (function() {
//   var given = "edcbahklahflakjsdhfjwhgerjhj";
//   var splitted = given.split("");
//   var bigger, smaller = "";

//   for (i = 0; i < splitted.length; i++) {
//     for (j = 0; j < splitted.length; j++) {
//       if (splitted[i] > splitted[i + j]) {
//         bigger = splitted[i];
//         smaller = splitted[i + j];
//         splitted[i + j] = bigger;
//         splitted[i] = smaller;
//       }
//     }
//   }
//   console.log(splitted.join(''))
// })()


/*
JS functions #4 Write a JavaScript function that returns a passed string with letters in alphabetical order. Go to the editor
Example string : 'webmaster'
Expected Output : 'abeemrstw
*/

// (function(str) {
//   var tempArr = str.split('').sort().join('');
//   console.log(tempArr)
// })("webmaster")


// JS Function Problem #3
// (function(str) {
//   var tempArr = []
//   for (var i = 0; i < str.length; i++) {
//     for (var j = i + 1; j < str.length + 1; j++) {
//        tempArr.push(str.slice(i, j))
//     }
//   }

//   console.log(tempArr.join())
// })('dog')


// JS  Function Problem #2
// (function reverse(str) {
//   var fwd = str.split('').filter(function(e) {
//     return e !== " " }).join('')
//   var rev = fwd.split('').reverse().join('')
//   console.log(fwd, rev)
// })('what is happening');

// (function descructive(str) {
//   var fwd = str.split('').filter(function(e) {
//     return e !== " " })
//   var rev = fwd.reverse().join('')
//   console.log(fwd.join(''), rev)
// })('what is happening')


// js functions # 1
// (function(num){
//   var r = num.toString().split('').reverse().join('')
//   console.log(Number(r))
// })(3457)
