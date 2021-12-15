// 서브 페이지 데이터 셋업 JS - sub.JS


///// 각 서브별 데이터 셋팅하기 /////
let sinfo = {
    "fashion": {
        "제목": "Fashion",
        "메뉴": ["전체", "트렌드", "아이템", "피플", "화보"],
        "경로": "fashion",
        "타이틀": [
            "&lt;고양이를 부탁해&gt;의 20주년 기획전",
            "패션계에서 가장 주목받는 신인 디자이너, 자크무스",
            "서울국제여성영화제 장편 경쟁 한국 영화 4편",
            "드라마 &lt;알고 있지만&gt;의 나비가 유행이라고?",
            "홍콩 누아르 영화 주인공으로 변신한 민주",
            "MSG워너비여, 영원하라!"
        ]
    },
    "beauty": {
        "제목": "Beauty",
        "메뉴": ["전체", "트렌드", "아이템", "헬스", "피플"],
        "경로": "beauty",
        "타이틀": [
            "매실의 놀라운 효능",
            "맥시멀 뷰티의 신세계",
            "브라렛보다 니플 패치?",
            "지금 고쳐야 할 샤워 습관 6",
            "‘급찐살’ 저격! 셀럽들의 비건 식단",
            "팝한 여름 헤어 액세서리 활용법"
        ]
    },
    "living": {
        "제목": "Living",
        "메뉴": ["전체", "여행", "음식", "문화", "인테리어", "키즈", "테크"],
        "경로": "living",
        "타이틀": [
            "파리에 도버 스트리트 ‘리틀’ 마켓이 오픈했다",
            "전망 좋은 홈 오피스",
            "랜선 눈꽃 여행",
            "2021년 새 계절을 위한 새것 모음",
            "눈 호강 제대로, 뉴 호텔 5",
            "고요한 겨울, 호캉스"
        ]
    },
    "people": {
        "제목": "People",
        "메뉴": "없음",
        "경로": "people",
        "타이틀": [
            "아르마니의 시간, 아르마니의 약속",
            "슈퍼모델 나오미 캠벨의 그림 같은 빌라",
            "가구와 오브제를 창조하는 젊은 디자이너 6인",
            "지지와 벨라의 엄마, 욜란다가 말하는 ‘라임병’",
            "성별 고정관념을 깨는 파격 캐스팅",
            "멋쟁이 엄마를 소개합니다"
        ]
    },
    "video": {
        "제목": "Video",
        "메뉴": "없음",
        "경로": "video",
        "타이틀": [
            "발렌시아가의 50th 꾸뛰르 컬렉션 라이브 스트리밍",
            "뉴욕 패션 위크에 소개된 한국 디자이너 브랜드",
            "에디터 제니가 선택한 주얼리는?",
            "디올 FALL-WINTER 2021-2022 레디 투 웨어 컬렉션 라이브 스트리밍",
            "프라다 2021 F/W 시즌 여성복 컬렉션 라이브 스트리밍",
            "발렌시아가 SUMMER 21 (PRE-COLLECTION)"
        ]
    },
    "runway": {
        "제목": "Runway",
        "메뉴": "없음",
        "경로": "runway",
        "타이틀": [
            "<small>Ready To Wear 2021 F/W</small><br>Rick Owens",
            "<small>Ready To Wear 2021 F/W</small><br>We11done",
            "<small>Ready To Wear 2021 F/W</small><br>Comme des Garçons",
            "<small>Ready To Wear 2021 F/W</small><br>Chloé",
            "<small>Ready To Wear 2021 F/W</small><br>Balmain",
            "<small>Ready To Wear 2021 F/W</small><br>Loewe"
        ]
    },
    "shopping": {
        "제목": "Shopping",
        "메뉴": ["전체", "패션", "뷰티", "리빙"],
        "경로": "shopping",
        "타이틀": [
            "여름과 찰떡궁합! 세라믹 바구니",
            "사용할수록 매력적인 테크 제품",
            "취향 있는 플랜터",
            "감사의 마음을 담은, 부모님을 위한 선물",
            "성년을 위한 선물",
            "작고 소중한 아이들을 위한 선물"
        ]
    }
}; ////////// sinfo ////////////////

// 1. GET방식 데이터 읽기 ///
let pm = location.href;
// console.log("파라미터:", pm);

// 2. 파라미터 물음표(?)확인하기
if (pm.indexOf("?") === -1) { // indexOf 값이 -1이면 물음표없다
    alert("메뉴를 클릭하여 접근해주세요");
    location.href = "index.html";
}

// 3. 물음표(?)와 이퀄(=)로 각각 자른후 뒤의 배열값 읽기
pm = pm.split("?")[1].split("=")[1]
// console.log("파라미터:", pm);

// 4. 해당 카테고리 객체값 설정하기
let cinfo = sinfo[pm];
// console.log("카테고리값:", cinfo);

//////// 로딩구역 //////////////////////
window.addEventListener('DOMContentLoaded', () => {
    // console.log("서브로딩완료");

    // 대상선정1 : 메인박스 - .cont
    let cont = document.querySelector(".cont");

    // 대상선정 : 서브타이틀 - .stit
    let stit = document.querySelector(".stit");

    // 대상선정 : 서브메뉴 - .lnb
    let lnb = document.querySelector(".lnb");

    // 대상선정 : 컨텐츠타이틀 - .cbx h2
    let ctit = document.querySelectorAll(".cbx h2");
    // console.log("타이틀개수:",ctit.length)

    /*********************************************** 
        서브 페이지 데이터 셋업하기
    ***********************************************/
    // 1. 서브 타이틀 넣기
    // 대상: .stit -> stit 변수
    stit.innerText = cinfo["제목"];

    // 예외: pm값이 "runway"일 경우 흰글자에 배경처리
    if (pm === "runway") {
        stit.style.color = "white";
        stit.style.background = "url(images/bg_02.jpg) no-repeat center/cover";
    }

    // 2. 서브메뉴 넣기
    let menu = cinfo["메뉴"];
    // console.log("메뉴:",menu);

    // 코드변수
    let tag;

    // "없음"이 아니면 메뉴 만들기
    if (menu !== "없음") {
        // 메뉴 코드만들기
        tag = "<ul>";
        for (let x of menu) {
            tag += `<li><a href="#">${x}</a></li>`;
        }
        tag += "</ul>"

        // 메뉴 코드넣기
        lnb.innerHTML = tag;
    } else { //"없음"일경우
        // lnb메뉴 박스 없애기
        lnb.style.display = "none";
    }

    // 3. 메인 컨텐츠 박스에 카테고리 클래스 넣기
    // -> css 셋업에 따라 서브페이지 컨텐츠박스 배경이미지 나옴
    // 대상: 메인 컨텐츠박스 - .cont -> cont변수
    cont.classList.add(cinfo["경로"]);

    // 4. 각 컨텐츠 박스에 컨텐츠 타이틀 넣기
    // 대상: .cbx h2 -> ctit변수 : 6개

    let seq = 0; //타이틀요소 순번

    // "타이틀" 객체값인 배열만큼 돌아준다
    for (let x of cinfo["타이틀"]) {
        // 각 h2요소 내부에 타이틀글자 넣기
        ctit[seq].innerHTML = x;
        seq++; //1씩증가
    }






})