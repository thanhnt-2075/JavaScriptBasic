// Ví dụ 1:
// function findRandomImgPromise(tag) {
//     const apiKey = 'a89c66e48519481ab448a3f8356e635c';
//     const endpoint = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${tag}`;
//     return fetch(endpoint)
//       .then(rs => rs.json())
//       .then(data => data.data.fixed_width_small_url);
// }
  
// $('#request').click(async () => {
//     const imgUrl = await findRandomImgPromise('cat');
//     //hàm findRandomImgPromise là hàm bất đồng bộ, trả về một Promise. Với từ khoá await, ta có thể coi hàm này là đồng bộ,
//     $('#cat').attr('src', imgUrl);
// });

    // Chú ý: async/await giúp chúng ta viết code trông có vẻ đồng bộ (synchonous), nhưng thật ra lại chạy bất đồng bộ (asynchonous). 

    // -, Code dễ đọc hơn rất rất nhiều, không cần phải then rồi catch gì cả, chỉ viết như code chạy tuần tự, sau đó dùng try/catch thông thường để bắt lỗi.
    // -, Viết vòng lặp qua từng phần tử trở nên vô cùng đơn giản, chỉ việc await trong mỗi vòng lặp.
    // -, Debug dễ hơn nhiều, vì mỗi lần dùng await được tính là một dòng code, do đó ta có thể đặt debugger để debug từng dòng như thường.
    // -, Khi có lỗi, exception sẽ chỉ ra lỗi ở dòng số mấy chứ không chung chung là un-resolved promise.
    // -, Với promise hoặc callback, việc kết hợp if/else hoặc retry với code asynchnous là một cực hình vì ta phải viết code lòng vòng, rắc rối.
    // Với async/await, việc này vô cùng dễ dàng.

// Ví dụ 2:

// window.CP.PenTimer.MAX_TIME_IN_LOOP_WO_EXIT = 60000;
// Dừng các vòng lặp vô hạn, hoặc quá lâu

function findRandomImgPromise(tag) {
  const apiKey = 'a89c66e48519481ab448a3f8356e635c';
  const endpoint = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${tag}`;
  return fetch(endpoint)
    .then(rs => rs.json())
    .then(data => data.data.fixed_width_small_url);
}

function setTimeoutPromise(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

$('#request').click(async () => {
  // Asynchonous + Sequential
  console.log('Begin run');
  const firstLoop = randomImg('dog');
  console.log('Dog run');
  const secondLoop = randomImg('cat');
  console.log('Cat run');
  
  await Promise.all([firstLoop, secondLoop]);
//   alert('All loop finished.');
});

async function randomImg(tag) {
  for(let i = 0; i < 5; i++) {
    const imgUrl = await findRandomImgPromise(tag);
    $('#' + tag).attr('src', imgUrl);
    await setTimeoutPromise(2*1000);
  }
}

// Chú ý: hạn chế của async:
// -, Khi ta await một promise bị reject, JavaScript sẽ throw một Exception. 
//Do đó, nếu dùng async await mà quên try catch thì lâu lâu chúng ta sẽ bị… nuốt lỗi hoặc code ngừng chạy.
// -, async và await bắt buộc phải đi kèm với nhau! await chỉ dùng được trong hàm async, nếu không sẽ bị syntax error. 
//Do đó, async/await sẽ lan dần ra toàn bộ các hàm trong code của bạn.

// Mở rộng: Promise.all để gom nhiều promise thành 1 promise rồi await cái promise đó để có thể chạy song song trong async/await


// Khái niệm:
// -, Async - khai báo một hàm bất đồng bộ (async function someName(){...}).

    // +, Tự động biến đổi một hàm thông thường thành một Promise.
    // +, Khi gọi tới hàm async nó sẽ xử lý mọi thứ và được trả về kết quả trong hàm của nó.
    // +, Async cho phép sử dụng Await.

// -, Await - tạm dừng việc thực hiện các hàm async. (Var result = await someAsyncCall ().

    // +, Khi được đặt trước một Promise, nó sẽ đợi cho đến khi Promise kết thúc và trả về kết quả.
    // +, Await chỉ làm việc với Promises, nó không hoạt động với callbacks.
    // +, Await chỉ có thể được sử dụng bên trong các function async.