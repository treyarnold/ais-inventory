$(document).ready(() => {
  const options = $(".liquorOptions");
  $.each(options, (idx, element) => {
    $.get(`/api/drinks/${element.id}`, (dbdrink) => {
      dbdrink.forEach(ingredient => {
        const button = `<a class="dropdown-item liquorChoice" href="#">${ingredient.name}</a>`;
        $(`#${element.id}`).append(button);
      });
    });
  });
});