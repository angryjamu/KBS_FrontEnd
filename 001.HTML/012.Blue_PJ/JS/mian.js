// 메뉴버튼
$(function() {
    // 기존 이미지 저장
    var originalImgSrc = $('.ham .imgCont img').attr('src');

    $('.ham ul li').hover(
        // 마우스를 올렸을 때
        function() {
            var imagePath = $(this).data('image');

            // 이미지 변경
            $('.ham .imgCont img').fadeOut(400, function() {
                $(this).attr('src', imagePath).fadeIn(400);
            });
        },
        // 마우스를 뗄 때
        function() {
            // 기존 이미지로 되돌리기
            $('.ham .imgCont img').fadeOut(400, function() {
                $(this).attr('src', originalImgSrc).fadeIn(400);
            });
        }
    );

    $('.menuBtn').click(function(){
        $('.ham').addClass('on')
    });
    
    $('#exit').click(function() {
        $('.ham').removeClass('on');
    });
})

// 스와이퍼
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true,
    // autoplay: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });