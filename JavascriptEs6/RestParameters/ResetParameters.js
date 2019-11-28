function sum(...theArgs) {
    return theArgs.reduce((previous, current) => {
        //Cú pháp: arr.reduce(callback[, initialValue])
        //reduce() dùng để thực thi một hàm lên từng phần tử của mảng (từ trái sang phải) với một biến tích lũy để thu về một giá trị duy nhất
        return previous + current;
    });
}
  
console.log(sum(1, 2, 3));
// expected output: 6

console.log(sum(1, 2, 3, 4));
// expected output: 10


function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a); 
    console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs); 
}
  
myFun("one", "two", "three", "four", "five", "six"); //Nếu đặt dấu ...biến nó sẽ chuyển các biến tham số đầu vào đấy thành mảng. 
// Với những tham số cuối không được gọi là reset parameters
// Sử dụng hàm này để chuyển nhanh các đối số đầu vào thành một mảng giá trị để tiện xử lý

//Áp dụng vào một ví dụ thực tế:
var album1 = ["1", "2"];
var album2 = ["3"];
//Đê có thể gộp 2 mảng này vào một nếu theo cách thông thường:
var album2 = album2.concat(album1);
// //Nếu sử dụng đến spread Operator
var album2 = ['3', ...album1];
console.log(album2);
//Hoặc có thể viết:
var pooledArr = album2.push(...album1);
console.log(album2);
//Hoặc có thể áp dụng như sau:
var myClass = new ScienceClass(...studentList)