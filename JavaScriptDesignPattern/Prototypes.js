//JavaScript Object luôn có sẵn ít nhất một thuộc tính bên trong nó, là prototype. Và prototype cũng chính là một object. 
//Khi một object gọi đến một thuộc tính mà nó không có thì nó sẽ tìm trong prototype.
var empty = {};

console.log(empty.toString);

console.log(empty.toString());

//Rõ ràng, mình chỉ khai báo empty là một object mà không định nghĩa thêm thuộc tính nào. 
//Tuy nhiên, ví dụ trên chỉ ra rằng thuộc tính toString tồn tại trong object empty. 
//Đó là vì: toString là một thuộc tính của prototype mà một object thì luôn chứa thuộc tính prototype.