if ($('#loader')) {
    gsap.from(".loader-path", {
        duration: 1.3,
        y: 35,
        transformOrigin: "50% 50%",
        opacity: 0,
        scale: 0.5,
        stagger: {
            each: 0.2, from: "random"
        }
    })
    $(window).on('load', function () {
        setTimeout(function () {
            $('#loader').fadeOut('slow');
        }, 2000);
    });
}

if ($(".mobile-menu-btn").length > 0) {
    $(".mobile-menu-btn").on("click", function () {

        let path = document.getElementById('linePath');
        let newPath = (path.getAttribute('d') === "M4 6H20M4 12H20M4 18H20") ? "M18 6L6 18M18 18L6 6.00001" : "M4 6H20M4 12H20M4 18H20";
        gsap.fromTo(path, { attr: { d: path.getAttribute('d') } }, { duration: .4, attr: { d: newPath } });
        $(".mobile-menu").toggleClass("show");

        if ($(".mobile-menu").hasClass("show")) {
            $("body").addClass("overflow-hidden");
        } else {
            $("body").removeClass("overflow-hidden");

        }

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
                    spaceBetween: 56,
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

if ($(".customers-slider").length > 0) {
    const sliders = document.querySelectorAll(".customers-slider");

    sliders.forEach(function (slider) {
        new Swiper(slider, {
            slidesPerView: 'auto',
            centerInsufficientSlides: true,
            centeredSlidesBounds: true,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            breakpoints: {
                0: {
                    spaceBetween: 40,
                    centeredSlides: true,
                    loop: true,
                },
                768: {
                    spaceBetween: 56,
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

if ($(".about-resal-slider").length > 0) {
    const sliders = document.querySelectorAll(".about-resal-slider");

    sliders.forEach(function (slider) {
        new Swiper(slider, {
            centeredSlides: true,
            centerInsufficientSlides: true,
            centeredSlidesBounds: true,
            loop: true,
            autoplay: {
                delay: 6000,
                disableOnInteraction: false,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1.2,
                    spaceBetween: 40,
                },
                768: {
                    spaceBetween: 50,
                    slidesPerView: 1.8,
                },
                1024: {
                    spaceBetween: 80,
                    slidesPerView: 2.8,
                },
            },
        });
    });
}

if ($(".testimonials-slider").length > 0) {
    const sliders = document.querySelectorAll(".testimonials-slider");

    sliders.forEach(function (slider) {
        new Swiper(slider, {
            centeredSlides: true,
            spaceBetween: 40,
            loop: true,
            navigation: {
                nextEl: slider.querySelector('.swiper-button-next'),
                prevEl: slider.querySelector('.swiper-button-prev'),
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,

                },
                1024: {
                    slidesPerView: 1.3,
                },
            },
        });
    });
}
if ($(".value-slider").length > 0) {
    const sliders = document.querySelectorAll(".value-slider");

    sliders.forEach(function (slider) {
        new Swiper(slider, {
            spaceBetween: 40,
            loop: true,
            slidesPerView: 1,
            navigation: {
                nextEl: slider.parentElement.parentElement.querySelector('.swiper-button-next'),
                prevEl: slider.parentElement.parentElement.querySelector('.swiper-button-prev'),
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

if ($(".odometer").length > 0) {
    document.querySelectorAll('.odometer').forEach(el => {
        let $count = (el.getAttribute("data-to-value"))
            ? el.getAttribute("data-to-value") : '0',
            waypoint = new Waypoint({
                element: el,
                handler: function () {
                    let od = new Odometer({
                        el: el,
                        value: $count,
                        format: 'd'

                    });

                    od.update($count);
                    this.destroy();
                },
                offset: '90%',
            });

    });

}

if ($(".resal-team-container").length > 0) {
    // Function to paginate team members on mobile screens
    function paginateTeamOnMobile(pageNumber) {
        const itemsPerPage = 2;
        const teamItems = document.querySelectorAll('.resal-team-container');
        const pagination = document.getElementById('pagination');
        const totalItems = teamItems.length;
        const totalPages = Math.ceil(totalItems / itemsPerPage);

        // Hide all items
        teamItems.forEach(item => item.classList.add('hidden'));

        // Calculate start and end index for current page
        const startIndex = (pageNumber - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

        // Show items for current page
        for (let i = startIndex; i < endIndex; i++) {
            teamItems[i].classList.remove('hidden');
        }

        // Generate pagination buttons
        pagination.innerHTML = '';
        const prevButton = document.createElement('button');
        prevButton.innerHTML = `<svg class="rtl:rotate-180" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 6L8.70708 11.2929C8.31655 11.6834 8.31655 12.3166 8.70708 12.7071L14 18" stroke="white" stroke-width="2" stroke-linecap="round"/>
        </svg>
        `;
        prevButton.classList.add('pag-btn', 'prev-btn');
        prevButton.addEventListener('click', () => {
            if (pageNumber > 1) {
                paginateTeamOnMobile(pageNumber - 1);
                activateButton(pageNumber - 1);
            }
        });
        pagination.appendChild(prevButton);

        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement('button');
            button.innerText = i;
            button.classList.add('pag-btn');
            button.addEventListener('click', () => {
                paginateTeamOnMobile(i);
                activateButton(i);
            });
            if (i === pageNumber) {
                button.classList.add('active');
            }
            pagination.appendChild(button);
        }

        const nextButton = document.createElement('button');
        nextButton.innerHTML = `
        <svg class="rtl:rotate-180" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 6L15.2929 11.2929C15.6834 11.6834 15.6834 12.3166 15.2929 12.7071L10 18" stroke="white" stroke-width="2" stroke-linecap="round"/>
</svg>

        `;
        nextButton.classList.add('pag-btn', 'next-btn');
        nextButton.addEventListener('click', () => {
            if (pageNumber < totalPages) {
                paginateTeamOnMobile(pageNumber + 1);
                activateButton(pageNumber + 1);
            }
        });
        pagination.appendChild(nextButton);
    }

    // Function to activate the clicked pagination button
    function activateButton(pageNumber) {
        const buttons = document.querySelectorAll('.pag-btn');
        buttons.forEach(button => {
            if (parseInt(button.innerText) === pageNumber) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    // Pagination initialization for mobile screens
    function initPagination() {
        const width = window.innerWidth;
        if (width <= 1024) { // Mobile breakpoint
            paginateTeamOnMobile(1);
            activateButton(1);
        } else {
            const teamItems = document.querySelectorAll('.resal-team-container');
            teamItems.forEach(item => item.classList.remove('hidden'));
            document.getElementById('pagination').innerHTML = ''; // Clear pagination
        }
    }

    // Initialize pagination on page load
    initPagination();

    // Event listener for window resize to update pagination
    window.addEventListener('resize', initPagination);
}
