function parallaxIt(target, movement) {
  TweenMax.to(target, 0.5, {
    x: (mouse.x - rect.width / 2) / rect.width * movement,
    y: (mouse.y - rect.height / 2) / rect.height * movement,
  });
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
   
  // Ticker event will be called on every frame
  TweenLite.ticker.addEventListener('tick', () => {
    if (mouse.moved) {    
      parallaxIt(".header-product-images", -100);
      parallaxIt(".header-image-wrapper", -30);
    }
    mouse.moved = false;
  });
});