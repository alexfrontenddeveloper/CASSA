$( document ).ready(function() {
    $('.slct').click(function(){
        var dropBlock = $(this).parent().find('.drop');
        if( dropBlock.is(':hidden') ) {
            dropBlock.slideDown();
            $(this).addClass('active');
            $('.drop').find('li').click(function(){
                var selectResult = $(this).html();
                $(this).parent().parent().find('input').val(selectResult);
                $(this).parent().parent().find('.slct').removeClass('active').html(selectResult);
                dropBlock.slideUp();
            });
        } else {
            $(this).removeClass('active');
            dropBlock.slideUp();
        }
        return false;
    });
    /*----------------------------------------------*/
    $('.cart').click(function(){
        $('body').append("" +
            "<div class='popup'>" +
                "<div class='popup_bg'></div>"+
                "<div class='right_blok'>"+
                    "<div class='zag_right_bloc'>"+
                        "<span class='fa fa-angle-right'></span><h1 class='zag_right_block'>CARELLO</h1>"+
                    "</div>"+
                        "<div class='all_tov'>" +
                            "<div class='pay_tov'>"+
                                "<div class='img_right'><img src='img/tablet_1.png' alt=''></div>"+
                                "<div class='opis_tov'>"+
                                    "<p class='first'>OFFERTA</p>"+
                                    "<p class='second'>FIZZYSLIM CON SAPORE DI ANANAS</p>"+
                                    "<p class='third'>QTÀ: 3</p>"+
                                    "<p class='fourth'>€25.50</p>"+
                                "</div>"+
                            "</div>"+
                            "<div class='pay_tov'>"+
                                "<div class='img_right'><img src='img/tablet_1.png' alt=''></div>"+
                                "<div class='opis_tov'>"+
                                    "<p class='first'>OFFERTA</p>"+
                                    "<p class='second'>FIZZYSLIM CON SAPORE DI ANANAS</p>"+
                                    "<p class='third'>QTÀ: 3</p>"+
                                    "<p class='fourth'>€25.50</p>"+
                                "</div>"+
                            "</div>"+
                            "<div class='pay_tov'>"+
                                "<div class='img_right'><img src='img/tablet_1.png' alt=''></div>"+
                                "<div class='opis_tov'>"+
                                    "<p class='first'>OFFERTA</p>"+
                                    "<p class='second'>FIZZYSLIM CON SAPORE DI ANANAS</p>"+
                                    "<p class='third'>QTÀ: 3</p>"+
                                    "<p class='fourth'>€25.50</p>"+
                                "</div>"+
                            "</div>"+
                        "</div>"+
                    "<div class='pay_tov_sum'>"+
                        "<div class='zag_sum'>"+
                            "<p class='sum_txt'>Subtotale</p>"+
                            "<p class='prise_sum'>€455.00</p>"+
                        "</div>"+
                        "<div class='block_link'><a class='by_all'>VISUALIZZA CARRELLO</a></div>"+
                    "</div>"+
                "</div>"+
            "</div>");
        $('.popup').fadeIn(800);
        $('.popup_bg').click(function(){
            $('.popup').fadeOut(800);
            setTimeout(function() {
                $('.popup').remove();
            }, 800);
        });
        $('.by_all').click(function(){
            $('.popup').fadeOut(800);
            setTimeout(function() {
                $('.popup').remove();
            }, 800);
        });
    });
    $('#slideThree3').click(function() {
        $('.blok_com').toggleClass(' check');
    });

});