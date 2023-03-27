
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
          "Definisanje naziva samog proizvoda i određivanje grupe kojoj pripada, u skladu sa propisanom zakonskom regulativom",
          "Određivanje spiska sastojaka proizvoda, u skladu sa zahtevima Pravilnika o deklarisanju",
          "Isticanje alergena, u skladu sa zahtevima Pravilnika o deklarisanju ",
          "Provera uslova za upotrebu aditiva, u skladu sa Pravilnikom o upotrebi aditiva u hrani",
          "Kreiranje nutritivnih izjava, u skladu sa sastavom proizvoda"
        ];

        var paragraphs2 = [
        "Kreiranje nutritivnih izjava, u skladu sa sastavom proizvoda",
        "",
        "",
        "",
        "",
        ""
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