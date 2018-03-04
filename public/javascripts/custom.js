/* show and hide menu */
$(document).ready(function () {

    'use strict';
    $(window).scroll(function () {
        'use strict';
        if ($(window).scrollTop() < 50) {
            $('.nav-styles').css({
                'margin-top': '-100px',
                'opacity': '0'
            });

            $('.nav-styles').css({
                'background-color': 'rgba(59,59,59,0)'
            });


        } else {
            $('.nav-styles').css({
                'margin-top': '0',
                'opacity': '0.7'
            });
            $('.nav-styles').css({
                'background-color': 'rgba(59,59,59,0.7)',
                'opacity': 0.7,
                'border-color': '#444'
            });
        }
    });
});

$(document).ready(function () {
    $('.counter-num').counterUp({delay: 10, time: 2000});
});

// add animate
// initialization
$(document).ready(function () {
    'use strict';
    new WOW().init()
});
