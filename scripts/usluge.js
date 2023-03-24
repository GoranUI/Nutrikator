
      $(document).ready(function() {
        var count = 1;
        var images = [
          "assets/images/image1.png",
          "assets/images/image2.png",
          "assets/images/image3.png",
          "assets/images/image4.png",
          "assets/images/image5.png",
          "assets/images/image6.png"
        ];
        var titles = [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06"
        ];
        var paragraphs = [
          "Izračunavanje energetske vrednosti proizvoda i njegovih nutritivnih sastojaka prema standardima deklarisanja -",
          "Nulla auctor enim eu est pharetra, id eleifend felis maximus. Aenean vitae urna ut lectus consequat commodo. ",
          "Aliquam interdum ipsum purus, sed dapibus sapien mollis vel. Suspendisse porttitor posuere purus, in maximus nunc consectetur eget.",
          "Proin bibendum risus et velit pharetra porttitor. ",
          "Fusce placerat quis velit vel pretium. Curabitur viverra molestie felis, ut varius sapien venenatis eget. In ullamcorper ante eu ultrices euismod. Suspendisse fermentum convallis nulla, sed."
        ];

        var paragraphs2 = [
          "proteini, ukupne masti, zasićene masti, ugljeni hidrati, šećeri</span>",          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at mi vel elit vehicula pulvinar. Vestibulum lacinia magna et ante hendrerit, nec vestibulum nibh commodo. Etiam eleifend justo at interdum semper.",
          "Mauris rutrum lorem id dolor sollicitudin, ac commodo ex convallis.",
          "Proin pellentesque urna eget orci gravida, eu cursus velit laoreet. Aliquam quis quam nisi. Suspendisse eu aliquet nibh.",
          "Nam eget eleifend elit, nec lacinia nisl. Donec pulvinar, enim quis malesuada maximus, velit velit vehicula justo, non aliquet mi magna non est.",
          "Integer pharetra vulputate mauris vel hendrerit."
        ];
   
  $(".left-button").prop("disabled", true); // disable left button initially
  
  $(".left-button").click(function() {
    if (count > 1) {
      count--;
      updateContent();
    }
  });
  
  $(".right-button").click(function() {
    if (count < 6) {
      count++;
      updateContent();
    }
  });
  
  function updateContent() {
    // update image, title, and counter
    $(".section-one img-right").attr("src", images[count-1]);
    $(".section-one .text-container h2").text(titles[count-1]);
    $(".section-one .text-container .p-1st").text(paragraphs[count-1]);
    $(".section-one .text-container .p-2nd").text(paragraphs2[count-1]);
    $(".section-one .button-container .counter").text(count + " of 6");
    
    // enable/disable buttons based on count
    if (count === 1) {
      $(".left-button").prop("disabled", true).addClass("inactive");
    } else {
      $(".left-button").prop("disabled", false).removeClass("inactive");
    }
    
    if (count === 6) {
      $(".right-button").prop("disabled", true).addClass("inactive");
    } else {
      $(".right-button").prop("disabled", false).removeClass("inactive");
    }
  }
});