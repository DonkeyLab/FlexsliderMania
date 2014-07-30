jQuery(window).load(function() {
  jQuery('.c-lst-container').flexslider({
    //selector: ".c-lst > li",
    animation: "slide",
    animationLoop: false,
    slideshow: false,
    controlNav: true,
    directionNav: true,
    start: function (slider) {        
        slider.fsm_lazyload();
    },
    before: function (slider) {
        slider.fsm_lazyload();
    }
  });
});


(function( $ ) {
 
    $.fn.fsm_lazyload = function () {

        var loadingClass = "loading-square-circle-black";
        var sliderImages = this.find(".slides > li:not(.clone) img");
        $(sliderImages).each(function (index, item) {
            if ($(item).attr("src") == "media/images/placeholder.png" || $(item).attr("src") == "") {
                var container = $("<div class=\"" + loadingClass + "\"></div>");
                var firstImageHeight = sliderImages.first().height();
                container.css("height", firstImageHeight.toString() + "px");
                $(item).wrap(container);
                $(item).on("load", function () {
                    if ($(item).parent().hasClass(loadingClass)) {
                        $(item).unwrap();
                    }
                }).attr("src", $(item).attr("data-lazy"));
            }
        });            
    }
    

}(jQuery));