$(function () {


    $(document).scroll(function () {
        if ($(window).scrollTop() >= $('header').offset().top) {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    });


    // Scroll 

    $('body').scrollspy({
        target: '.navbar',
        offset: 80
    });

    // Preventing URL update on navigation link click

    $('.navbar-nav a, #scroll-down, .animated-scroll-down a').bind('click', function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });


});

