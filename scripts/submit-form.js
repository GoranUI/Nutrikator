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