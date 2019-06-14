$("#less").on("click", (event) => {
  event.preventDefault();
  let quantity = parseFloat($("#quantity").val().trim());
  if (quantity <= 0) return
  quantity = quantity - .25;
  $("#quantity").val(quantity);
})

$("#more").on("click", (event) => {
  event.preventDefault();
  let quantity = parseFloat($("#quantity").val().trim());
  quantity = quantity + .25;
  $("#quantity").val(quantity);
})