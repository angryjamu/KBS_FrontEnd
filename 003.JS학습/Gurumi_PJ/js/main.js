// 구르미 갤러리 JS - main.js

////////////////// 로딩구역 /////////////////////
window.addEventListener("DOMContentLoaded", () => {

    // console.log("로딩완료!")

    // 갤러리박스
    let gbx = document.querySelector(".gbx");

    /*********************************************** 
        함수명: goSlide
        기능: 슬라이드 순번을 변경하여 이동함
    ***********************************************/
    const goSlide = (dir) => { // dir  - 방향(1-오른쪽,0-왼쪽)

        // 1. 함수호출확인
        // console.log("바뀌나",dir);

        // 2. 대상선정: .gbx -> gbx변수에 할당

        //  대상 하위 img요소
        let gimg = gbx.querySelectorAll("img");

        // 3. 변경내용

        // 3-1. 오른쪽버튼일 경우 : 맨앞 이미지 맨뒤로
        if(dir) gbx.appendChild(gimg[0]);
        // 3-2. 왼쪽버튼일 경우 : 맨뒤 이미지 맨앞으로
        else gbx.insertBefore(gimg[gimg.length-1],gimg[0]);
    }

    //// 이동버튼 클릭설정하기 /////////
    // 대상: 버튼들 -> .abtn
    let abtn = document.querySelectorAll(".abtn");
    // console.log("버튼갯수:",abtn.length);

    // 오른쪽버튼 클릭시
    abtn[1].onclick = () => goSlide(1);

    // 왼쪽버튼 클릭시
    abtn[0].onclick = () => goSlide(0);

});