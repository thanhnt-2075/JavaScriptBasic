x = 5;
function TestClosore(x) {
    return function (y) {
        return x * y;
    }
}

var add5 = TestClosore(this.x);
var add10 = TestClosore(10);

console.log(add5(20));
console.log(add10(20));