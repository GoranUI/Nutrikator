// Get the modal
var modal = $("#myModal");

// Get the button that opens the modal
var btn = $("#modalLink");

// Get the <span> element that closes the modal
var span = $(".close").eq(0);

// When the user clicks the button, open the modal 
btn.click(function() {
  modal.css("display", "block");
});

// When the user clicks on <span> (x), close the modal
span.click(function() {
  modal.css("display", "none");
});

// When the user clicks anywhere outside of the modal, close it
$(window).click(function(event) {
  if (event.target == modal[0]) {
    modal.css("display", "none");
  }
});