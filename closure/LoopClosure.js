function showHelp(help) {
    document.getElementById('help').innerHTML = help;
}

function a(help) {
    return function (){
     showHelp(help);
    };
}

function setUpHelp() {
    var helpText = [
        {'id': 'email', 'help': 'Your e-mail address'},
        {'id': 'name', 'help': 'Your full name'},
        {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];


    for (var i = 0; i < helpText.length; i++) {
        var item = helpText[i];
        document.getElementById(item.id).onfocus = a(item.help);
        //.onfocus: Sử dụng để bắt sự kiện click    
    }
}
//Nếu viết trực tiếp closure vào như sau

//document.getElementById(item.id).onfocus = function() {
//showHelp(item.help);
//}

//Vấn đề 1: Nó sẽ chỉ in ra giá trị cuối cùng của mảng. Vấn đề ở đây là khi ta gọi bên trong 1 closure thì các giá trị này đều đang sử dụng chung một môi trường 
//khởi tạo, tức là chúng đều đang ghi lên một ô nhớ, nó sẽ xuất hiện tình trạng ghi đè vì vậy lên nó chỉ có thể in ra giá trị cuối cùng.
//Cách giải quyết vấn đề  là làm sao để nó không ghi đè lên nhau, tức là với mỗi lần gọi hàm thì nó sẽ tạo ra một ô nhớ mới. Ta sẽ có các cách thức sau
//Thứ 1: 
//làm sao để với mỗi lần khởi tạo item nó chỉ tồn tại trong một vòng for. Tức là mỗi lần khởi tạo song .onforcus sẽ thực hiện ngay và vùng nhớ đó sẽ được reset lại.
//Ta sẽ chỉ cần khái báo là "let item" thay cho "var item" và gọi trược tiếp "= function(){ showHelp(item.help) }" là được. 
//Thứ 2:
//Ta có thể sử dụng một một hàm để khởi tạo closure. Tức là mỗi lần gọi hàm này thì nó sẽ gọi đến closure và khởi tạo một vùng nhớ mới, và gọi đến hàm showHelp

//Vấn đề 2: Vậy tại sao cần sử dụng hàm closure mà không gọi trực tiếp hàm showHelp().
//Câu trả lời: Nếu gọi trực tiếp hàm showHelp() thì nó sẽ không trả ra gì cả, vì hàm này hiện tại đang không return về giá trị nào cả 
//và nếu bạn có return thì nó vẫn sẽ không nhận đâu vì đây không phải một giá trị
setUpHelp();
