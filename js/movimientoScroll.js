$(document).ready(function(){

    $('a.volver-arriba').on('click',function(e){
        e.preventDefault();

        if ($(window).scrollTop()!=0) {
            $('html,body').stop().animate({
                scrollTop: 0
            },1000);
        }
    })


    $('a.scroll-suave').on('click',function(e){
        e.preventDefault();

        var distanciaTopASeccion = $($(this).attr('href')).offset().top;

        $('html,body').stop().animate({
            scrollTop: distanciaTopASeccion
        },1000)        
    })

});