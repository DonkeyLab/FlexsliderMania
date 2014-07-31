jQuery(window).load(function() {
  jQuery('.c-lst-container').flexslider({
    animation: "slide",
    animationLoop: false,
    slideshow: false,
    controlNav: true,
    directionNav: true,
    smoothHeight: false,   
    start: function (slider) {        
        slider.fsm_lazyload();
    },
    before: function (slider) {
        slider.fsm_lazyload();
    }
  });
});
/*
jQuery(window).load(function() {
  jQuery('.c-lst-container').flexslider({
    //selector: ".c-lst > li",
    animation: "slide",
    animationLoop: false,
    slideshow: false,
    controlNav: true,
    directionNav: true
  });
});*/


(function( $ ) {
 
    $.fn.fsm_lazyload = function () {

        //var loadingClass = "loading-square-circle";
        var sliderImages = this.find(".slides > li:not(.clone) img");
        $(sliderImages).each(function (index, item) {
            if ($(item).attr("src") == "media/images/placeholder_1280.png" || $(item).attr("src") == "media/images/placeholder.png" || $(item).attr("src") == "") {
                //var container = $("<div class=\"" + loadingClass + "\"></div>");
                //var firstImageHeight = sliderImages.first().height();
                //container.css("height", firstImageHeight.toString() + "px");
                //$(item).wrap(container);
                $(item).on("load", function () {
                    /*if ($(item).parent().hasClass(loadingClass)) {
                        $(item).unwrap();
                    }*/
                }).attr("src", $(item).attr("data-lazy"));
                //console.log(firstImageHeight);
                return false;

            }
        });           
    }
    

}(jQuery));