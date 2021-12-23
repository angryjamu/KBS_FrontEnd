// BIFF PJ JS

///// 로딩구역 /////////////
$(() => { // jQB ////////////////////////////////

    console.log("갤러리 로딩완료!")

    // 스와이퍼 플러그인 적용하기 //
///////////////// C3 JS ///////////////////////
let swiper1 = new Swiper1(".mySwiper1", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination1",
      clickable: true,
    },
  });
}); ///////////////// jQB /////////////////////
///////////////////////////////////////////////