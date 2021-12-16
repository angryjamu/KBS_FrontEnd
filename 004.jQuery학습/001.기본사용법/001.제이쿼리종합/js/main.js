// 제이쿼리 기본 JS - main.js 
// 제이쿼리 기본 JS - main.js 

//////////////// 제이쿼리 로드구역 //////////////////////
$(function () { ////////// jQB ///////////////////////////

    console.log("제이쿼리 로딩완료");

    /*************************************************************************** 
                              1. 대상선정 변수할당
    ***************************************************************************/
    // 대상1: 버튼 - .btns>button    
    let btns = $(".btns>button");
    // console.log("버튼개수:",btns.length);

    // 대상2: 미니언즈 - .mi
    let mi = $(".mi");

    // 대상3: 빌딩 각방 - .building
    let bd = $(".building li");
    // console.log("방수:",bd.length);

    // 대상4: 메세지박스 - .msg
    let msg = $(".msg");

    // 삽입 이미지 변수셋팅
    // 좀비 이미지 태그요소
    let mz1 = '<img src="images/mz1.png" alt="좀비1" class="mz">';
    let mz2 = '<img src="images/mz2.png" alt="좀비2" class="mz">';
    let zom = '<img src="images/zom.png" alt="좀비들" class="mz">';
    // 주사기 이미지 태그
    let inj = '<img src="images/inj.png" alt="주사기" class="inj">';

    // 미니언즈 가로위치 보정값
    // 윈도우 가로크기의 5%
    let win5 = $(window).width() * 0.05;
    console.log("가로크기5%:", win5);

    /*************************************************************************** 
                             2. 초기화 셋팅
    ***************************************************************************/

    // 2-1. 버튼셋팅 : 모든버튼을 숨기고 첫번째만 보이게 하기
    btns.hide().first().show();
    // 버튼들을 .숨겨() .첫번째()는 .보여()
    // 주어는 하나! 뒤에 메서드 체인

    // 2-2. 빌딩숫자셋팅 : 모든 빌딩 li를 순서대로 돌면서 순번넣기+좀비넣기
    bd.each((idx, ele) => {
        // console.log(idx)

        // 1. 각 li요소에 글자넣기(순번)
        $(ele).text(idx);
        // text()메서드는 글자넣기

        // 2. 좀비 + 주사기 넣기
        // append(요소) - 선택요소 내부에 맨뒤추가
        if (idx === 9) $(ele).append(mz1);
        else if (idx === 7) $(ele).append(mz2);
        else if (idx === 1) $(ele).append(zom);
        else if (idx === 2) $(ele).append(inj);
    }); ////////////////////each//////

    /* 
        [ for문을 사용하지 않고 돌아주는 제이쿼리 메서드 ]

        >>> each(function(idx,ele){구현부})
        >>> each((idx,ele)=>{구현부})

        - 선택요소를 순서대로 돌면서 구현부를 실행함
        - idx 전달변수는 순번이 전달됨(0부터)
            (idx변수명은 내가 지을 수 있고 index를 줄인말)
        - ele 전달변수는 요소자신(this와 동일)
            (ele변수명은 내가 지을 수 있고 element를 줄인말)
        - 전달변수는 순서와 개수가 중요함
        - 이 메서드를 사용하면 for문을 안써도됨
    */

    // 2-3. 모든 좀비 숨기기
    $(".mz").hide();
    // 선택요소가 여러개이면 for문을 돌듯이 모두 셋팅함

    /*************************************************************************** 
                         3. 버튼별 클릭 이벤트 함수 만들기
    ***************************************************************************/

    // 3-1. "들어가기" 버튼 /////////
    btns.first().click(function () {
        // console.log("들어가기버튼");

        // 1. 클릭된 버튼 자신(this) 없애기
        $(this).slideUp(400);
        // slideUp(시간) -> height값이 0되며 애니메이션
        // 반대는 slideDown(시간)

        // 2. 메시지 지우기
        msg.fadeOut(200);
        // fadeOut(시간) -> opacity값이 0되며 애니메이션
        //반대는 fadeIn(시간)

        // 3. 이동위치정보 : 이동할 빌딩 li의 위치를 알아내기
        // 이동할 li 타겟 -> bd변수(.building li)
        let tg = bd.eq(8) //8번방
        // eq(순번) -> 선택요소들 중 몇번째 요소를 선택
        // eq는 seqence(순서) 라는 단어에서 나온말
        let tgtop = tg.offset().top; // 화면애서 top값
        let tgleft = tg.offset().left + win5; // 화면에서 left값
        // console.log(`top:${tgtop} / left:${tgleft}`)
        /* 
            offset() 메서드: 요소의 위치나 크기정보를 담고 있음
            offset().top -> 요소의 top값
            offset().left -> 요소의 left값
        */

        // 4. 미니언즈 이동하기
        // 대상: .mi -> mi변수
        // animate({css설정},시간,이징,함수)
        mi.animate({
            top: tgtop + "px",
            left: tgleft + "px"
        }, 1000, "easeOutCubic", () => { //콜백함수(애니후)

            // 5. 메시지변경
            msg.text("우왕 집이당~~!옆방으로 가보장^^")
                .fadeIn(200); //메세지 나타나기

            // 6. 다음버튼 보이기
            btns.eq(1).slideDown(400);


        });

    });

    // 3-2. '옆방으로' 버튼///////////
    btns.eq(1).click(function () {
        console.log($(this).text(), "버튼");
        // $(this)는 btns.eq(1)과 같다
        // text()메서드는 읽어오기도 됨

        // 1. 자기자신 버튼 없애기
        $(this).fadeOut(200);
        // 서서히 사라짐

        // 2. 메시지 사라지기
        msg.slideUp(200);

        // 3. 이동위치
        // 대상: 9번방
        let tg = bd.eq(9);
        let tgtop = tg.offset().top
        let tgleft = tg.offset().left + win5

        // 4. 위치이동
        mi.animate({
                top: tgtop + "px",
                left: tgleft + "px"
            }, 500, "easeInElastic", //이징
            function () { //콜백함수
                // 5. 좀비 등장 -> 9번방(tg)에 있는 좀비(.mz)
                tg.find(".mz").delay(2000).fadeIn(400, function () { //콜백함수
                    // 6. 메시지 띄우기
                    msg.html("끄아아아아! <br> ㅠㅠ피하자ㅠㅠ").fadeIn(200).css({
                        left: "-134%"
                    });

                    // 7. 다음버튼 보이기 : '윗층으로 도망'
                    btns.eq(2).slideDown(300);


                }); // fadeIn //

                // fadeIn(시간,이징,함수)
                // find(요소) 내부요소 찾아선택
                // delay(시간) 애니메이션 앞에서 지연시간

            })

    })

    // 3-3. '윗층으로 도망가' 버튼 클릭시
    btns.eq(2).click(function () {
        console.log($(this).text(), "버튼");

        // 1. 자기자신 지우기
        $(this).fadeOut(200);

        // 2. 메시지 사라지기
        msg.fadeOut(300);


        // 3. 이동위치
        // 대상: 7번방
        let tg = bd.eq(7);
        let tgtop = tg.offset().top
        let tgleft = tg.offset().left + win5

        // 4. 위치이동
        mi.animate({
                top: tgtop + "px",
                left: tgleft + "px"
            }, 1000, "easeOutElastic",
            function () {

                // 5. 메시지 보이기
                msg.text("여긴없지?")
                    .fadeIn(200);

                // 6. 좀비보이기 : 현재방(tg)에 있는 좀비(.mz)
                tg.find(".mz").delay(1000).fadeIn(1000, "easeInOutBounce", function () {

                    // 7. 메시지 수정하기
                    msg.text("악 여기도오오옷!");

                    // 8. 다음버튼 보이기 : '다시옆방으로'
                    btns.eq(3).fadeIn(300);

                });
            });

    });

    // 3-4. '다시옆방으로' 버튼 클릭시
    btns.eq(3).click(function () {
        // console.log($(this).text(), "버튼");

        // 1. 자기자신 버튼 없애기
        $(this).slideUp(400);

        // 2. 메시지 사라지기
        msg.fadeOut(300);

        // 3. 이동위치
        // 대상: 6번방
        let tg = bd.eq(6);
        let tgtop = tg.offset().top
        let tgleft = tg.offset().left + win5


        // 4. 위치이동
        mi.animate({
                top: tgtop + "px",
                left: tgleft + "px"
            }, 1000, "easeInOutElastic",
            function () {

                // 5. 메시지 보이기
                msg.text("여긴없지?ㅜㅜ")
                    .delay(500).fadeIn(200);

                // 6. 다음 메시지 : 2초후 변경
                setTimeout(() => {
                    msg.html("그래도 무서우니까 <br> 윗층gogo!");

                    // 7. 다음버튼 보이기 : '무서우니 윗층으로!'
                    btns.eq(4).fadeIn(200);

                }, 2000);

            })
    })
    // 3-5. ''무서우니 윗층으로!'' 버튼 클릭시
    btns.eq(4).click(function () {
        // console.log($(this).text(), "버튼");

        // 1. 자기자신 버튼 없애기
        $(this).slideUp(400);

        // 2. 메시지 사라지기
        msg.fadeOut(300);

        // 3. 이동위치
        // 대상: 4번방
        let tg = bd.eq(4);
        let tgtop = tg.offset().top
        let tgleft = tg.offset().left + win5

        // 4. 위치이동
        mi.animate({
                top: tgtop + "px",
                left: tgleft + "px"
            }, 1000, "easeOutExpo",
            function () {


            })
    })



}); //////////////////// jQB ///////////////////////////
////////////////////////////////////////////////////////