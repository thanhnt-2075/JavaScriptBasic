var rabbit = {};
rabbit.speak = function(line) {
    console.log("The rabbit says '" + line + "'");
};

rabbit.speak("I'm alive.");

//Có thể viết lại thành:

function speak(line) {
    console.log("The " + this.type + " rabbit says '" + line + "'");
}
var whiteRabbit = {type: "white", speak: speak};
var fatRabbit = {type: "fat", speak: speak};
  
whiteRabbit.speak("I'm alive.");
fatRabbit.speak("I'm alive.");

//Call
//Gọi hàm và cho phép bạn truyền vào một object và các đối số phân cách nhau bởi dấu phẩy (Comma)
//VD: function.call(thisArg, arg1, arg2, ...)

//apply
//Gọi hàm và cho phép bạn truyền vào một object và các đối số thông qua mảng (Array)
//VD: function.apply(thisArg, [argsArray])

//bind
//Trả về một hàm số mới, cho phép bạn truyền vào một object và các đối số phân cách nhau bởi dấu phẩy.
//VD: var newFunction = fun.bind(thisArg[, arg1[, arg2[, ...]]])

//Để hiểu sự khác nhau của 3 hàm này có thể tham khảo bài viết
//https://completejavascript.com/phan-biet-call-apply-va-bind-trong-javascript

console.log('Áp dụng call, apply, bind vào ví dụ trên:');

function speak(line) {
    console.log("The " + this.type + " rabbit says '" + line + "'");
}
var whiteRabbit = {type: "white"};

speak.call(whiteRabbit, "I'm alive.(call)");
speak.apply(whiteRabbit, ["I'm alive.(apply)"]);

var newFunction = speak.bind(whiteRabbit, "I'm alive.(bind)");
newFunction();

  