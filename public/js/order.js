$(document).ready(function() {

console.log("submitted");

var order = $("#order").val();

$("#orderButton").on("submit", orderDetail)

$('#orderButton').click(function(){
    window.location.href= "/orders/" + order;
})

function orderDetail(event){
event.preventDefault();
console.log("submitted");
document.location.href = "/orders/" + order.val();
// window.location.href = "/orders/" + order.val();


};




});