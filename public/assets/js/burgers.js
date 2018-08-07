// Wait to attach handlers until DOM is fully loaded
$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevoured");

    var newDevouredState = {
      devoured: newDevoured
    };

    // PUT request
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed devoured to", newDevoured);
        // Reload page to get updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // PreventDefault on submit event
    event.preventDefault();

    var newBurger = {
      burger_name: $("#ca").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    // POST request
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload page to get updated list
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // DELETE request
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger", id);
        // Reload page to get updated list
        location.reload();
      }
    );
  });
});