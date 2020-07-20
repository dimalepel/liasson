'use strict';

(function() {

    // Слайдер отызвов
    function reviewsSlider(element) {
        const slider = $(element);
        if (slider) {
            $(slider).slick({
                arrows: true,
                dots: false,
                prevArrow: '<button type="button" class="slick-prev"><span class="visually-hidden">Предыдущий слайд</span><svg width="18" height="30" viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.595 0L18.0005 3.4055L6.81099 14.595L18.0005 25.7845L14.595 29.19L-1.33514e-05 14.595L14.595 0Z" /></svg></button>',
                nextArrow: '<button type="button" class="slick-next"><span class="visually-hidden">Следующий слайд</span><svg width="18" height="30" viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.4055 0L0 3.4055L11.1895 14.595L0 25.7845L3.4055 29.19L18.0005 14.595L3.4055 0Z" /></svg></button>',
                slidesToShow: 4,
                responsive: [
                    {
                        breakpoint: 1025,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 861,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 501,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            });
        }
    }
    reviewsSlider('.js--reviews-slider');

})();
