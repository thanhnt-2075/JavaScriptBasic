var counter = (function() {
    var privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
    return {
      increment: function() {
        changeBy(1);
      },
      decrement: function() {
        changeBy(-1);
      },
      value: function() {
        return privateCounter;
      }
    };   
  })();
  //Lexical environment được tạo bên trong một hàm closure, sẽ được tạo ra ngay khi được gán cho một khai báo. Lexical environment chứa 2 private: 
  //privateCounter và hàm changeBy. Cả 2 đối tượng private đều không thể được truy cập trực tiếp từ bên ngoài.
  //Thay vào đó, nó chỉ có thể tương tác thông qua 3 phương thức public: counter.increment, counter.decrement, and counter.value
  
  console.log(counter.value()); // logs 0
  counter.increment();
  counter.increment();
  console.log(counter.value()); // logs 2
  counter.decrement();
  console.log(counter.value()); // logs 1
  