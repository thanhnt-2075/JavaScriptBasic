//Có thẻ dịch đơn giản Promise có nghĩa là lời hứa: Tương tự như trong thực tế, có người hứa rồi làm, có người hứa rồi … thất hứa.

//Một Promise có 3 trạng thái:
// pending: Hiện lời hứa chỉ là lời hứa suông, còn đang chờ người khác thực hiện
// fulfilled: Lời hứa đã được thực hiện
// reject: Bạn đã bị thất hứa, hay còn gọi là bị “xù”

// Vd1: Mang tính chất hình tượng :)
// function testPromise() {
//     return Promise((fulfilled, reject) => {
//         //Sau một thời gian nếu succes thì bạn sẽ nhận được một chiếc BMV
//         if(succes) {
//             fulfilled("Xe BMV");
//             //Lúc này trạng thái của lời hứa(promise) là fulfilled
//         } else {
//             reject("Xe đạp");
//             //Lúc này trạng thái của lời hứa(promise) là reject
//         }
//     });
// }

// // Lời hứa bây giờ đang là pendding
// // Nếu được thực hiện, bạn có "Xe BMW"
// // Nếu bị reject, bạn có "Xe đạp"

// var promise = testPromise();
// promise
//     .then((xe_bmv) => {
//         console.log('Có xe bmv zui quá');
//     })
//     .catch((xe_dap) => {
//         console.log('Sax dc co cai xe dap');
//     })
////Khi lời hứa được thực hiện, promise sẽ gọi callback trong hàm then. Ngược lại, khi bị thất hứa, promise sẽ gọi callback trong hàm catch.


// (fulfilled, reject) => { ... } đây là một callback mà. Ủa nó cũng là một callback thôi mà
// Vậy dụng promise so với callback có lợi ích gì:
// 1. Promise hỗ trợ “chaining”
// 2. Promise giúp bắt lỗi dễ dàng hơn
// 3. Xử lý bất đồng bộ

// Cùng đi tìm hiểu về từng lợi thế của promise ở trên nào:
// 1. Promise hỗ trợ "chaining"
// Giá trị trả về của hàm .then là 1 promise khác. Do vậy ta có thể dùng promise gọi liên tiếp các hàm bất đồng bộ. 
//VD2: 
// // Dùng callback hell
// xin_mẹ_mua_xe(function(xe) {
//     chở_gái_đi_chơi(xe, function(gái) {
//         chở_gái_vào_hotel(hotel, function(z) { 
//             // Làm gì đó, ai biết
//         });
//     });
// });

// // Dùng promise, code gọn nhẹ dễ đọc
// xin_mẹ_mua_xe
//   .then(chở_gái_đi_chơi)
//   .then(chở_gái_vào_hotel)
//   .then(function() { /*Làm gì đó, ai biết*/ });

// 2. Bắt lỗi với promise
// Với ví dụ trên chỉ cẩn một trong 3 hàm xin_mẹ_mua_xe, chở_gái_đi_chơi, chở_gái_vào_hotel bị lỗi, promise sẽ chuyển vào trạng thái reject.
// Lúc này callback trong hàm .catch sẽ được gọi, việc bắt lỗi chở lên dễ dàng hơn rất nhiều

// VD: 3
// // Khi một function bị lỗi, promise bị reject (thất hứa)
// function chở_gái_vào_hotel() {
//     return Promise((response, reject) => {
//       reject("Xin lỗi hôm nay em đèn đỏ");
//     });
//   }
  
  
//   xin_mẹ_mua_xe
//     .then(chở_gái_đi_chơi)
//     .then(chở_gái_vào_hotel)
//     .then(function() { /*Làm gì đó, ai biết*/ })
//     .catch(function(err) {
//       console.log(err); //"Xin lỗi hôm nay em đèn đỏ"
//       console.log("xui vl");
//     });

// 3. Xử lý bất đồng bộ
// Giả sử bạn muốn 3 hàm AJAX khác nhau. Bạn cần kết quả trả về của 3 hàm này trước khi tiếp tục chạy.
// Với callback, việc này sẽ khá khó thực hiện. Tuy nhiên, promise hỗ trợ hàm Promise.all, cho phép gộp kết quả của nhiều promise lại với nhau.

// VD: 4
// // Ba hàm này phải được thực hiện "cùng lúc" chứ không phải "lần lượt"
// var sờ_trên = new Promise((resolve, reject) => {
//     resolve("Phê trên");
// });
// var sờ_dưới = new Promise((resolve, reject) => {
//     resolve("Phê dưới");
// });
// var sờ_tùm_lum = new Promise((resolve, reject) => {
//     resolve("Phê tùm lum chỗ");
// });

// // Dùng promise, code gọn nhẹ dễ đọc

// // Truyền 1 array chứa toàn bộ promise vào hàm Promise.all
// // Hàm này trả ra 1 promise, tổng hợp kết quả của các promise đưa vào
// Promise.all([sờ_trên, sờ_dưới, sờ_tùm_lum])
//   .then(function(result) {
//     console.log(result); // ["Phê trên", "Phê dưới", "Phê tùm lum chỗ"]
//     // Phê xong làm gì ai biết
//   }) 

// Một số kiến thức mở rộng:
// - Hàm executor sẽ được gọi ngay khi Promise được gọi tới, tức là nó còn được chạy trước cả hàm khởi tạo trả ra kết quả của Promise.
// - Một Promise có thể như một proxy đại diện cho một giá trị mà ta không cần phải biết ngay khi khởi tạo. 
// Bằng các sử dụng Promise ta có thể kết hợp với các hàm xử lý khác để sử dụng kết quả sau khi thực thi xử lý bất đồng bộ mà nó đang đại diện. 
// Vì vậy mà ta có thể lập trình bất đồng bộ gần giống với kiểu lập trình đồng bộ - 
// tức là đợi xử lý bất đồng bộ xong mới thực thi các thao tác mà cần sử dụng tới kết quả của xử lý đó.
// Để có thể làm được việc đó thay vì trả ra kết quả của việc xử lý đồng bộ, Promise  sẽ trả ra một promise khác. 
// Bằng promise mới này ta lại có thể lặp lại việc sử dụng kết quả của thao tác xử lý lúc trước để làm đầu vào cho các thao tác xử lý lúc sau.

var promiseCount = 0;

function testPromise() {
    var thisPromiseCount = ++promiseCount;

    var log = document.getElementById('log');
    log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') Started (<small>Sync code started</small>)<br/>');

    // Tạo một Promise: promise sẽ tính số lượng của promise này, bắt đầu từ 1 (sau khi chờ 3 giây)
    var p1 = new Promise(
        // resolver được gọi với khả năng resolve hoặc reject promise
        function(resolve, reject) {
            log.insertAdjacentHTML('beforeend', thisPromiseCount +
                ') Promise started (<small>Async code started</small>)<br/>');
            // VD: tạo ra một asynchronism
            window.setTimeout(
                function() {
                    // fulfill promise !
                    resolve(thisPromiseCount);
                }, Math.random() * 2000 + 1000);
        }
    );

    // Xác định phải làm gì khi promise được giải quyết/thực hiện bằng lệnh gọi then() và phương thức Catch() xác định việc cần làm nếu promise bị từ chối.
    p1.then(
        // Log the fulfillment value
        function(val) {
            log.insertAdjacentHTML('beforeend', val +
                ') Promise fulfilled (<small>Async code terminated</small>)<br/>');
        })
    .catch(
        // Log the rejection reason
        function(reason) {
            console.log('Handle rejected promise ('+reason+') here.');
        });

    log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') Promise made (<small>Sync code terminated</small>)<br/>');
}

