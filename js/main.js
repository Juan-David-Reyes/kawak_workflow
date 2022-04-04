$(document).ready(function(){

    const body = document.querySelector('body');

    $('.btn_navbar_menu').click(function(){
        $('.nav_kawak').toggleClass('active_navbar_mobile');
        $('body').toggleClass('scrollLock');
    });

    function swiperSliderAreas(){
        const swiper = new Swiper(".sliderAreas", {
            spaceBetween: 10,
            slidesPerView: 1,
            pagination: {
              el: ".sliderAreas .swiper-pagination",
            },
            navigation: {
                nextEl: ".cont_slider_areas .swiper-button-next",
                prevEl: ".cont_slider_areas .swiper-button-prev",
            },
            breakpoints: {
                // when window width is >= 320px
                390: {
                  slidesPerView: 2,
                  spaceBetween: 30
                },
                // when window width is >= 480px
                440: {
                    slidesPerView: 2,
                    spaceBetween: 20
                  },
                // when window width is >= 480px
                500: {
                  slidesPerView: 3,
                  spaceBetween: 20
                },
                // when window width is >= 640px
                800: {
                  slidesPerView: 5,
                  spaceBetween: 20
                }
              }
        });
    }
    
    function swiperSliderLogos(){
        const swiper = new Swiper(".sliderLogos", {
            spaceBetween: 30,
            slidesPerView: 5,
            pagination: {
                el: ".sliderLogos .swiper-pagination",
                clickable: true,
              },
            navigation: {
                nextEl: ".cont_slider_logos .swiper-button-next",
                prevEl: ".cont_slider_logos .swiper-button-prev",
            },
            // grid: {
            //     rows: 2,
            // },
        });
    }
    
    
    swiperSliderAreas();
    swiperSliderLogos();


});
