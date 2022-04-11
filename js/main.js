$(window).scroll(function() {    
  const scroll = $(window).scrollTop();    
  if (scroll >= 53) {
      $(".h_workflow").addClass("fixed");
      $(".spacer").addClass("spacer_mod");
  }else{
      $(".h_workflow").removeClass("fixed");
      $(".spacer").removeClass("spacer_mod");
  }
});

// *********

$(document).ready(function(){


    setTimeout(function(){
      $(".logo_h_workflow").css("opacity",1);
    },900)

/*     MENU MOBILE WORKFLOW */

    const menuDesplegableWorkflow = document.querySelector('.header_k_workflow .nav_workflow ul');
    const ArrowRotate = document.querySelector('.btn_nav_workflow span');

    $('.btn_nav_workflow').click(function(){
      $(ArrowRotate).toggleClass('active_a_workf')
      $(menuDesplegableWorkflow).slideToggle();
    });

    const body = document.querySelector('body');

    $('.btn_navbar_menu').click(function(){
        $('.nav_kawak').toggleClass('active_navbar_mobile');
        $('body').toggleClass('scrollLock');
        $('.btn_navbar_menu a span').toggleClass('closeIcon')
    });

    /* PREGUNTAS FRECUENTES */

    
    $('.pregunta').click(function(){
      
      if ($(this).hasClass('preg_active')) {
        return false
      }else{
        $('.pregunta').removeClass('preg_active')
        $('.respuesta').slideUp('preg_active')
  
        $(this).toggleClass('preg_active')
        $(this).next().slideToggle();
      }


    });

    /* ************* */

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
            spaceBetween: 10,
            slidesPerView: 1,
            pagination: {
                el: ".sliderLogos .swiper-pagination",
                clickable: true,
              },
            navigation: {
                nextEl: ".cont_slider_logos .swiper-button-next",
                prevEl: ".cont_slider_logos .swiper-button-prev",
            },
            breakpoints: {
              // when window width is >= 320px
              390: {
                slidesPerView: 2,
                spaceBetween: 10
              },
              // when window width is >= 480px
              440: {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
              // when window width is >= 480px
              600: {
                slidesPerView: 3,
                spaceBetween: 20
              },
              // when window width is >= 640px
              800: {
                slidesPerView: 4,
                spaceBetween: 20
              },
              // when window width is >= 640px
              1000: {
                slidesPerView: 5,
                spaceBetween: 20
              }
            }
        });
    }
    
    
    swiperSliderAreas();
    swiperSliderLogos();


});
