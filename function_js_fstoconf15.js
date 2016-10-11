// Reduce Complexity with Functional JS by @frontvu at #fstoconf15
'use strict'; // minute 22

// currying 
//  i didn't get this example to work
// var curry = function(fn){
// 	var args = Array.prototype.slice.call(arguments, 1);

// 	return function() {
// 		return fn.apply(this, args.concat(
// 			Array.prototype.slice.call(arguments, 1)));
// 	}
// }

// var iLikeCurry = curry(iLike);
// console.log(iLikeCurry("Casey", "jerk-chicken"));

// composition
var compose = function () {
	var funcList = arguments;
	return function() {
		var args = arguments;
		for (var i = funcList.length; i-- >0;){
			args = [funcList[i].apply(this, args)];
		}
		return args[0];
	}
}

var add = num => ++num;
var sqr = num => num*num;
var dbl = num => num + num;

var calc = compose(dbl, sqr, add); // =>composed function starts on right b/c of compose for(){}

console.log(calc(1));
console.log(calc(5));
console.log(calc(8));

// Promise :  an eventual results of an async results

// Monad:  return operation takes a value from a plain type and puts it into a monadic contaier using the constructor, creating a monadic value
// a certain characteristic and 

// $.ajax  actual returns a promise
// var getTopDrinks = param => {
// 	return $.ajax({ data: param, url: "http://lcbo.com/top-drinks"});
// };

// var getBeer = drinkSelection => {
// 	return drinkSelection.filter(drink => drink.type === "beer");
// };

// getTopDrinks.then(getBeer); // => Promise me filtered beer


// Memoization :  optimization by storing

// the word for not function is dysfunction