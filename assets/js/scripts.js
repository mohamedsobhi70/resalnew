if ($(".mobile-menu-btn").length > 0) {
    $(".mobile-menu-btn").on("click", function () {
        $(this).find("svg").toggleClass("hidden")
        $(".mobile-menu").toggleClass("show");
        $("body").toggleClass("overflow-hidden")
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