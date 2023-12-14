// script.js 파일에 추가 또는 수정
function showIconsForCollege(college) {
    // 해당하는 학부 버튼 클릭시 이미지 아이콘 보이도록 설정
    const buttons = document.querySelectorAll('.history_image_button');
    buttons.forEach(button => button.classList.add('history_hidden'));

    const collegeButtons = document.querySelectorAll(`[data-college="${college}"]`);
    collegeButtons.forEach(button => button.classList.remove('history_hidden'));

    // 추가로 모든 학부 버튼 숨기도록 설정
    const allCollegeButtons = document.querySelectorAll('.colleges_button');
    allCollegeButtons.forEach(button => button.classList.add('colleges_hidden'));
}

// sungdeok 건물 정보를 띄우기 위한 함수 추가
function showSungdeokInfo() {
    updateModalContent('Sungdeok');
}
function showBairdInfo() {
    updateModalContent('Baird');
}
function showMunhwaInfo() {
    updateModalContent('Munhwa');
}
function showAnikteaInfo() {
    updateModalContent('Aniktea');
}
function showHyungnamInfo() {
    updateModalContent('Hyungnam');
}
function showEducationInfo() {
    updateModalContent('Education');
}
function showWhitehorseInfo() {
    updateModalContent('Whitehorse');
}
function showHanKyeongJikInfo() {
    updateModalContent('HanKyeongJik');
}
function showSinyangInfo() {
    updateModalContent('Sinyang');
}
function showVentureInfo() {
    updateModalContent('Venture');
}
function showJinliInfo() {
    updateModalContent('Jinli');
}
function showJomansikInfo() {
    updateModalContent('Jomansik');
}
function showChristianMuseumInfo() {
    updateModalContent('ChristianMuseum');
}
function showLibraryInfo() {
    updateModalContent('Library');
}
function showComputerScienceInfo() {
    updateModalContent('ComputerScience');
}
function showFutureInfo() {
    updateModalContent('Future');
}
function showInformationScienceInfo() {
    updateModalContent('InformationScience');
}
function showWestminsterInfo() {
    updateModalContent('Westminster');
}
function showStudentCenterInfo() {
    updateModalContent('StudentCenter');
}


function showAmenityInfo1() {
    updateModalContent2('Hyungnam');
}
function showAmenityInfo2() {
    updateModalContent2('Sungdeok');
}
function showAmenityInfo3() {
    updateModalContent2('global');
}
function showAmenityInfo4() {
    updateModalContent2('StudentCenter');
}
function showAmenityInfo5() {
    updateModalContent2('Jomansik');
}



// 나머지 함수들은 그대로 유지

function showHistoryButtons() {
    showButtonGroup('.history_image_button', ['.colleges_button', '.amenities_image_button']);
}

function showCollegesButtons() {
    showButtonGroup('.colleges_button', ['.history_image_button', '.amenities_image_button']);
}

function hideImageButtons() {
    showButtonGroup('.amenities_image_button', ['.history_image_button', '.colleges_button']);
}

function showButtonGroup(showClass, hideClasses) {
    document.querySelectorAll(showClass).forEach(button => button.classList.remove('history_hidden', 'colleges_hidden', 'amenities_hidden'));
    hideClasses.forEach(className => {
        document.querySelectorAll(className).forEach(button => button.classList.add('history_hidden'));
    });
}

function updateModalContent(buildingKey) {
    const buildingInfo = getBuildingInfo(buildingKey);

    document.getElementById('buildingImage').src = buildingInfo.image;
    document.getElementById('buildingTitle').innerText = buildingInfo.name;
    document.getElementById('facility').innerText = '시설 : ' + buildingInfo.facility;
    document.getElementById('story').innerText = '스토리 : ' + buildingInfo.story;
    document.getElementById('introduction').innerText = '소개 : ' + buildingInfo.introduction;
}
function updateModalContent2(buildingKey) {
    const buildingInfo = getBuildingInfo2(buildingKey);

    document.getElementById('amenitiesInformation').innerText = buildingInfo.information;
}

function getBuildingInfo2(buildingKey) {
    const informationData = {
        Sungdeok: {
            information: '1층에 편의점 위치함.'
        },
        Hyungnam: {
            information: '2층에 편의점 위치함.'
        },
        Jomansik: {
            information: '2층에 편의점 위치함.'
        },
        StudentCenter: {
            information: '4층에 편의점 위치함.'
        },
        global: {
            information: '1층에 편의점 위치함.'
        },
    };
    return informationData[buildingKey];
}

