
console.log(1)
$(function () {

    /*if (window.matchMedia("(min-width: 768px)").matches) {
        $('.marquee').marquee({
            speed: 100,
            pauseOnHover: true,
            startVisible: true,
            duplicated: true,
            gap: 0,
        });
    }*/


    $('.marquee-border-top').marquee({
        speed: 100,
        pauseOnHover: false,
        startVisible: true,
        duplicated: true,
        gap: 5,
        direction: 'right'
    });

    $('.marquee-border-bottom').marquee({
        speed: 100,
        pauseOnHover: false,
        startVisible: true,
        duplicated: true,
        gap: 5,
        direction: 'right'
    });
    $('.marquee-border-left').marquee({
        speed: 100,
        pauseOnHover: false,
        startVisible: true,
        duplicated: true,
        gap: 5,
        direction: 'right'
    });
    $('.marquee-border-right').marquee({
        speed: 100,
        pauseOnHover: false,
        startVisible: true,
        duplicated: true,
        gap: 5,
        direction: 'right'
    });
});