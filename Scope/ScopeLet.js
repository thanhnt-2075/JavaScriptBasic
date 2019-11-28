function featVar() {
    var x = 1;
    if (true) {
       var x = 2; // x ở đây cũng là x ở trên
       console.log(x); // in ra 2
    }
    console.log(x); // vẫn là 2
 }
function featLet() {
    let x = 1;
    if (true) {
        let x = 2; // x này là x khác rồi đấy
        console.log(x); // in ra 2
    }
    console.log(x); // in ra 1
}

console.log('Sử dụng var');
//var thì tạo ra một biến có phạm vi global, xuyên suốt trong tất cả các function chứa nó
featVar();
console.log('Sử dụng let');
//let tạo một biến chỉ có thể truy cập được trong block bao quanh nó
featLet();

