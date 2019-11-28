var a = 1;
function two(a) {
  console.log(a); //undifined: vì khi gọi hàm tow() ta k chuyền đối số đầu vào
}
// local scope again
function three() {
  var a = 3;
  console.log(a); // '3'
}
two();
three();