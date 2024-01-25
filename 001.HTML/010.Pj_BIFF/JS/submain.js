/// 햄버거메뉴 JS ////////////////////////////
function sMenu() {

  let gnb1 =
    document.getElementsByClassName("gnb1").item(0);
  gnb1.classList.toggle("on");

};

document.querySelectorAll('.gnb1 a').forEach(function (link) {
  link.addEventListener('click', function () {
      // .gnb1에게 "on" 클래스 제거
      document.querySelector('.gnb1').classList.remove('on');
  });
});
/// 햄버거메뉴 JS //////////////////////////

// 로딩
document.addEventListener('DOMContentLoaded', function () {
  var video = document.getElementsByClassName('Mvideo');

  video.addEventListener('loadeddata', function () {
      // 비디오가 로드된 후 실행되는 코드
      console.log('비디오 로딩 완료');
  });
});

            //audio script
            let audio = document.getElementById('bgm');
            let waveAnimation = document.getElementById('wave-animation');
            let audiotxt = document.getElementsByClassName('audiotxt');
            let isPlaying = false;
    
            function toggleAudio() {
                if (isPlaying) {
                    audio.pause();
                    waveAnimation.style.animationPlayState = 'paused';
                    waveAnimation.style.transform = 'translate(-50%, -50%) scale(1)';
                    waveAnimation.style.opacity = 0.8;
                    audiotxt[0].innerText = 'BGM Play!';
                } else {
                    audio.play();
                    waveAnimation.style.animationPlayState = 'running';
                    waveAnimation.style.opacity = 0.8;
                    audiotxt[0].innerText = 'BGM Stop!';
                }
                isPlaying = !isPlaying;
            }
    
            audio.addEventListener('ended', function() {
                // Reset animation when audio playback ends
                waveAnimation.style.animationPlayState = 'paused';
                waveAnimation.style.transform = 'translate(-50%, -50%) scale(1)';
                waveAnimation.style.opacity = 0.8;
                isPlaying = false;
            });


// swiper
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 2200,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});