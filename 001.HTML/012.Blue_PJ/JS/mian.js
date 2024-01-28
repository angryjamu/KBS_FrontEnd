// 메뉴버튼
$(function(){
    $('.menuBtn').click(function(){
        $('.wrapBox.on').toggleClass('on')
        console.log(this)
    })
})

// 스와이퍼
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });