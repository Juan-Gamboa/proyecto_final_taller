$(document).ready(function(){

    //$('html, body').scrollTop(0);

    //$('.modal').css({display:'none'});

    //$('.tiendaPage').hide();

    $('.FindT').click(function(){
        $('.FindT').attr('href','../Pages/tienda.html');
        /*$('.tiendaPage').css({
            left: '-200vw'
        });
        $('.tiendaPage').show();
        $('.content').animate({
            left: '-100vw'
        });*/
    });

    $('.FindI').click(function(){
        $('.FindI').attr('href','../Pages/Index.html');
        /*$('.content').animate({
            left: '0vw'
        },function(){
            $('.tiendaPage').hide();   
        });*/
    });

    $('.FindC').click(function() {
        $('.FindC').attr('href','../Pages/contacto.html');
        /*$('.content').animate({
            left: '-200vw'
        },function(){
            $('.tiendaPage').hide();
            $('.content').css({
                left: '-100vw'
            }); 
        });*/
    });

    $('.FindL').click(function(){
        $('.FindL').attr('href','../Pages/Login.html');
    });
    $('.link').click(function(){
        $('.modalR').animate({
            top:"0vh",
        },function(){
            $('.modalR').css({display:'flex'});
        });
    });
    $('.linkR').click(function(){
        $('.modalR').animate({
            top:"-100vh",
        },function(){
            $('.modalR').css({display:'none'});
        });
    });
    setInterval(function() { 
        $('#slideshow > div:first')
          .fadeOut(2000)
          .next()
          .fadeIn(2000)
          .end()
          .appendTo('#slideshow');
      },  3000);
});