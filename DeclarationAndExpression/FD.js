//Khái niệm

//FD và FE khác nhau ở vùng scope ảnh hưởng. Với FD, tên của function sẽ hiện hữu ở scope của nó và scope cha của nó (Nơi nó được tạo ra), 
//còn với FE, tên của function (Nếu có) sẽ chỉ hiện hưũ ở scope của nó, và nó sẽ không tồn tại ngoài scope cha. Một điều quan trọng nữa, 
//FE sẽ không được hoisting như function bình thường.

//function a(){} // FD
//var foo = function(){...} //FE
//(foo(){...})(); //FE

//FD
console.log(foo1());
function foo1() {
    let a = 1;
    let b = 10;
    return a+b;
};

//FE
console.log(foo2());
var a = function foo2() {
    let a = 1;
    let b = 10;
    return a+b;
};