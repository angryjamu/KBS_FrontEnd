<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>로그인 | 보그 코리아 (Vogue Korea)</title>    
    <link rel="shortcut icon" href="images/icon.jpg" type="image/x-icon">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fontisto@v3.0.4/css/fontisto/fontisto.min.css">
    <link rel="stylesheet" href="css/login.css">
    <link rel="stylesheet" href="css/media.css">
    <!-- 미디어쿼리를 본css하단에 link방식으로 넣어준다! -->
    
    <script src="js/jquery-3.6.0.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <script src="js/linksys.js"></script>
    <script src="js/login.js"></script>
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
                <h2 class="stit">Log In</h2>
             </header>      

            <!-- 2. 서브컨텐츠박스 -->
            <section class="scont">
                <div id="login">
                    <form action="process.php" method="post" class="logF">
                        <!-- 아이디박스 -->
                        <div class="minput">
                            <label for="mid">아이디</label>
                            <input type="text" name="mid" id="mid" maxlength="10" placeholder="아이디를 입력해 주세요">
                        </div>
                        <!-- 비밀번호박스 -->
                        <div class="minput mi2">
                            <label for="mid">비밀번호</label>
                            <input type="password" name="mpw" id="mpw" maxlength="10" placeholder="비밀번호를 입력해 주세요">
                        </div>
                        <!-- 버튼영역 -->
                        <div class="btnbx">
                            <input type="submit" id="sbtn" value="LOGIN">
                        </div>
                        <!-- 기타링크 -->
                        <div class="addbx">
                            <span>
                                <input type="checkbox" id="chkbx" name="chkbx">
                                <label for="chkbx">아이디저장</label>
                            </span>
                            <a href="#">아이디찾기</a> | 
                            <a href="#">비밀번호찾기</a> | 
                            <a href="#">회원가입</a>
                        </div>
                    </form>
                </div>

            </section> 
        </main>
    </div>
    <!-- 3. 하단영역 -->
    <?php include "inc/info.inc" ?>

    
</body>
</html>