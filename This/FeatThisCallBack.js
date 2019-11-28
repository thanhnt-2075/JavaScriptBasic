//Callback sử dụng để giúp các hàm thực hiện đúng theo thứ tự từ trên suống dưới, nghe hơi kỳ lạ nhưng javascript sẽ hoạt động với cơ chế bất đồng bộ async

//Để hiểu hơn về luồng chạy của callBack trong hệ thống có thể tham khảo bài viết sau:
//https://viblo.asia/p/co-che-bat-dong-bo-trong-javascript-jvElaO1zKkw
var name = "Tuan";
var user = {
    name: "Tuan Nguyen",
    getName: function () {
        return this.name; // this sẽ tương ứng với đối tượng user
    }
};

console.log(user.getName()); // Nếu viết là .getName() có nghĩa là nó hướng vào method và this sẽ trỏ đến biến địa phương name: "Tuan Nguyen",

var getUserName = user.getName;//Còn nếu viết là .getName nó là một biến property chứ không phải là method nữa, lên this sẽ hướng tới biến global name = "Tuan";

console.log(getUserName());

var getUserName1 = user.getName.bind(user);

console.log(getUserName1());