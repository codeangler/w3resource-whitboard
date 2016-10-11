// taking you along on Anjana Vakil: Learning Functional Programming with JavaScript - JSUnconf 2016

// fp vs OOP  vs imperative programing   (( haskel / closure FP))
//  Fp is s style of code,  it is a mindset
//

// prototypical orientation is a buggy process
// functional prog  may be less bug, easier to maintain
// randa 
// do everything  as  input -> output as flow of data,  not steps of recipes
// No function

// possible an imperative like process
var name = "casey";
var greeting = 'Hi, I\'m ';
console.log(greeting + name);

//

function greet(name) {
	return "hi, i'm " + name;
}
console.log(greet('casey b'));

//   avoid side effects. only take input and only give output (not seomthin else like adding console.log)
// ** keypoint

// &&  higher orderfunctions   function w/n function 

// purely functions...
// gettinginto functional mindset

// used to iterating... instead use .map  .reduce. filter 

// Avoid mutating data;  !!  not mutating
//

// Persistent Data Structure
//  ideal hash tree ...
// immutable data struc
//  each leaf node of the tree
// make a new node  indeed of creating a new tree
// structural sharing  --- old version with new version

// Mori in javascript using  cloqure ///
// immutable.js from FB

// Underscore // lodash / ramda

//  next learning
//  an introduction to function programming 
