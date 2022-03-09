$(function() {
    $('.review').slick( {
        prevArrow:'<i class="review_slider_icon fas fa-arrow-left"></i>',
      nextArrow: '<i class="review_slider_icon fas fa-arrow-right"></i>',
      
    })

    $(window).on('scroll' , function(){
        if($(window).scrollTop() > $('#nav').height()) {
            $('#nav').addClass('menu_animate')
        }else{
            $('#nav').removeClass('menu_animate');
        }
    })

    $(window).on('scroll',function() {
        if($(window).scrollTop()>400) {
            $('#backtotop').fadeIn(1000);
        }else{$('#backtotop').fadeOut(1000);}
    })

    $('#backtotop').on('click',function() {
        $('html,body').animate({
            scrollTop: 0
        },500)
    })
})
