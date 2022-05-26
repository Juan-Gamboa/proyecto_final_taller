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
    $('#verSubtemas').click(function(){
        $('.contentPage').animate({
            top:"-100vh"
        });
        $('.content').animate({
            left: '0vw'
        });
    });

    $('#cerrarModal').click(function(){
        $('.modalAnimacion').animate({
            top: '-100vh'
        },function(){
            $('.modal').css({display:'none'});
        });
        /*/$('.contentPage').animate({
            top:"0vh"
        });/*/
    });

    /*$('body').mousemove(function(ev){
        console.log(ev.clientY, ev.clientX);
        $('.puntero').css({
            left: ev.clientX+"px" ,
            top: ev.clientY+"px"
        });
    });*/


});