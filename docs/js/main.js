$(function () {

    //menu light
    //down
    $('.wp-zone').waypoint(function (direction) {
        if (direction === 'down') {
            $('.main-menu a').removeClass('disable-click');

            var selector = "nav a[href='#" + this.element.id + "']";
            $(selector).addClass('disable-click');
        }
    }, {
        offset: '30%'

    });

    //up
    $('.wp-zone').waypoint(function (direction) {
        if (direction === 'up') {
            $('.main-menu a').removeClass('disable-click');
            var selector = "nav a[href='#" + this.element.id + "']";
            $(selector).addClass('disable-click');
        }
    }, {
        offset: '-5%'
    });
    //menu light

    //menu scroll
    $(window).on('scroll', function () {
        if ($(this).scrollTop() >= 71) {
            $('.header__main-wrap').addClass('header__main-fixed');
            $('.container__main').addClass('container__main--inner');
        } else {
            $('.header__main-wrap').removeClass('header__main-fixed');
            $('.container__main').removeClass('container__main--inner');
        }
    });

    if (window.screen.width == 992 || window.screen.width <= 992) {
        $(window).on('scroll', function () {
            if ($(this).scrollTop() >= 168) {
                $('.header__main-wrap').addClass('header__main-fixed');
                $('.container__main').addClass('container__main--inner');
            } else {
                $('.header__main-wrap').removeClass('header__main-fixed');
                $('.container__main').removeClass('container__main--inner');
            }
        });
    }
    //menu scroll

    //menu
    $('.main-menu a').click(function () {
        $('.main-menu').removeClass('active');
        $('body').removeClass('lock');
        $('.main__burger').removeClass('active');
    });

    $('.main__burger').on('click', function () {
        $('body').toggleClass('lock');
        $('.main__burger, .main-menu').toggleClass('active');
        $('.header__main-wrap').toggleClass('active');
    });
    //menu

    $('.aboout__link-button').click(function () {
        $('.about__paragraph').slideToggle(300);
    });

    $('.link-button').click(function () {
        $('.start-part__inner').toggleClass('part-width');
        $('.start-part__paragraph').slideToggle(300);
    });


    if (window.innerWidth == 420 || window.innerWidth < 420) {
        $('.upload__link-button').click(function (event) {
            event.preventDefault();
            $('.upload__inner-item.item-block3').slideToggle(640)
        })
    }



    let color = document.querySelector('input[type="color"]');
    let divColor = document.querySelector('.block-input__color');
    divColor.innerHTML = 'HEX #000000';
    color.onchange = function () {
        divColor.innerHTML = 'HEX ' + ' ' + color.value;
    }


    var swiper = new Swiper('.swiper-container', {
        loop: 'true',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    //link to id
    $("body").on('click', '[href*="#"]', function (e) {
        var fixed_offset = 100;
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
        e.preventDefault();
    });
    //link to id


    $('select, input[type="radio"]').styler();
});