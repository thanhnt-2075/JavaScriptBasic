var name = "Tuan";
var user = {
    name: "Tuan Nguyen",
    getName: function () {
        return this.name; // this sẽ tương ứng với đối tượng user
    }
};

console.log(user.getName()); // Tuan Nguyen

var getUserName = user.getName; // Tuy nhiên ở đây gán cho biến global

console.log(getUserName());

var getUserName1 = user.getName.bind(user); // Tuy nhiên ở đây gán cho biến global

console.log(getUserName1());