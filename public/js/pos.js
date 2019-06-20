$(document).ready(() => {
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
  // console.log($(event.target).parent().parent().attr("id"));
  // console.log(event.target.attributes.drink.value);
  // console.log(event.target.text);
  // console.log(dbdrink);
  const order = `<p>${$(event.target).parent().parent().attr("id")} - ${event.target.text}</p>`;
  console.log(order);
  console.log($("#currentOrder"));
  $("#currentOrder").append(order);
});
