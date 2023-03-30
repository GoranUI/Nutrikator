function parallaxIt(target, movement, reset) {
  if (reset) {
    TweenMax.to(target, 0.5, { x: 0, y: 0 });
  } else {
    TweenMax.to(target, 0.5, {
      x: (mouse.x - rect.width / 2) / rect.width * movement,
      y: (mouse.y - rect.height / 2) / rect.height * movement,
    });
  }
}
 
let rect = {};
let mouse = { x: 0, y: 0, moved: false };

$(window).on('resize scroll', () => {
  rect = $('#image-container')[0].getBoundingClientRect();
});
 
$(() => {
  rect = $('#image-container')[0].getBoundingClientRect();

  $('#image-container').mousemove(e => {
    mouse.moved = true;
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  $('#image-container').mouseleave(() => {
    parallaxIt(".header-product-images", -50, true);
  });

  // Ticker event will be called on every frame
  TweenLite.ticker.addEventListener('tick', () => {
    if (mouse.moved) {
      parallaxIt(".header-product-images", -50, false);
    }
    mouse.moved = false;
  });

    // Smooth scroll to section when a navigation link is clicked
    $('nav a').on('click', function(e) {
      e.preventDefault();
      const section = $($(this).attr('href'));
      $('html, body').animate({
        scrollTop: section.offset().top
      }, 1000);
    });
});

