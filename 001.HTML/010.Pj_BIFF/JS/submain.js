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