function getBuildingInfo(buildingKey) {
    const buildingData = {
        Baird: {
            image: 'baird.png',
            name: '베어드홀',
            facility: '대학본부, 자연과학대학의 각종 실험실, 교수 연구실',
            story: '신축 과학관을 베어드 박사의 이름을 따서 베어드홀로 변경',
            introduction: '1988년 지상 5층 지하1층으로 지어진 신축 과학관은 유리거울로 된 창과 신체장애자 이용을 최대한 배려한 구조로 지어졌으며, 한국 건축문화 발전에 기여한 공로로 한국건축작가협회상을 수상하였다. 평양 숭실캠퍼스 당시 최고의 실습기자재와 전문 교육시설을 완비한 ‘과학관(Science Hall)’의 명칭을 그대로 사용하였으나, 현재는 베어드 박사의 이름을 따 베어드홀이라 부른다. 최신 설비를 갖춘 자연과학대학의 각종 실험실과 교수연구실이 입주하고 일부는 대학본부 사무실로 사용하고 있다.'
        },
        Sungdeok: {
            image: 'sungdeok.png',
            name: '숭덕경상관',
            facility: '경제통상대학, 경영대학 강의실, 일반 강의실, 행정실, 교수실',
            story: '철거된 경상관 공간을 대체하는 건물로서 2019년에 신축되었음. 경영·경통대 학생회실도 갖추고 있음',
            introduction: '숭덕경상관은 2019년 신축된 건물이다. 1964년 캠퍼스 공간 설계에 의해 세워졌던 경상관을 허물고 신축된 건물로서, 경영·경통대 수업 공간과 교수들의 연구동으로 주로 이용되고 있다. 학생 휴게 공간 및 편의시설이 충분히 갖춰져 있고, 특히 외국이 유학생들의 고충을 상시 도울 수 있는 외국인 유학생 전용 사무실도 마련되어 있다.'
        },
        Munhwa: {
            image: 'culture.png',
            name: '문화관',
            facility: '과학교육시설, 교수연구실',
            story: '제 2공학관으로 불리다가 현재 문화관으로 불림',
            introduction: '과학교육에 중점을 두어 산업건설의 역군을 양성하는데 심혈을 기울이던 숭실은 1971년 8월 총 건평 1,270평, 5층의 제 2공학관을 완공하였다. 당시 최신식 실험기자재와 각종 기계 시설을 도입, 과학교육을 위한 완벽한 시설을 갖추게 되었다. 제 2공학관으로 불리다가 현재는 문화관으로 불리고 있다.'
        },
        Aniktea: {
            image: 'ahn.png',
            name: '안익태기념관',
            facility: '강의실',
            story: '애국가를 작곡한 안익태 선생님을 기념하며 지음',
            introduction: '건물 외관에 애국가 악보와 애국가 한 소절이 있으며, 숭실대 출신으로 애국가를 작곡한 안익태 선생님을 기념하며 지어진 건물이다'
        },
        Hyungnam: {
            image: 'engineer.png',
            name: '형남공학관',
            facility: '공과대학 실험실, 강의실, 매점',
            story: '숭실대 이사장 및 총장을 역임했던 김형남 박사의 이름을 따서 형남공학관으로 이름을 붙임',
            introduction: '숭실대 이사장 및 총장을 역임했던 김형남 박사의 이름을 따서 형남공학관으로 이름붙였으며, 지하 1층, 지상 15층으로 구성되어 있다. 15층에서는 63빌딩 및 한강, 남산타워까지 볼 수 있다.'
        },
        Education: {
            image: 'education.png',
            name: '교육관',
            facility: '제136학군단 본부, 훈육관실',
            story: '교육관은 군사교육이 병행되던 1970년대 대학캠퍼스의 상징적인 건물',
            introduction: '교육관은 군사교육이 병행되던 1970년대 대학캠퍼스의 상징적인 건물로, 지하1층 지상3층 규모로 신축되었다. 제 136학군단 본부 건물로 사용되는 한편, 교련 체육교육 공간으로 활용되었다.'
        },
        Whitehorse: {
            image: 'whitehorse.png',
            name: '백마관',
            facility: '강의실, 교수연구실, 축구부 숙소',
            story: '백마관을 건립함으로써 1단대 1건물 실현',
            introduction: '1993년도 9월 준공한 건물로 법과대학으로 사용되었었다. 부족한 강의실과 교수실 및 축구부 숙소를 마련하기 위해 지하1층, 지상3층, 총건평 925평 규모로 건립함으로써, ‘1단대 1건물’을 실현을 가능케 하였다.'
        },
        HanKyeongJik: {
            image: 'han.png',
            name: '한경직기념관',
            facility: '예배실, 전시실',
            story: '한경직목사의 공로를 기념하고 그의 사업을 계승,발전시켜 나가고 학생들을 교육하는 채플을 마련하기 위해 건립',
            introduction: '한경직기념관은 평양 숭실 동문이자 본교 재건의 주역으로 제1대 학장, 제5대 이사장으로서 숭실의 재건과 중흥을 위해 진력해 온 한경직 목사의 공로를 기념하고 또 그가 한국 교계 지도자로서 일평생 힘써온 사업을 계승, 발전시켜 나가기 위해, 그리고 초교파적 선교정책을 모색하고 실천에 옮기는 선교센터 및 미래 우리나라의 주인공들을 교육하는 채플을 마련하기 위한 목적에서 건립되었다.'
        },
        /*Sinyang: {
            image: 'baird.png',
            name: '신양관',
            facility: '입학처, 학사팀, 교직원 식당, 구내 서점, 우리은행, 우체국, 복사/출력(유료) 등의 편의시설',
            story: '신양관의 명칭은 평양신양 마을에서 따옴',
            introduction: '신양관의 명칭은 근대 대학교육의 요람자이자 숭실이 최초로 터를 잡은 평양신양 마을에서 따왔다. 원래 신양(新陽)의 뜻은 한자 의미 그대로 ‘볕이 가득한 곳에 새로 이루다’라는 의미이며, 기독교세와 민족의식이 강했던 이곳 신양리에서 숭실의 역사는 시작되었고 한국 근대 고등교육이 출범하였다. 현재, 숭실이 자리잡았던 신양터는 북한 만수대의사당이 자리잡고 있다.도서관 앞 옛 민주계단 자리에 자리잡은 신양관 전경으로, 1998년 10월 준공되었다. 숭실도담(식당), 서점, 매점등 각종 편의시설이 입주해 있다.'
        },*/
        Venture: {
            image: 'venture.png',
            name: '벤처중소기업센터',
            facility: '중소기업학과와 중소기업대학원의 각종 강의실, 창업기업실, 교수연구실',
            story: '한국 최초로 중소기업학과와 중소기업대학원을 설립',
            introduction: '한국 최초로 중소기업학과와 중소기업대학원을 설립하여 중소기업분야의 인재를 집중 양성하고 있다. 그 중추적 역할을 담당할 목적으로 2001년 지하 1층 지상 7층 약 2,700평 규모의 벤처 중소기업센터를 신축했다.'
        },
        Jinli: {
            image: 'truth.png',
            name: '진리관',
            facility: '인문-사회계열 강의실, 매점등의 편의 시설',
            story: '1978년 도서관으로 사용 , 1982년 인문관으로 사용 , 현재 진리관으로 사용',
            introduction: '1967년 신축하여 1978년 증축하여 도서관으로 쓰이다 1982년 인문관으로 사용하였다. 현재는 리모델링으로 세련된 모습을 하여 진리관으로 사용하고 있다.'
        },
        Jomansik: {
            image: 'jo.png',
            name: '조만식기념관',
            facility: '인문-사회계열 강의실, 교수연구실',
            story: '숭실대 동문인 민족의 지도자 조만식 선생님을 기념하며 세워진 건물',
            introduction: '숭실대 동문인 민족의 지도자 조만식 선생님을 기념하며 세워진 건물로, 인문-사회계열 강의실과 연구실이 있다.'
        },
        ChristianMuseum: {
            image: 'christ.png',
            name: '한국기독교박물관',
            facility: '전시실, 학예과 연구실',
            story: '1967년 김양선 교수(사학과)의 기증유물로 구채플에서 개관 , 1976년 단독 목적건물로 운영 , 2004년 초현대식 박물관으로 개관',
            introduction: '1967년 김양선 교수(사학과)의 기증유물로 구채플에서 개관하였고, 1976년 국내 대학 최초로 단독 목적건물로 이전하여 운영되어 오다가 2004년 4월 최고의 보존환경과 설비를 갖춘 초현대식 박물관으로 이전 개관하였다. 지상3층에 4개의 전시실, 지하2층에 학예과, 연구실 등이 자리잡고 있다.'
        },
        Library: {
            image: 'library.png',
            name: '중앙도서관',
            facility: '서고, 열람실, 숭실마루(카페 및 휴게공간)',
            story: '1967년 634평의 독립건물로 운영 , 1983년 2768평 6층건물로 이전',
            introduction: '1967년 634평의 독립건물을 지어 운영되던 도서관은 교육규모가 확대되어 가자 건평 2,768평 6층 건물을 긴축하여 1983년에 이전하였다. 중앙도서관은 개관 당시 2,041석의 현대식 시설을 갖추고 학생들의 학업향상에 크게 기여하였다.'
        },
        //전산관
        ComputerScience: { 
            image: 'computerscience.png',
            name: '전산관',
            facility: '매점, 교직원 식당, 교수 연구실, 강의실 및 실습실',
            story: '전자계산 기술 인력 양성을 위하여 전자계산원을 설립',
            introduction: '전산교육의 메카로 자리잡아온 본교는 1979년 전자계산 기술 인력 양성을 위하여 전자계산원을 설립하였고, 1980년 지상 2층으로 준공하였다. 이후 1984년 4층으로 층축되었고, 1990년대 1층이 추가 증축되어 현재는 5층에 이르고 있다.'
        },  
        Future: { 
            image: 'future.png',
            name: '미래관',
            facility: '강의실',
            story: '1972년 10월 개교 75주년 기념사업의 일환으로 착공, 1973년 12월 준공',
            introduction: '학생자치활동 공간으로 1972년 10월 개교 75주년 기념사업의 일환으로 착공되어 1973년 12월 지하 1층, 지상 5층, 연건평 1,430평 규모로 준공되었다.'
        },  
        InformationScience: { 
            image: 'infoscience.png',
            name: '정보과학관',
            facility: 'IT대학 실습실, 강의실, 교수연구실',
            story: '컴퓨터 전문교육실현을 목적으로 신축',
            introduction: '정보과학관은 1995년 컴퓨터 전문교육실현을 목적으로 신축되었다. 현재 정보과학 교육의 전용공간으로 활용되고 있다.'
        },  
        Westminster: { 
            image: 'west.png',
            name: '웨스터민스터홀',
            facility: '일반대학원 및 특수대학원',
            story: '웨스트민스터 채플이라 불리었던 구채플관 이름을 따서 웨스트민스터홀로 명명',
            introduction: '웨스트민스터홀 자리에 있던 구채플관(웨스트민스터채플)이 건축 당시 미국 디트로이트 소재 웨스트민스터 교회의 기금으로 건축되어 ‘웨스트민스터채플’이라 불리었고, 이를 따서 웨스트민스터홀로 명명하게 되었다. 일반대학원 및 특수대학원이 위치해 있다.'
        },
        StudentCenter: { 
            image: 'studentcenter.png',
            name: '학생회관',
            facility: '사무공간, 학생회, 동아리, 학생식당, 편의시설',
            //story: '웨스트민스터 채플이라 불리었던 구채플관 이름을 따서 웨스트민스터홀로 명명',
            introduction: '학생회관은 지하2층, 지상5층으로 건축되었다. 사무공간, 학생회, 동아리, 편의시설, 문화공간이 들어섰고 동선이 충돌되지 않도록 기능적으로 배치되었다. 중앙잔디 광장 인근에 위치해 있어 학생들이 동아리와 체육활동을 하층 편리하게 이용할 수 있다. 또한 자연 환기가 원활하고 채광이 잘 들도록 대지와 건물 사이에 틈을 주었고 레벨 차를 이용한 공간구성도 돋보인다.'
        },    
        // 예찬아 여기에 다른 건물 정보들 추가하면돼. html에서는 onclick="showBairdInfo()"와 같은 클래스로 정리하면 돼.
    };

    return buildingData[buildingKey];
}