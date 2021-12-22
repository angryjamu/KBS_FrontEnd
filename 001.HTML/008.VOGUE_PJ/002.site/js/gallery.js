// 보그 PJ 갤러리 JS - gallery.js

///// 로딩구역 /////////////
$(()=>{ // jQB ////////////////////////////////

    console.log("갤러리 로딩완료!")

    let swiper = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
      });

}); ///////////////// jQB /////////////////////
///////////////////////////////////////////////