$(document).ready(function(){

    function swiperSliderAreas(){
        const swiper = new Swiper(".sliderAreas", {
            pagination: {
              el: ".sliderAreas .swiper-pagination",
            },
            navigation: {
                nextEl: ".cont_slider_areas .swiper-button-next",
                prevEl: ".cont_slider_areas .swiper-button-prev",
              },
        });
    }
    
    function swiperSliderLogos(){
        const swiper = new Swiper(".sliderLogos", {
            navigation: {
              nextEl: ".cont_slider_logos .swiper-button-next",
              prevEl: ".cont_slider_logos .swiper-button-prev",
            },
        });
    }
    
    
    swiperSliderAreas();
    swiperSliderLogos();


});
