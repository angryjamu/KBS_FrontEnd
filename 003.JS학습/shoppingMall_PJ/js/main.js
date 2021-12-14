// 메인페이지 JS - main.js

//////////////////////// html 로드구역 ////////////////////////
//// html 태그요소 보다 위에 있는 JS를 요소로딩후 실행구역 //////
// load이벤트 / DOMContentLoaded 이벤트 ////
window.addEventListener("DOMContentLoaded", () => {

    // 로딩완료확인
    // console.log("로딩완료!");

    ////////////////////////////////
    // 배너 슬라이드 이동 구현하기 //
    ////////////////////////////////

    // 변경대상: 슬라이드 - #slide
    let slide = document.querySelector("#slide");

    // 변경대상: 블릿박스 li - .indic li
    let indic = document.querySelectorAll(".indic li");
    // console.log("블릿개수:",indic.length);

    // 슬라이드 순번 변수
    let snum = 0;
    // 순서대로 증감하여 -100에 곱하여 left변경함!
    // 0~4 사이값으로 변경함!

    /*********************************** 
        함수명: goSlide
        기능: 슬라이드 이동하기
    ***********************************/
    const goSlide = (dir) => { // dir - 방향구분
        // 1. 함수호출 확인
        // console.log("나야나!",dir);

        // 2. 방향에 따른 분기
        if(dir){ // 1이면 true이므로 오른쪽방향
            snum++; // 1씩증가
            if(snum===5) snum=0;//한계값 - 처음으로!
        } //////// if ///////
        else { // 0이므로 왼쪽방향
            snum--; // 1씩감소
            if(snum===-1) snum=4;//한계값 - 끝으로!
        } //////// else ////////

        // console.log("snum값:",snum);

        // 2. 변경대상: #slide -> slide변수에 할당!
        // 3. 변경내용: 대상의 left값을 -100% 단위로 이동함
        slide.style.left = `${-100*snum}%`;
        slide.style.transition = "left .8s ease-in-out";

        // 4. 추가변경대상: .indic li -> indic변수에 할당

        // 5. 블릿li 클래스 초기화! for of문 사용!
        for(let x of indic) x.classList.remove("on");

        // 6. 변경내용: 슬라이드 순번과 같은 블릿li에 class="on"넣기
        indic[snum].classList.add("on");


       }; //////////// goSlide 함수 ///////////
    ////////////////////////////////////////

    // 이벤트 대상: 이동버튼 .abtn
    let abtn = document.querySelectorAll(".abtn");
    // console.log("버튼개수:", abtn.length);

    // 이동버튼 클릭설정하기 ////////////
    // 왼쪽버튼
    abtn[0].onclick = () => goSlide(0);
    // 오른쪽버튼
    abtn[1].onclick = () => goSlide(1);


}); //////////// load구역 ///////////////////
////////////////////////////////////////////