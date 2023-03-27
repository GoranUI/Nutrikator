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



  
