(function(){
    function fijarTitulo() {
        $('#tituloimagen').slideDown(1000);
        $('#tituloimagen').css({
            position: 'fixed',
            top: '0'
        })

    }

    $(document).ready(function(){
        if(screen.width >= 600){
            $("#tituloimagen").fadeIn(2000);
            $('html,body').delay(1000);
            $('html,body').animate({scrollTop: $('#tituloindex').height()+76,desaperecer:$('#tituloimagen').fadeOut(1000)},2000, fijarTitulo );
        }

    })
})()
