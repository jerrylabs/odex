$(document).ready(function(){

  var oldSection, newSection, positions = []  ;

  // Mobile menu
  $('.menu-button').click(function(){
    $(this).toggleClass('opened');
    $('.menu').slideToggle();
  })

  $(window).scroll(function(){

    // Switch active menu item accordingly
    ["home", "o-nas", "produkty", "kontakt"].forEach(function(section){
      positions[section] = $("#" + section).offset().top;
      if ($(window).scrollTop() >= positions[section] - 200) {
        newSection = section;
      }
    });
    // If section changed, switch active menu item
    if (oldSection != newSection) {
      $(".menu a.active").toggleClass("active");
      $(".menu a[href='#" + newSection + "']").toggleClass("active");

      //also switch side buttons if needed
      if (["o-nas", "produkty", "kontakt"].includes(oldSection)) {
        $(".side-panel__bullet[href='#" + oldSection + "']").removeClass("active");
      }
      if (["o-nas", "produkty", "kontakt"].includes(newSection)) {
        $(".side-panel__bullet[href='#" + newSection + "']").addClass("active");
      }
      oldSection = newSection;
    }

    // Parallax (enlarging) backgrounds
    $(".parallax1").css({
      "background-size": (100 + $(window).scrollTop()/25  ) + "%",
      "background-position": "center " + ($(window).scrollTop()/(-1.5)) + "px"
    });
    $(".parallax2").css({
      "background-size": (100 + ($(window).scrollTop() - $("#produkty").offset().top - 400)/40  ) + "%",
      "background-position": "center " + (($(window).scrollTop() -  $("#produkty").offset().top - 600)/(-1.5)) + "px"
    });

  });

});
