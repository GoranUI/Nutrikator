$(document).ready(function() {
  // Add event listener to form submit button
  $(".emailbutton").click(function(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    showSuccess(); // Calls the showSuccess function
  });

  // Define the showSuccess function to display the success div and submit the form
  function showSuccess() {
    $("#success-message").show(); // Shows the success div
    $("#mc-embedded-subscribe-form").submit(); // Submits the form
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
