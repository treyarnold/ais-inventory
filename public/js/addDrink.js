$(document).ready(function() {
    // Getting jQuery references to the post body, title, form, and author select
    var drinkForm = $("#newDrink");
    var nameInput = $("#name");
    var type = $("#liquorType");
    var priceInput = $("#price");
    var pic = $("#pic");
    var upc = $("#upc");

    $(drinkForm).on("submit", handleFormSubmit)
  
    // A function for handling what happens when the form to create a new post is submitted
    function handleFormSubmit(event) {
      event.preventDefault();
      console.log("submitted");
      // Wont submit the post if we are missing the below values
      if (!nameInput.val().trim() || !priceInput.val().trim()) {
        return;
      }
      // Constructing a newDrink object to hand to the database
      var newDrink = {
        drink_name: nameInput
          .val()
          .trim(),
        price: priceInput.val(),
        num_sold: 0,
        pic_url: pic.val(),

      };
        submitDrink(newDrink);
    };
  
    // Submits a new post and brings user to blog page upon completion
    function submitDrink(drink) {
      $.post("/api/drinks", drink, function() {
        window.location.href = "/drinks";
      });
    }
    
    // Update a given post, bring user to the blog page when done
    function updatePost(post) {
      $.ajax({
        method: "PUT",
        url: "/api/posts",
        data: post
      })
        .then(function() {
          window.location.href = "/blog";
        });
    }
  });
  