$(function () {
    AOS.init();

    var korail = ['KTX 이음', '차량정비', '무궁화호', 'KTX 승무원 고객응대']



    $('.main_slide').on('init afterChange', function (s, e, c) {
        console.log(korail);
        var _this = $('.mainSlide .slick-current');
        _this.addClass('on').siblings().removeClass('on');
        $('.korail').text(korail[c]);
    })

    $('.main_slide').slick({
        autoplay: true,
        fade: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,
        dots: true,
    })

    $('.scroll-down i').on('click', function () {
        var sct = $('#quick').offset().top
        $('html,body').animate({ scrollTop: sct }, 600)
    })








});