TweenMax.set(".play-circle-01", {
  rotation: 90,
  transformOrigin: "center"
})

TweenMax.set(".play-circle-02", {
  rotation: -90,
  transformOrigin: "center"
})

TweenMax.set(".play-perspective", {
  xPercent: 2.1,
  yPercent: -6.6,
  scale: .175,
  transformOrigin: "center",
  perspective: 1
})

TweenMax.set(".play-video", {
  visibility: "hidden",
  opacity: 0,
})

TweenMax.set(".play-triangle", {
  transformOrigin: "left center",
  transformStyle: "preserve-3d",
  rotationY: 10,
  scaleX: 2
})

const rotateTL = new TimelineMax({
    paused: true
  })
  .to(".play-circle-01", .7, {
    opacity: .1,
    rotation: '+=360',
    strokeDasharray: 456,
    ease: Power1.easeInOut
  }, 0)
  .to(".play-circle-02", .7, {
    opacity: .1,
    rotation: '-=360',
    strokeDasharray: 411,
    ease: Power1.easeInOut
  }, 0)

const openTL = new TimelineMax({
    paused: true
  })
  .to(".play-backdrop", 1, {
    opacity: .95,
    visibility: "visible",
    ease: Power2.easeInOut
  }, 0)
  .to(".play-close", 1, {
    opacity: 1,
    ease: Power2.easeInOut
  }, 0)
  .to(".play-perspective", 1, {
    xPercent: 0,
    scale: 1,
    ease: Power2.easeInOut
  }, 0)
  .to(".play-triangle", 1, {
    scaleX: 1,
    ease: ExpoScaleEase.config(2, 1, Power2.easeInOut)
  }, 0)
  .to(".play-triangle", 1, {
    rotationY: 0,
    ease: ExpoScaleEase.config(10, .01, Power2.easeInOut)
  }, 0)
  .to(".play-video", 1, {
    visibility: "visible",
    opacity: 1
  }, .5)


const button = document.querySelector(".play-button")
const backdrop = document.querySelector(".play-backdrop")
const close = document.querySelector(".play-close")

button.addEventListener("mouseover", () => rotateTL.play())
button.addEventListener("mouseleave", () => rotateTL.reverse())
button.addEventListener("click", () => openTL.play())
backdrop.addEventListener("click", () => openTL.reverse())
close.addEventListener("click", e => {
  e.stopPropagation()
  openTL.reverse()
})

/// 햄버거메뉴 JS ////////////////////////////
function sMenu() {

  let gnb1 =
    document.getElementsByClassName("gnb1").item(0);
  gnb1.classList.toggle("on");

}; /// 햄버거메뉴 JS //////////////////////////


            //audio script
            var audio = document.getElementById('bgm');
            var waveAnimation = document.getElementById('wave-animation');
            var isPlaying = false;
    
            function toggleAudio() {
                if (isPlaying) {
                    audio.pause();
                    waveAnimation.style.animationPlayState = 'paused';
                    waveAnimation.style.transform = 'translate(-50%, -50%) scale(1)';
                    waveAnimation.style.opacity = 0.8;
                } else {
                    audio.play();
                    waveAnimation.style.animationPlayState = 'running';
                    waveAnimation.style.opacity = 0.8;
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
