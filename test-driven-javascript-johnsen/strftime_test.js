// var date = new Date(2009, 11, 5);
// console.log(date.strftime("%Y"));
// console.log(date.strftime("%m"));
// console.log(date.strftime("%d"));
// console.log(date.strftime("%y"));
// console.log(date.strftime("%F"));

// var date = new Date(2009, 9, 2);
// try {
// assert("%Y should return full year",
// date.strftime("%Y") === "2009");
// assert("%m should return month",
// date.strftime("%m") === "10");
// assert("%d should return date",
// date.strftime("%d") === "02");
// assert("%y should return year as two digits",
// date.strftime("%y") === "09");
// assert("%F should act as %Y-%m-%d",
// date.strftime("%F") === "2009-10-02");
// console.log(assert.count + " tests OK");
// } catch (e) {
// console.log("Test failed: " + e.message);
// }

var date = new Date(2009, 9, 2);
testCase("strftime test", {
"test format specifier %Y": function () {
assert("%Y should return full year",
date.strftime("%Y") === "2009");
},
"test format specifier %m": function () {
assert("%m should return month",
date.strftime("%m") === "10");
},
"test format specifier %d": function () {
assert("%d should return date",
date.strftime("%d") === "02");
},
"test format specifier %y": function () {
assert("%y should return year as two digits",
date.strftime("%y") === "09");
},
"test format shorthand %F": function () {
assert("%F should act as %Y-%m-%d",
date.strftime("%F") === "2009-10-02");
}
});

function assert(message, expr) {
if (!expr) {
throw new Error(message);
}
assert.count++;
return true;
}
assert.count = 0;

function output(text, color) {
var p = document.createElement("p");
p.innerHTML = text;
p.style.color = color;
document.body.appendChild(p);
}
// console.log can now be replaced with
output(assert.count + " tests OK", "#0c0");
// and, for failures:
output("Test failed: " + e.message, "#c00");
