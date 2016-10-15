googletechtalks -- javascript the goog parts


Bad Parts
global variables
+  adds & concatenates
Semicolon insertion ( ...  learn rather the right way)
eval   with     avoid each
typeof
phony arrays
==  and !=  (( always use ===))
false, null, undefined, NaN
blockless statements  ((always add  {}  ))  e.g.
     if(foo)
        bar();
expression statemetns e.g.   foo;
floating point arit
     0.1 + 0.2 !== 0.3

right
if(value === undefined)    /// not  value == null

++  and --  ((( lots over complicated,  can not use them at all )))
switch


Good parts
Lambda
Dyanmics Objects
Loose Typing
Object literals

INheritance
classical vs prototypal

Object.create*

** avoid new  keyword

**   closure example   minute 28.05   google tech talk  good parts


power constructor   min  28:40
1.  Make an object
>  object literal
> new (** avoid)
> Object.create
>call another power constructor

2. Define some variables and functions
>bocme private members of
3. augments the object with priviledge methods
4. return the object

1.
function myPowerConstructor(x) {
  var that= otherMaker(x);
// 2 secre
var secret = f(x);
//3
 that.priv = function () {
   ... secret x that...
  };
return that;

}



//  minute  31   style isn't subjective
// we all drive on right side
block {

}

// silent Error  i.e.  bad style means bad results
return     //   <-  Semicolon insertion Error
{
  ok: false
};

//  working with the grain   it is based on scheme
// JSON  

//  imposing a programming discipline that makes more confident in a Dyanmic, loose-typed environment

// JSLint will hurt your feelings.
// Unlearning is really hard
//
