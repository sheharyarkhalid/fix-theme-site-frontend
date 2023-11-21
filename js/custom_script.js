  $(document).ready(function () {
    
    $(".res_toggle_button").click(function () {
      $(".header_links").toggleClass("active");
    });
    
    
      $('.Banner_slider').slick({
          slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        fade: true,
        draggable: true,
        cssEase: 'ease-in-out',
        touchThreshold: 100,
        arrows: false,
        nextArrow: '<a class="banner_next_arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></a>',
      prevArrow: '<a class="banner_pre_arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></a>',
        });
  
        $(".member_slider").slick({
          slidesToShow:3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          dots: false,
         arrows: true,
  appendArrows: $('.member_slider_arrow_box'),
  nextArrow: '<a class="member_pre_arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></a>',
  prevArrow: '<a class="member_pre_arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></a>',
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow:3,
                slidesToScroll: 1,
                 autoplay: true,
                dots: false,
                arrows: true,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                 autoplay: true,
                     dots: false,
                  arrows: true,
              },
            },
            {
              breakpoint: 540,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                  autoplay: true,
                    dots: false,
                arrows: true,
              },
            },
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                 autoplay: true,
                     dots: false,
                 arrows: true,
              },
            },
          ],
        });


        $(".product_brand_slider").slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          dots: false,
          arrows: true,
          appendArrows: $('.brand_slider_arrow_box'),
          nextArrow: '<a class="slider_arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></a>',
          prevArrow: '<a class="slider_arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></a>',
          responsive: [
  
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 4000,
                dots: false,
                arrows: true,
              },
            },
            {
              breakpoint: 540,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 4000,
                dots: false,
                arrows: true,
              },
            },
  
          ],
        });

        $(".blog_slider").slick({
          slidesToShow:3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          dots: false,
         arrows: true,
  appendArrows: $('.blog_slider_arrow_box'),
  nextArrow: '<a class="blog_pre_arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></a>',
  prevArrow: '<a class="blog_pre_arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></a>',
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow:3,
                slidesToScroll: 1,
                 autoplay: true,
                dots: false,
                arrows: true,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                 autoplay: true,
                     dots: false,
                  arrows: true,
              },
            },
            {
              breakpoint: 540,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                  autoplay: true,
                    dots: false,
                arrows: true,
              },
            },
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                 autoplay: true,
                     dots: false,
                 arrows: true,
              },
            },
          ],
        });

        $(".reviews_slider").slick({
          slidesToShow:2,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 4000,
          dots: false,
         arrows: true,
  appendArrows: $('.reviews_slider_arrow_box'),
  nextArrow: '<a class="reviews_pre_arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></a>',
  prevArrow: '<a class="reviews_pre_arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></a>',
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow:3,
                slidesToScroll: 1,
                 autoplay: false,
                dots: false,
                arrows: true,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                 autoplay: false,
                     dots: false,
                  arrows: true,
              },
            },
            {
              breakpoint: 540,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                  autoplay: false,
                    dots: false,
                arrows: true,
              },
            },
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                 autoplay: false,
                     dots: false,
                 arrows: true,
              },
            },
          ],
        });


  var $review_slider = $('.reviews_slider');
  var $progressBar = $('.slider_progress');
  var $progressBarLabel = $( '.slider__label' );
  
  $review_slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
    var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
    
    $progressBar
      .css('background-size', calc + '% 100%')
      .attr('aria-valuenow', calc );
  });
  
  $review_slider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 400
  });  



    });



 // footer responsive toggle script

  var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }