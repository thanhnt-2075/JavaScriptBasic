var obj = {
    method: function() {
        console.log(this);
    }
};

var anotherObj = {
    name: "new Obj"
};

anotherObj.method = obj.method;//this sẽ tương ứng với đối tượng anotherObj

document.getElementById('demo').innerHTML = anotherObj.method();