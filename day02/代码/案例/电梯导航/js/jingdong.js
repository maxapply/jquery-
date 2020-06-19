$(function () {
    shouDiv()

    function shouDiv() {
        var topVal = $(document).scrollTop();
        if (topVal >= $('.recommend').offset().top) {
            $('.fixedtool').fadeIn()
        } else {
            $('.fixedtool').fadeOut()
        }
    }
})
$(window).scroll(function () {
    shouDiv()
    var top = $(document).scrollTop();
    $('.floor>div').each(function (i, elm) {
        if (top >= $(elm).offset().top) {

        }

    })







})