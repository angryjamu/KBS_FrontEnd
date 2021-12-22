<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>갤러리 | 보그 코리아 (Vogue Korea)</title>
    <link rel="shortcut icon" href="images/icon.jpg" type="image/x-icon">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fontisto@v3.0.4/css/fontisto/fontisto.min.css">
    <link rel="stylesheet" href="css/swiper.min.css">
    <link rel="stylesheet" href="css/gallery.css">
    <link rel="stylesheet" href="css/media.css">
    <!-- 미디어쿼리를 본css하단에 link방식으로 넣어준다! -->
    
    <script src="js/jquery-3.6.0.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <script src="js/linksys.js"></script>
    <script src="js/swiper.min.js"></script>
    <script src="js/gallery.js"></script>
    <!-- login.js는 순서중요! 제이쿼리쓰니까! -->
</head>

<body>

    <!-- 1. 상단영역 -->
    <?php include "inc/top.inc" ?>
    <!-- 2. 메인영역 -->
    <div id="cont">
        <main class="cont ibx">
            <!-- 1. 서브페이지 탑영역 -->
            <header class="subtop">
                <!-- 서브타이틀 -->
                <h2 class="stit">Gallery</h2>
            </header>

            <!-- 2. 서브컨텐츠박스 -->
            <section class="scont">
                <!-- Swiper -->
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"><img src="images/fashion/cont1-1b.jpg" alt="갤러리이미지"></div>
                        <div class="swiper-slide"><img src="images/fashion/cont1-2b.jpg" alt="갤러리이미지"></div>
                        <div class="swiper-slide"><img src="images/fashion/cont1-3b.jpg" alt="갤러리이미지"></div>
                        <div class="swiper-slide"><img src="images/fashion/cont2-1b.jpg" alt="갤러리이미지"></div>
                        <div class="swiper-slide"><img src="images/fashion/cont2-2b.jpg" alt="갤러리이미지"></div>
                        <div class="swiper-slide"><img src="images/fashion/cont2-3b.jpg" alt="갤러리이미지"></div>
                        <div class="swiper-slide"><img src="images/fashion/cont1-2b.jpg" alt="갤러리이미지"></div>
                        <div class="swiper-slide"><img src="images/fashion/cont1-3b.jpg" alt="갤러리이미지"></div>
                        <div class="swiper-slide"><img src="images/fashion/cont2-3b.jpg" alt="갤러리이미지"></div>
                        <div class="swiper-slide"><img src="images/fashion/cont1-1b.jpg" alt="갤러리이미지"></div>
                    </div>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination"></div>
                </div>

            </section>
        </main>
    </div>
    <!-- 3. 하단영역 -->
    <?php include "inc/info.inc" ?>


</body>

</html>