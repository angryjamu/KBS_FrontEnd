// 제이쿼리 기본 JS - main.js 

//////////////// 제이쿼리 로드구역 //////////////////////
$(function () { ////////// jQB ///////////////////////////

    console.log("제이쿼리 로딩완료!");

    /****************************************************** 
                    1. 대상선정 변수할당
    ******************************************************/

    // 대상1: 버튼 - .btns>button
    let btns = $(".btns>button");
    // console.log("버튼개수:",btns.length);

    // 대상2: 미니언즈 - .mi
    let mi = $(".mi");

    // 대상3: 빌딩 각방 - .building li
    let bd = $(".building li");
    // console.log("방수:",bd.length);

    // 대상4: 메시지박스 - .msg
    let msg = $(".msg");

    /////////// 삽입 이미지 변수셋팅 ////////
    // 좀비 이미지 태그
    let mz1 = '<img src="images/mz1.png" alt="좀비1" class="mz">';
    let mz2 = '<img src="images/mz2.png" alt="좀비2" class="mz">';
    let zom = '<img src="images/zom.png" alt="좀비들" class="mz">';
    // 주사기 이미지 태그
    let inj = '<img src="images/inj.png" alt="주사기" class="inj">';

    // 미니언즈 가로위치 보정값
    // 윈도우 가로크기의 5%
    let win5 = $(window).width() * 0.05;
    // console.log("가로크기5%:", win5);
    // width() 가로크기, height() 세로크기
    // -> 단위없는 px값 리턴함

    /****************************************************** 
                    2. 초기화 셋팅
    ******************************************************/

    // 2-1. 버튼셋팅 : 모든버튼을 숨기고 첫번째만 보이게 하기
    btns.hide().first().show();
    // 버튼들을 .숨겨() .첫번째()는 .보여()
    // 주어는 하나! 뒤에 메서드 체인!
    // btns.hide().last().prev().prev().show();

    // 2-2. 빌딩숫자셋팅 : 
    // -> 모든 빌딩 li를 순서대로 돌면서 순번넣기 + 좀비넣기
    bd.each((idx, ele) => {
        // console.log(idx);

        // 1. 각 li요소에 글자넣기(순번)
        $(ele).text(idx);
        // text()메서드는 글자넣기

        // 2. 좀비 + 주사기 넣기
        // append(요소) - 선택요소 내부에 맨뒤추가
        if (idx === 9) $(ele).append(mz1);
        else if (idx === 7) $(ele).append(mz2);
        else if (idx === 1) $(ele).append(zom);
        else if (idx === 2) $(ele).append(inj);

    }); ////////// each /////////////////

    /* 
        [ for문을 사용하지 않고 돌아주는 제이쿼리 메서드 ]

        >>> each(function(idx,ele){구현부})
        >>> each((idx,ele)=>{구현부})

        - 선택요소를 순서대로 돌면서 구현부를 실행함
        - idx 전달변수는 순번이 전달됨(0부터)
          (idx변수명은 내가 지을 수 있고 index를 줄인말)
        - ele 전달변수는 요소자신(this와 동일)
          (ele변수명은 내가 지을 수 있고 element를 줄인말)
        - 전달변수는 순서와 개수가 중요함!
        - 이 메서드를 사용하면 for문을 안써도됨!
    */

    // 2-3. 모든 좀비 숨기기
    $(".mz").hide();
    // 선택요소가 여러개이면 for문을 돌듯이 모두 셋팅됨!

    /****************************************************** 
                3. 버튼별 클릭 이벤트 함수 만들기
    ******************************************************/

    // 3-1. "들어가기" 버튼 ///////////
    btns.first() // 버튼들중 .첫번째()
        .click(function () {
            console.log("들어가기 버튼!");

            // 1. 클릭된 버튼 자신(this) 없애기
            $(this).slideUp(400);
            // slideUp(시간) -> height값이 0되며 애니메이션
            // 반대는 slideDown(시간)

            // 2. 메시지 지우기
            msg.fadeOut(200);
            // fadeOut(시간) -> opacity값이 0되며 애니메이션
            // 반대는 fadeIn(시간)

            // 3. 이동위치정보 : 이동할 빌딩 li의 위치를 알아내기
            // 이동할 li 타겟 -> bd변수(.building li)
            let tg = bd.eq(8); // 8번방
            // eq(순번) -> 선택요소들중 몇번째 요소를 선택
            // eq는 seqence(순서) 라는 단어에서 나온말!
            let tgtop = tg.offset().top; // 화면에서 top값
            let tgleft = tg.offset().left + win5; // 화면에서 left값+보정
            console.log(`top:${tgtop} / left:${tgleft}`);
            /* 
                offset() 메서드 : 요소의 위치나 크기정보를 담고 있음
                offset().top -> 요소의 top값
                offset().left -> 요소의 left값
            */

            // 4. 미니언즈 이동하기
            // 대상: .mi -> mi변수
            // animate({css설정},시간,이징,함수)
            mi.animate({
                    top: tgtop + "px",
                    left: tgleft + "px"
                }, 1000, "easeInCirc", //이징(이름정확히,UI있어야함)
                function () { // 콜백함수(애니후)

                    // 5. 메시지변경
                    msg.text("와~! 아늑하다! 옆방으로 가보자!")
                        .fadeIn(200); //메시지 나타나기!

                    // 6. 다음버튼 보이기
                    btns.eq(1).slideDown(400);

                }); //////////// animate //////////

        }); //// 3-1. '들어가기'버튼 click 끝 ///////

    // 3-2. '옆방으로' 버튼 ///////////////////
    btns.eq(1).click(function () {
        console.log($(this).text(), " 버튼");
        // $(this)는 btns.eq(1)과 같다!
        // text()메서드는 읽어오기도 됨!

        // 1. 자기자신 버튼 없애기
        $(this).fadeOut(200);
        // 서서히 사라짐

        // 2. 메시지 사라지기
        msg.slideUp(200);

        // 3. 이동위치
        // 대상: 9번방
        let tg = bd.eq(9);
        let tgtop = tg.offset().top;
        let tgleft = tg.offset().left + win5;

        // 4. 위치이동
        mi.animate({
                top: tgtop + "px",
                left: tgleft + "px"
            }, 1500, "easeInOutElastic",
            //이징(이름정확히,UI있어야함)
            function () { // 콜백함수
                // 5. 좀비 등장 -> 9번방(tg)에 있는 좀비(.mz)
                tg.find(".mz")
                    .delay(2000)
                    .fadeIn(400, function () { // 콜백함수
                        // 6. 메시지 띄우기
                        msg
                            .html("악!;;;; 좀비!<br>어서피하자!")
                            .fadeIn(200)
                            .css({
                                left: "-134%"
                            });

                        // 7. 다음버튼 보이기 : '윗층으로 도망가!'
                        btns.eq(2).slideDown(300);

                    }); ///////// fadeIn /////////

                // fadeIn(시간,이징,함수)
                // find(요소) 내부요소 찾아선택
                // delay(시간) 애니메이션 앞에서 지연시간
                // html(태그) 내부에 html태그를 넣을때

            }); /////// animate //////////

    }); // 3-2. '옆방으로' 버튼 click 끝 /////////

    // 3-3. '윗층으로 도망가!' 버튼 클릭시 /////////
    btns.eq(2).click(function () {
        console.log($(this).text(), "버튼!");

        // 1. 자기자신 버튼 없애기
        $(this).slideUp(300);

        // 2. 메시지 지우기
        msg.fadeOut(300);

        // 3. 이동위치
        // 대상: 7번방
        let tg = bd.eq(7);
        let tgtop = tg.offset().top;
        let tgleft = tg.offset().left + win5;

        // 4. 위치이동
        mi.animate({
                top: tgtop + "px",
                left: tgleft + "px"
            }, 1000, "easeOutElastic", // 이징
            function () { // 콜백함수
                // 5. 메시지 보이기
                msg.text("여긴 없겠지?")
                    .fadeIn(200);
                // 6. 좀비보이기 : 현재방(tg)에 있는 좀비(.mz)
                tg.find(".mz")
                    .delay(1000)
                    // fadeIn(시간,이징,함수)
                    .fadeIn(1000, //시간
                        "easeInExpo", //이징
                        function () { //함수

                            // 7. 메시지 수정하기
                            msg.text("악! 여기도!!!");

                            // 8. 다음버튼 보이기 : '다시 옆방으로!'
                            btns.eq(3).fadeIn(300);

                        }); //////// fadeIn ///////////

            }); /////// animate ///////////////



    }); // 3-3. '윗층으로 도망가!' 버튼 click 끝 ///////


    // 3-4. '다시 옆방으로!' 버튼 클릭시 ///////
    btns.eq(3).click(function () {
        console.log($(this).text(), "버튼");

        // 1. 자기자신 버튼 없애기
        $(this).slideUp(400);

        // 2. 메시지 지우기
        msg.fadeOut(300);

        // 3. 이동위치
        // 대상: 6번방
        let tg = bd.eq(6);
        let tgtop = tg.offset().top;
        let tgleft = tg.offset().left + win5;

        // 4. 위치이동
        mi.animate({
                top: tgtop + "px",
                left: tgleft + "px"
            }, 1000, "easeInOutElastic", //이징
            function () { // 콜백함수

                // 5. 메시지 보이기
                msg.text("여긴 없겠지?...")
                    .delay(500).fadeIn(200);

                // 6. 다음 메시지 : 2초후 변경
                setTimeout(() => {

                    msg.html("그래도 무서우니까<br>윗층으로 가자!");

                    // 7. 다음버튼 보이기 : '무서우니 윗층으로!'
                    btns.eq(4).fadeIn(200);

                }, 2000); /////// setTimeout //////

            }); //////// animate ////////////

    }); // 3-4. '다시 옆방으로!' 버튼 click 끝 ///////

    // 3-5. '무서우니 윗층으로!' 버튼 클릭시 ///////
    btns.eq(4).click(function () {
        console.log($(this).text(), "버튼");

        // 1. 자기자신 버튼 없애기
        $(this).slideUp(200);

        // 2. 메시지 지우기
        msg.fadeOut(200);

        // 3. 이동위치
        // 대상: 4번방
        let tg = bd.eq(4);
        let tgtop = tg.offset().top;
        let tgleft = tg.offset().left + win5;

        // 4. 위치이동
        mi.animate({
                top: tgtop + "px",
                left: tgleft + "px"
            }, 1000, "easeOutElastic",
            function () { // 콜백함수
                // 5. 메시지 보이기
                msg.empty() // empty() 선택요소 텍스트 지우기
                    .delay(1000)
                    .fadeIn(200, () => {
                        msg.text("무")
                    })
                    .delay(500).fadeIn(200, () => {
                        msg.text("무.")
                    })
                    .delay(500).fadeIn(200, () => {
                        msg.text("무.서")
                    })
                    .delay(500).fadeIn(200, () => {
                        msg.text("무.서.")
                    })
                    .delay(500).fadeIn(200, () => {
                        msg.text("무.서.워")
                    })
                    .delay(500).fadeIn(200, () => {
                        msg.text("무.서.워.")
                    })
                    .delay(500).fadeIn(200, () => {
                        msg.text("무.서.워..")
                    })
                    .delay(500).fadeIn(200, () => {
                        msg.text("무.서.워...")
                    })
                    .delay(500).fadeIn(200, () => { // 콜백함수

                        // 6. 좀비달려오기 
                        // -> 7번방 좀비 : bd.eq(7).find(".mz")
                        bd.eq(7).find(".mz")

                            // 6-1.윗층으로 올라오기
                            .animate({
                                bottom: tg.height() + "px"
                                // -tg.height() -> li의 높이만큼 위로 올라옴
                            }, 500, "easeOutElastic")

                            // 6-2.주인공에게 달려오기
                            .animate({
                                right: tg.width() * 1.2 + "px"
                                // 가로크기만큼 right값주기(보정)
                            }, 2000, "easeOutBounce", () => { // 좀비온후!

                                // 7. 주인공 사색되기(흑백처리)
                                mi.css({
                                    filter: "grayscale(100%)"
                                });

                                // 8. 메시지 지우기
                                msg.hide();

                                // 9. 2초뒤에 좀비되기
                                setTimeout(() => {

                                    // 9-1. 좀비 이미지변경
                                    mi.find("img")
                                        .attr("src", "images/mz1.png");
                                    // attr(속성명,속성값)
                                    // -> 속성값 바꾸는 메서드!
                                    // JS의 setAttribute와 유사!
                                    // 참고) attr(속성명) -> 속성값 가져오기
                                    // -> getAttribute와 유사!

                                    // 9-2. 좀비메시지
                                    msg.html("나도좀비!;;;<br>어서치료주사를!")
                                        .css({
                                            left: "100%"
                                        }) // 메시지위치변경
                                        .fadeIn(400); // 메시지 나타나기

                                    // 10. 다음 버튼 보이기 : '치료주사방으로!'
                                    btns.eq(5).slideDown(300);

                                }, 2000); /// setTimeout ///
                            }); //////////// animate ///////////////

                    }); /////////////// fadeIn /////////////////////////

            }); /////////// animate //////////////


    }); // 3-5. '무서우니 윗층으로!' 버튼 click 끝 ///////

    // 3-6. '치료주사방으로!' 버튼 클릭시 ///////
    btns.eq(5).click(function () {
        console.log($(this).text(), "버튼");

        // 1. 자기자신 버튼 없애기
        $(this).slideUp(200);

        // 2. 메시지 지우기
        msg.fadeOut(200);

        // 3. 이동위치
        // 대상: 2번방
        let tg = bd.eq(2);
        let tgtop = tg.offset().top;
        let tgleft = tg.offset().left + win5;

        // 4. 위치이동
        mi.animate({
            top: tgtop + "px",
            left: tgleft + "px"
        }, 1000, "easeOutElastic", () => {

            // 5. 주사기 돌리기
            // 주의: transform은 animate에서 사용불가!
            // transform은 transition사용!
            $(".inj").css({
                transform: "rotate(-150deg)",
                transition: ".5s ease-out 1s",
                zIndex: "9999" //좀비보다 위!
            }); ////// css ///////////

            // 6. 주사놓은 후(1.5초) 다시 미니언즈2(후유증)
            setTimeout(() => {

                // 6-1. 미니언즈 흑백모드 풀기
                mi.css({
                        filter: "grayscale(0%)"
                    })
                    // 6-2. 새로운 미니언즈 이미지 변경!
                    .find("img").attr("src", "images/m2.png");
                // 6-3. 주사기 제거하기
                $(".inj").remove();
                // remove() 메서드는 태그를 지운다!

                // 7. 메시지 보이기
                msg.text("치료완료!").fadeIn(200)
                    .delay(1000).fadeIn(200, () => {
                        msg.html("이제, 조금만 더<br>가면 탈출이닷!");
                    }); ///////// fadeIn ////////////

                // 8. 다음버튼 보이기 : '3번방으로!'
                btns.eq(6).slideDown(400);

            }, 1500); ///// setTimeout //////////

        }); ///////// animate ////////////////

    }); // 3-6. '치료주사방으로!' 버튼 click 끝 ///////

    // 3-7. '3번방으로!' 버튼 클릭시 ///////
    btns.eq(6).click(function () {
        console.log($(this).text(), "버튼");

        // 1. 자기자신 버튼 없애기
        $(this).slideUp(200);

        // 2. 메시지 지우기
        msg.fadeOut(200);

        // 3. 이동위치
        // 대상: 3번방
        let tg = bd.eq(3);
        let tgtop = tg.offset().top;
        let tgleft = tg.offset().left + win5;

        // 4. 위치이동
        mi.animate({
            top: tgtop + "px",
            left: tgleft + "px"
        }, 1000, () => {

            // 5. 메시지 보이기
            msg.text("어서 윗층으로 가자!").fadeIn(200);

            // 6. 다음버튼 보이기 : '1번방으로!'
            btns.eq(7).slideDown(300);

        }); ///////// animate //////////////

    }); // 3-7. '3번방으로!' 버튼 click 끝 ///////

    // 3-8. '1번방으로!' 버튼 클릭시 ///////
    btns.eq(7).click(function () {
        console.log($(this).text(), "버튼");

        // 1. 자기자신 버튼 없애기
        $(this).slideUp(200);

        // 2. 메시지 지우기
        msg.fadeOut(200);

        // 3. 이동위치
        // 대상: 1번방
        let tg = bd.eq(1);
        let tgtop = tg.offset().top;
        let tgleft = tg.offset().left + win5;

        // 4. 위치이동
        mi.animate({
            top: tgtop + "px",
            left: tgleft + "px"
        }, 1000, "easeInOutBack", () => {

            // 5. 메시지 보이기
            msg.text("이제 곧 탈출이닷!").fadeIn(200);

            // 6. 다음버튼 보이기 : '헬기를 호출!'
            btns.last().slideDown(300);
            // last()는 버튼 중 마지막버튼 선택

        }); ///////// animate //////////////

    }); // 3-8. '1번방으로!' 버튼 click 끝 ///////

    // 3-9. '헬기를 호출!' 버튼 클릭시 ///////
    btns.last().click(function () {
        console.log($(this).text(), "버튼");

        // 1. 자기자신 버튼 없애기
        $(this).slideUp(200);

        // 2. 메시지 지우기
        msg.fadeOut(200);

        // 3. 이동위치
        let tg = bd.eq(0); // 0번방
        let tgtop = tg.offset().top; // 화면에서 top값
        let tgleft = tg.offset().left + win5; // 화면에서 left값(보정)

        // 4. 위치이동
        mi.animate({
            top: tgtop + "px",
            left: tgleft + "px"
        }, 1000, "easeInOutBack", () => {

            // 5. 메시지 보이기
            msg.text("도와줘요~!!!").fadeIn(200);

            // 6. 좀비들 최총추적!!!
            // -> 1번방에 숨겨진 좀비들 -> bd.eq(1).find(".mz")
            bd.eq(1).find(".mz")
                .fadeIn(200, function () { // 콜백함수

                    // 6-1. 좀비들 움직이기
                    $(this).animate({
                        right: tg.width() * 1.3 + "px"
                        // 오른쪽에서 li가로크기의 1.3배만큼 이동애니
                    }, 5000, "easeInOutQuint"); ////// animate /////

                    // 6-2. 헬기등장
                    $(".heli").animate({
                                left: "20%"
                            }, 3000, "easeOutBack",
                            function () { // 콜백함수

                                // 7. 주인공이 헬기에 탄 이미지로 변경!
                                $(this).attr("src", "images/heli2.png");

                                // 8. 주인공 지우기(헬기에 탔으니까!)
                                mi.hide(); // display:none 처리됨!

                            }) /////// animate ///////
                        .delay(1000) // 9. 1초 기다림
                        .animate({ // 10. 오른쪽 끝으로 이동!
                                left: "70%"
                            }, 3000, "easeInOutQuart",
                            function () { // 콜백함수

                                // 11. 헬기 조정사가 좀비로 바뀐 이미지변경
                                $(this).attr("src", "images/heli3.png");

                            }) /////// animate /////
                        .animate({ // 12. 아주 천천히 화면 바깥으로 나감
                                left: "100%"
                            }, 10000, "easeInOutSine",
                            function () { // 콜백함수

                                // 13. 미리 지정한 class를 타이틀에 줘서 간판떨어짐
                                // 대상: .tit
                                let tit = $(".tit");

                                // 1단계 : 간판떨어짐(.on)
                                tit.addClass("on");

                                // 2단계 : 3초후 간판떨어짐(.on2)
                                setTimeout(() => {

                                    // 추가 클래스 넣기
                                    tit.addClass("on2");

                                    // 건물 무너지기 클래스 넣기(.on)
                                    // 대상: .building -> bd변수를 사용해 보자!
                                    // bd변수-> .building li
                                    // 한칸위 부모요소로 올라감 -> parent() 메서드
                                    bd.parent().addClass("on");

                                }, 3000); /// setTimeout ///


                                // [ 제이쿼리에서 클래스 조작하기! ]
                                // addClass(클래스명) - 클래스넣기
                                // removeClass(클래스명) - 클래스지우기
                                // toggleClass(클래스명) - 클래스넣기/지우기
                                // -> JS의 classList 객체의 add,remove,toggle과유사


                            }); ////////// animate //////////////


                }); ///////// fadeIn //////////

        }); //////// animate //////////////

    }); // 3-9. '헬기를 호출!' 버튼 click 끝 ///////




}); //////////////////// jQB ///////////////////////////
////////////////////////////////////////////////////////