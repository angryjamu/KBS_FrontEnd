// 서브 페이지 데이타 셋업 JS - sub.js

// 1. Get방식 데이타 읽기 ///
let pm = location.href;

// 2. 파라미터 물음표(?)확인하기
if(pm.indexOf("?")===-1){ 
    // indexOf값이 -1이면 물음표없다!
    alert("메뉴를 클릭하여 접근해주세요~!");
    location.href = "index.html";
} /////////// if /////////////////

// 3. 물음표(?)와 이퀄(=)로 각각 자른후 뒤의 배열값 읽기
pm = pm.split("?")[1].split("=")[1];
console.log("파라미터:",pm);


////// 로딩구역 //////////////////////////////////
window.addEventListener('DOMContentLoaded', ()=>{

    console.log("서브로딩완료!");

    //// Vue JS 데이터 바인딩 코드 /////
    new Vue({
        el: "#cont", // 바인딩할 대상(변경요소 포함 부모요소)
        data: {
            vals: {}, // json 데이터 종류(빈객체형 셋팅)
            catName: pm 
            // 파라미터로 넘어온 값을 Vue 데이터 변수에 넣기
        },
        // Vue 인스턴스가 마운트 되면 실행함수 구역
        mounted: function(){
            // 제이슨 데이터 읽어오고 할당하기
            axios.get("js/data.json") // 읽기
            .then(x=>this.vals=x); // 할당 (x변수로 전달!)
        }
    }); //////////// Vue ////////////////



}); ////////////// 로딩구역 //////////////////