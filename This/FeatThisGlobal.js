//test this global
var firstName = "Quy", lastName = "Huy"
function showFullName()
{
    console.log(this.firstName + " " + this.lastName);
}
window.showFullName();

var person = {
    firstName : "Thanh",
    lastName : "Nguyen",
    id : 13,
    fullName : function(){
        return this.firstName + " " +this.lastName + " " + this.id;
    }
};
document.getElementById('demo').innerHTML = person.fullName();