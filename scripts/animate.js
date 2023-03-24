$(document).ready(function() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          $(entry.target).addClass('animate');
        } 
      });
    });
  
    $('.scroll-trigger').each(function() {
      observer.observe(this);
    });
  });



  
  // Set the amount of pixels to scroll per mouse wheel tick
const scrollAmount = 100;

// Add a wheel event listener to the document
$(document).on('wheel', function(event) {
  // Get the direction of the scroll (-1 for up, 1 for down)
  const direction = Math.sign(event.originalEvent.deltaY);

  // Get the section to scroll to
  const currentSection = $(':target').length ? $(':target') : $('section:first-child');
  const nextSection = direction === 1 ? currentSection.next('section') : currentSection.prev('section');

  // Scroll to the next section
  if (nextSection.length) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: nextSection.offset().top
    }, 'smooth');
  }
});