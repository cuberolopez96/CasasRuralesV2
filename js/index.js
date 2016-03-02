(function(){

    function fijarTitulo() {

        $('#tituloimagen').slideDown(1000);
        $('#tituloimagen').css({
            position: 'fixed',
            top: '0'
        })

    }

    $(document).ready(function(){

        if(!navigator.cookieEnabled){
            $('#avisocookies').fadeIn(1000);
        }

        if(screen.width >=550){
            $("#tituloimagen").fadeIn(2000);
            $('html,body').delay(1000);
            $('html,body').animate({scrollTop: $('#tituloindex').height()+76,desaperecer:$('#tituloimagen').fadeOut(1000)},2000, fijarTitulo );
        }
        $(".nombreCasa").delay(3000);
        $(".nombreCasa").slideDown(2000);

    })
})()
