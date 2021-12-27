// 보그 PJ 갤러리 JS - gallery.js

///// 로딩구역 /////////////
$(() => { // jQB ////////////////////////////////

    console.log("갤러리 로딩완료!")

    // 스와이퍼 플러그인 적용하기 //
    let swiper = new Swiper(".mySwiper", {


        
        loop: true, // 무한루프
        pagination: { // 하단블릿
            el: ".swiper-pagination", // 블릿대상박스
            clickable: true, // 블릿 클릭 가능여부
        },
        navigation: { // 양쪽이동버튼
            nextEl: ".swiper-button-next", // 다음버튼대상
            prevEl: ".swiper-button-prev", // 이전버튼대상
        },
        autoplay: { // 자동넘김
            delay: 2000, // 사이시간
            disableOnInteraction: false, // 상호작용이 없을때 재가동
        },
    }); ///////// swiper ///////////////

}); ///////////////// jQB /////////////////////
///////////////////////////////////////////////