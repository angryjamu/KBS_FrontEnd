// 스와이퍼

var swiper = new Swiper(".swiper-fade", {
    effect: "fade",
    loop: true,
    speed: 600,
    autoplay: {
        delay: 5000,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });