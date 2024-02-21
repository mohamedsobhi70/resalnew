if ($(".mobile-menu-btn").length > 0) {
    $(".mobile-menu-btn").on("click", function () {
        $(this).find("svg").toggleClass("hidden")
        $(".mobile-menu").toggleClass("show")
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