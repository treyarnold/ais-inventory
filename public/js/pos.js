const orderStarter = `
  <div class="row mb-5">
    <div class="col">
      <button class="btn btn-danger" id="clear">Clear</button>
    </div>
    <div class="col">
      <button class="btn btn-success" id="submit">Submit</button>
    </div>
  </div>
  <div class="row px-3 mt-5" id="totalLine">
    <span><strong>Total</strong></span>
    <span class="ml-auto" id="total"><strong>0</strong>
  </div>`;

resetOrderField = () => {
  $("#currentOrder").append(orderStarter);
}

$(document).ready(() => {
  resetOrderField();
  const options = $(".liquorOptions");
  $.each(options, (idx, element) => {
    $.get(`/api/drinks/${element.id}`, (dbdrink) => {
      dbdrink.forEach(ingredient => {
        const button = `<a class="dropdown-item liquorChoice" drink=${element.id}>${ingredient.name}</a>`;
        $(`#${element.id}`).append(button);
      });
    });
  });
});

$(document).on('click', '.liquorChoice', function (event) {
  const price = $(event.target).parent().parent().attr("price");
  let total = parseFloat($("#total").text());
  total += parseFloat(price);
  $("#total").text(total);
  const order = `
    <div class="row px-3">
      <span>${$(event.target).parent().parent().attr("id")} - ${event.target.text}</span>
      <span class="ml-auto" price="${price}"><strong>${price}</strong>
    </div>`;
  $("#totalLine").before(order);
});

$(document).on("click", "#clear", () => {
  $("#currentOrder").empty();
  resetOrderField();
});

$(document).on("click", "#submit", () => {
  const total = parseFloat($("#total").text());
  if (total > 0) {
    $.post("/api/order", {total_price: total}).then(() => {
      $("#currentOrder").empty();
      resetOrderField();
    });
  }
});
