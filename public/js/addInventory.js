$(document).ready(function() {
    // Getting jQuery references to the post body, title, form, and author select
    var productForm = $("#newProduct");
    var nameInput = $("#name");
    var type = $("#liquorType");
    var priceInput = $("#price");
    var quantity = $("#quantity");
    var upc = $("#upc");

    // Adding an event listener for when the form is submitted
    $(productForm).on("submit", handleFormSubmit)
  
    // A function for handling what happens when the form to create a new post is submitted
    function handleFormSubmit(event) {
      event.preventDefault();
      console.log("submitted");
      // Wont submit the post if we are missing a body, title, or author
      if (!nameInput.val().trim() || !priceInput.val().trim()) {
        return;
      }
      // Constructing a newProduct object to hand to the database
      var newProduct = {
        name: nameInput
          .val()
          .trim(),
        drink_type: type.val(),
        price_bottle: priceInput.val(),
        quantity_bottles: quantity.val(),
        UPC: upc.val(),
      };
        submitProduct(newProduct);
    }
  
    // Submits a new post and brings user to blog page upon completion
    function submitProduct(Product) {
      $.post("/api/inventory", Product, function() {
          console.log("submitted");
        window.location.href = "/inventory";
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
  