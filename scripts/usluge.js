$(document).ready(function() {
    var count = 1;
    
    var images = [  "assets/images/image1.png",
                    "assets/images/image2.png",
                    "assets/images/image3.png",
                    "assets/images/image4.png",
                    "assets/images/image5.png",
                    "assets/images/image6.png"];
    
    var titles = ["01", "02", "03", "04", "05", "06"];
    
    var paragraphs = [
      "Izračunavanje energetske vrednosti proizvoda i njegovih nutritivnih sastojaka prema standardima deklarisanja - proteini, ukupne masti, zasićene masti, ugljeni hidrati, šećeri",
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      "Vestibulum vitae imperdiet nisl. In scelerisque, dolor sit amet blandit rutrum, velit enim interdum nibh, vel auctor nibh nibh eu tortor.",
      "Donec aliquam ultricies risus, eu consequat turpis feugiat id. Morbi fringilla justo eu leo tristique, ac malesuada dolor consectetur.",
      "Sed porttitor augue a elit posuere, eu efficitur libero pellentesque. Fusce eu turpis vel nisi euismod hendrerit.",
      "Nulla facilisi. Sed hendrerit sapien vel arcu tincidunt bibendum. Nam porttitor arcu in elit volutpat, eu pulvinar libero commodo."
    ];
    
    $(".left-button").click(function() {
        if (count > 1) {
            count--;
          } else {
            count = 6;
          }
          
          $(".image-container img").attr("src", images[count-1]);
          $(".text-container h2").text(titles[count-1]);
          $(".text-container p").text(paragraphs[count-1]);
          $(".text-container .counter").text(count + " of 6");
        });
        
        $(".right-button").click(function() {
          if (count < 6) {
            count++;
          } else {
            count = 1;
          }
          
          $(".image-container img").attr("src", images[count-1]);
          $(".text-container h2").text(titles[count-1]);
          $(".text-container p").text(paragraphs[count-1]);
          $(".text-container .counter").text(count + " of 6");
        });
      });  