jQuery(document).ready(function() {

    // menu active js start hare
    jQuery(".nav-area ul li a").click(function(){
        jQuery(".nav-area ul li a").removeClass("menu-active");
        jQuery(this).addClass("menu-active");
    });


 // counter js start hare

    var a = 0;
    $(window).scroll(function() {
        var oTop = $("#counter-box").offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $(".counter").each(function() {
                var $this = $(this),
                    countTo = $this.attr("data-number");
                $({
                    countNum: $this.text()
                }).animate({
                        countNum: countTo
                    },

                    {
                        duration: 1000,
                        easing: "swing",
                        step: function() {
                            //$this.text(Math.ceil(this.countNum));
                            $this.text(
                                Math.ceil(this.countNum).toLocaleString("en")
                            );
                        },
                        complete: function() {
                            $this.text(
                                Math.ceil(this.countNum).toLocaleString("en")
                            );
                            //alert('finished');
                        }
                    }
                );
            });
            a = 1;
        }
    });
    // counter js end hare

    // lineprogress bar js start hare

    jQuery(document).on('scroll', function(){
      if(jQuery('html,body').scrollTop() > jQuery('.skill-block').height()){
  /*MODIFICATION END*/
        jQuery(".line-progressbar").each(function() {
          jQuery(this).find(".progress-content").animate({
            width: jQuery(this).attr("data-percentage")
          },2500);
  
          jQuery(this).find(".progress-number-mark").animate({
            left: jQuery(this).attr("data-percentage")
          },{
            duration: 2500,
            step: function(now, fx) {
              var data = Math.round(now);
              jQuery(this).find(".percent").html(data + "%");
            }
          });
        });
  /*MODIFICATION START*/
      }
    });

    // linepogressbar js end hare
    // testimonial carousel start hare

    $(".testimonal-carousel").owlCarousel({
        margin: 0,
        dots: true,
        loop: true,
        items: 3,
        active: true,
        smartSpeed: 1000,
        autoplay: 6000,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1
            },
            800: {
                items: 2
            },
            1024: {
                items: 3
            }
        }
    });

    new WOW().init();

    // humbar icon js start hare

     var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    }
    // humbar icon js end hare

    // menu js start hare
    jQuery(".menu-button").click(function(){
        jQuery(".header-area").toggleClass("header-area-active")
    });

    jQuery(".nav-area ul li a").click(function(){
        jQuery(".header-area").removeClass("header-area-active");
    });



















});