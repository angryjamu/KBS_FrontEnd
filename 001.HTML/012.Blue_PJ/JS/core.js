// 메뉴버튼
$(function() {
    var originalImgSrc = $('.ham .imgCont img').attr('src');

    $('.ham ul li').hover(
        function() {
            var imagePath = $(this).data('image');

            $('.ham .imgCont img').fadeOut(400, function() {
                $(this).attr('src', imagePath).fadeIn(400);
            });
        },
        function() {
            $('.ham .imgCont img').fadeOut(400, function() {
                $(this).attr('src', originalImgSrc).fadeIn(400);
            });
        }
    );

    $('.menuBtn').click(function(){
        $('.ham').addClass('on')
    });
    
    $('#close').click(function() {
        $('.ham').removeClass('on');
    });
})

// 언어버튼
$(function(){
    $('.lang button').click(function(){
        if($(this).next().is(':hidden')){
            $(this).next().slideDown(300)
        }else{
            $(this).next().fadeOut(200)
        }
    })
})