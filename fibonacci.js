var n0 = 0;
var n1 = 1;
var myArr = [];

function fibonacciGenerator (n) {
    for (var i = 0; i < n; i++) {
        myArr.push(n0);
        myArr.push(n1);
        n0 = n0 + n1;
        n1 = n0 + n1;
    } // This method is creating an array double the length so we need to halve it with....
    var half_length = Math.ceil(myArr.length / 2);   
    var leftSide = myArr.splice(0,half_length);
    return leftSide;
}

console.log(fibonacciGenerator(4));