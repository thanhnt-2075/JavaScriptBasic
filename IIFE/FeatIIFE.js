//Khái niệm: IIFE (Immediately Invoked Function Expression) là một hàm javacript, nó được chạy ngay sau khi nó được định nghĩa.

(function () {
    console.log('Normal IIFE called')
})();

//Mục đích sử dụng: IIFE như là một cái hộp đóng gói code của chính nó. Do đó, sẽ không truy xuất hay thay đổi được biến toàn cục - Ngăn nhiễm Global Scope
//Truyền biến vào IIFE
(function(){
	console.log(a + b);
})(a=1, b=2);

//Ví dụ để thấy được tầm quan trọng của IIFE
//1. Khi không sử dụng IIFE
function celebrityIDCreator (theCelebrities) {
	var i;
	var uniqueID = 100;
	for (i = 0; i < theCelebrities.length; i++) {
	  theCelebrities[i]["id"] = function () {
        console.log(i);
		return uniqueID + i;
	  }
    }
    console.log(theCelebrities)
	return theCelebrities;
}

var actionCelebs = [{name:"Stallone", id:0}, 
					{name:"Cruise", id:0}, 
					{name:"Willis", id:0}];

var createIdForActionCelebs = celebrityIDCreator (actionCelebs);

var stalloneID = createIdForActionCelebs [0];
console.log(stalloneID.id()); // 103
//Theo console bắt ở trên thì có thể thấy nếu không sử dụng IIFE thì sẽ gặp phải lỗi các phần tử i trong for đang cùng sử dụng một closure lên chúng đang
//cùng sử dụng một biến môi trường, hay cùng sử dụng một ô nhớ, nó sẽ xuất hiện lỗi ghi đè. 
//Lên khi bắt console ra sẽ thấy i có giá trị là 3 và kết quả trả về đều là 103 dù là createIdForActionCelebs1 [0] hay createIdForActionCelebs1 [1] đi chăng nữa

//2. Khi sử dụng IIFE
function celebrityIDCreator1 (theCelebrities1) {
	var i;
	var uniqueID = 100;
	for (i = 0; i < theCelebrities1.length; i++) {
		theCelebrities1[i]["id"] = (function (j)  {
            console.log(i)
			return (function () {
				return uniqueID + j; 
			})();
		})(i);
    }
    console.log(theCelebrities1)
	return theCelebrities1;
}

var actionCelebs1 = [{name:"Stallone", id:0}, 
					{name:"Cruise", id:0}, 
					{name:"Willis", id:0}];

var createIdForActionCelebs1 = celebrityIDCreator1 (actionCelebs1);

var stalloneID1 = createIdForActionCelebs1 [0];
console.log(stalloneID1.id); // 100

//JavaScript parser cần những dấu ngoặc đơn () đó để biết được những đoạn code trong đó là một Functional Expression chứ không phải là một Function.
//Hiểu được điều đó nên chúng ta có thể dùng nhiều cách để bỏ những dấu ngoặc đơn đó mà vẫn là cú pháp IIFE đúng.

//Cú pháp có thể thay đổi như sau:
var newSyntax =  function () {
    console.log('Normal IIFE called')
}();
//Áp dụng vào ví dụ trên ta có
function celebrityIDCreatornewSyntax (theCelebrities) {
	var i;
	var uniqueID = 100;
	for (i = 0; i < theCelebrities.length; i++) {
		theCelebrities[i]["id"] = function (j)  {
            console.log(i)
			return function () {
				return uniqueID + j; 
			}();
		}(i);
    }
    console.log(theCelebrities)
	return theCelebrities;
}

var actionCelebsnewSyntax = [{name:"Stallone", id:0}, 
					{name:"Cruise", id:0}, 
					{name:"Willis", id:0}];

var createIdForActionCelebsnewSyntax = celebrityIDCreatornewSyntax (actionCelebsnewSyntax);

var stalloneIDnewSyntax = createIdForActionCelebsnewSyntax [0];
console.log(stalloneIDnewSyntax.id); // 100