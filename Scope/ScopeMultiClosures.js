var e = 20;

// function sum(a) {
//     return function (b){
//         return function (c) {
//             return function (d) {
//                 return a + b + c + d + e;
//             }
//         }
//     }
// }

// console.log(sum(1)(2)(3)(4));


function sum(a) {
    return function sum1(b) {
        return function sum2(c) {
            return function sum3(d) {
                return a + b + c + d + e;
            }
        }
    }
}

var a = sum(1);
var b = a(2);
var c = b(3);
var d = c(4);
console.log(d);