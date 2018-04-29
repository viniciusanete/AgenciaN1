if( $(window).width() > 800){
    window.onload = function(){
    $('.background, .box').animate({'opacity': '.7'}, 500, 'linear');
    $('.box').animate({'opacity': '1.00'}, 500, 'linear');
    $('.background, .box').css ('display', 'block');
    $('.conteudo-sucesso').css('display', 'none');
    }
}

$(document).ready(function(){
    $('.close').click(function(){
        $('.background, .box').animate({'opacity': '0'}, 500, 'linear', function(){
            $('.background, .box').css('display', 'none');
        });
    });

    $('.background').click(function(){
        $('.background, .box').animate({'opacity': '0'}, 500, 'linear', function(){
            $('.background, .box').css('display', 'none');
        });
    });

    $('#cadastrarLight').click(function(){
        $(".form-light, .img-light" ).empty();
        $('.conteudo-sucesso').css('display', 'flex');
    });
});