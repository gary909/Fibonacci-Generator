var n0 = 0;
var n1 = 1;
var myArr = [];

function fibonacciGenerator (n) {
    for (var i = 0; i < n; i++) {
        myArr.push(n0);
        myArr.push(n1);
        n0 = n0 + n1;
        n1 = n0 + n1;
    }
    return myArr;
}

console.log(fibonacciGenerator(3));