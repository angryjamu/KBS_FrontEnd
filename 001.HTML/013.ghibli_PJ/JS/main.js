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

  document.addEventListener("DOMContentLoaded", function() {
    const gnb1 = document.querySelector('.gnb1');
    const menuItems = document.querySelectorAll('.gnb1 > ul > li');
    let prevBackgroundImage = gnb1.style.backgroundImage;

    menuItems.forEach(function(menuItem) {
        menuItem.addEventListener('mouseover', function() {
            if (menuItem.classList.contains('menu1')) {
                gnb1.style.backgroundImage = 'url(./img/main/mbg7.jpg)';
            } else if (menuItem.classList.contains('menu2')) {
                gnb1.style.backgroundImage = 'url(./img/main/mbg9.png)';
            } else if (menuItem.classList.contains('menu3')) {
                gnb1.style.backgroundImage = 'url(./img/main/mbg8.png)';
            } else if (menuItem.classList.contains('menu4')) {
                gnb1.style.backgroundImage = 'url(./img/main/mbg6.jpg)';
            } else if (menuItem.classList.contains('menu5')) {
                gnb1.style.backgroundImage = 'url(./img/main/mbg5.jpg)';
            }
            // 나머지 메뉴에 대한 처리도 추가할 수 있습니다.
        });

        menuItem.addEventListener('mouseout', function() {
            // 마우스를 떼었을 때 이전의 백그라운드 이미지로 돌아가기
            gnb1.style.backgroundImage = prevBackgroundImage;
        });
    });
});


// 스와이퍼
var swiper = new Swiper(".mySwiper", {
    speed: 600,
    loop: true,
    autoplay: {
        delay: 3000,
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
