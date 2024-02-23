if ($(".mobile-menu-btn").length > 0) {
    $(".mobile-menu-btn").on("click", function () {
        let path = document.getElementById('linePath');
        var newPath = (path.getAttribute('d') === "M4 6H20M4 12H20M4 18H20") ? "M18 6L6 18M18 18L6 6.00001" : "M4 6H20M4 12H20M4 18H20";
        gsap.fromTo(path, {attr: {d: path.getAttribute('d')}}, {duration: .4, attr: {d: newPath}});
        $(".mobile-menu").toggleClass("show");
        $("body").toggleClass("overflow-hidden");
    })
}


if ($(".sources-slider").length > 0) {
    const sliders = document.querySelectorAll(".sources-slider");

    sliders.forEach(function (slider) {
        new Swiper(slider, {
            spaceBetween: 24,
            slidesPerView: 'auto',
            autoplay: true,
            centerInsufficientSlides: true,
            centeredSlidesBounds: true,
            breakpoints: {
                0: {
                    centeredSlides: true,
                },
                768: {
                    centeredSlides: true,
                },
                1024: {
                    centeredSlides: false,
                },
            },
        });
    });
}


if ($(".awards-slider").length > 0) {
    const sliders = document.querySelectorAll(".awards-slider");

    sliders.forEach(function (slider) {
        new Swiper(slider, {
            slidesPerView: 'auto',
            centerInsufficientSlides: true,
            centeredSlidesBounds: true,
            breakpoints: {
                0: {
                    spaceBetween: 40,
                    centeredSlides: true,
                    loop: true,
                },
                768: {
                    spaceBetween: 40,
                    centeredSlides: true,
                    loop: true,

                },
                1024: {
                    spaceBetween: 80,
                    centeredSlides: false,
                    loop: false,
                },
            },
        });
    });
}


// back to top 
if ($("#back-top").length > 0) {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 900) {
            $('#back-top').fadeIn();
        }
        else {
            $('#back-top').fadeOut();
        }
    })
    $('.back-totop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 250);
        return false;
    })
}
