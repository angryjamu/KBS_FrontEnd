// 햄버거메뉴
function sMenu() {

    let gnb1 =
      document.getElementsByClassName("gnb1").item(0);
    gnb1.classList.toggle("on");
  
    document.querySelectorAll('.gnb1 a').forEach(function (link) {
      link.addEventListener('click', function () {
          document.querySelector('.gnb1').classList.remove('on');
      });
    });
  };

// 스와이퍼
var swiper = new Swiper(".mySwiper", {
    speed: 600,
    parallax: true,
    loop: true,
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

// 오디오
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
