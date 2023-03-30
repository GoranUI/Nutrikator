$(document).ready(function() {
  // Get the modal and its container
  var modal = $('#myModal');
  var modalContainer = $('.modal-content');

  // Show success message on form submission
  $('#mc-embedded-subscribe-form').on('submit', function(event) {
    event.preventDefault();
    $.ajax({
      url: $(this).attr('action'),
      method: 'POST',
      data: $(this).serialize(),
      dataType: 'json',
      success: function(response) {
        showSuccessMessage();
      },
      error: function(error) {
        console.log('Error:', error);
      }
    });
  });

  // Close the modal when the user clicks on the dimmed background
  modalContainer.on('click', function(event) {
    if (event.target === this) {
      modal.hide();
    }
  });
});

function showSuccessMessage() {
  $('#success-message').css('display', 'block');
}

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
