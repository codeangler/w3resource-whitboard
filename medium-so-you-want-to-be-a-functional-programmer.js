// without loop construct or variables (recursion)
function sumRange(start, end, acc) {
    if (start > end)
        return acc;
    return sumRange(start + 1, end, acc + start)
}
console.log(sumRange(1, 10, 0)); // prints 55

// simple loop construct
var acc = 0;
for (var i = 1; i <= 10; ++i)
    acc += i;
console.log(acc); // prints 55