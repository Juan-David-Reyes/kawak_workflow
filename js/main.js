$(document).ready(function(){

    const body = document.querySelector('body');

    $('.btn_navbar_menu').click(function(){
        $('.nav_kawak').toggleClass('active_navbar_mobile');
        $('body').toggleClass('scrollLock');
    });

    function swiperSliderAreas(){
        const swiper = new Swiper(".sliderAreas", {
            spaceBetween: 20,
            pagination: {
              el: ".sliderAreas .swiper-pagination",
            },
            navigation: {
                nextEl: ".cont_slider_areas .swiper-button-next",
                prevEl: ".cont_slider_areas .swiper-button-prev",
            },
            slidesPerView: 5,
        });
    }
    
    function swiperSliderLogos(){
        const swiper = new Swiper(".sliderLogos", {
            spaceBetween: 30,
            slidesPerView: 6,
            pagination: {
                el: ".sliderLogos .swiper-pagination",
                clickable: true,
              },
            navigation: {
                nextEl: ".cont_slider_logos .swiper-button-next",
                prevEl: ".cont_slider_logos .swiper-button-prev",
            },
            grid: {
                rows: 2,
            },
        });
    }
    
    
    swiperSliderAreas();
    swiperSliderLogos();


});
