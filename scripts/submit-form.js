$(document).ready(function() {
  // Add event listener to form submit button
  $(".emailbutton").click(function(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    submitForm(); // Calls the submitForm function to submit the form
  });

  // Define the submitForm function to submit the form and show the success message
  function submitForm() {
    $.ajax({
      url: "https://nutrikator.us8.list-manage.com/subscribe/post-json?u=df3336ed42ff630c06e4e65da&amp;id=8f4f41ec6a&amp;f_id=00c800e0f0&c=?",
      type: "GET",
      dataType: "json",
      data: $("#mc-embedded-subscribe-form").serialize(),
      success: function(response) {
        // Check if the form was submitted successfully
        if (response.result === "success") {
          showSuccess(); // Call the showSuccess function to display the success message
        } else {
          // Handle form submission errors
          console.log("Form submission failed: " + response.msg);
        }
      },
      error: function(jqXHR, textStatus, errorThrown) {
        // Handle AJAX errors
        console.log("AJAX error: " + textStatus + " " + errorThrown);
      }
    });
  }

  // Define the showSuccess function to display the success message
  function showSuccess() {
    $("#mc-embedded-subscribe-form").hide(); // Hide the form container
    $("#success-message").show(); // Shows the success div
  }
});

$(document).ready(function() {
  // Get the modal and its container
  var modal = $('#myModal');
  var modalContainer = $('.modal-content');

  // Close the modal when the user clicks on the dimmed background
  modalContainer.on('click', function(event) {
    if (event.target === this) {
      modal.hide();
    }
  });
});