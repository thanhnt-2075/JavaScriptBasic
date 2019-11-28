//test this global
var firstName = "Quy", lastName = "Huy", a = 1;
function showFullName()
{
    var a = 10;
    console.log(this.firstName + " " + this.lastName + " " + this.a);
}
window.showFullName();
//This ở trong javascript sẽ khác hoàn toàn this của php nó
var person = {
    firstName : "Thanh",
    lastName : "Nguyen",
    id : 13,
    fullName : function(){
        return this.firstName + " " +this.lastName + " " + this.id + " " + this.a;
    }
};
document.getElementById('demo').innerHTML = person.fullName();