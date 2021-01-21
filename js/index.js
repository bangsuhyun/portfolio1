//스크롤 체크
function scrollCheck(){
    var scrolltest = document.body.scrollTop || document.documentElement.scrollTop;
    console.log(scrolltest);
}

//전체 페이지 슬라이드
var pageNum = document.getElementsByClassName('sec_slide');
var slideCnt = 0;
function secChange(num){
    var direction = num - slideCnt;
    var distance = Math.abs(direction);
    if(direction > 0){
        for (i=0; i < distance; i++){
            pageNum[slideCnt + i].style = "display:none";
            pageNum[num].style = "display:block";
        }
        slideCnt = num;
    }else if (direction < 0){
        for (i=0; i < distance; i++){
            pageNum[slideCnt - i].style = "display:none";
            pageNum[num].style = "display:block";
        }
        slideCnt = num;
    }
    for(i=0; i<4; i++){
        document.getElementsByClassName('gnbani')[i].style="animation: gnbpageoff 0.4s forwards";
        document.getElementsByClassName('gnbani')[0].style="display: none;";
    }
        document.getElementsByClassName('gnbani')[num].style="animation: gnbpageon 0.4s forwards";
    for(i=0; i<6; i++){
        document.getElementsByClassName('project_ex')[i].style="display:none;";
    }       
    startPageclear();
}

//전체 페이지 슬라이드 애니메이션
function gnbAnimation1(){
    document.getElementById('gnb_animation_1').style="color:rgb(190,190,190);";
    document.getElementsByClassName('gnbani')[0].style="top:50%";
}
function gnbAnimationOff1(){
    document.getElementById('gnb_animation_1').style="color:rgb(255,255,255);";
}
function gnbAnimation2(){
    document.getElementById('gnb_animation_2').style="color:rgb(190,190,190);";
}
function gnbAnimationOff2(){
    document.getElementById('gnb_animation_2').style="color:rgb(255,255,255);";
}
function gnbAnimation3(){
    document.getElementById('gnb_animation_3').style="color:rgb(190,190,190);";
}
function gnbAnimationOff3(){
    document.getElementById('gnb_animation_3').style="color:rgb(255,255,255);";
}

//프로젝트 슬라이드
var projectNum = 0;
var project = document.getElementsByClassName('project_slide');
function moveNext(){
    if (projectNum != 5) {
        project[projectNum].style = "animation:fade_out_rtl 0.6s forwards"
        project[projectNum + 1].style = "animation:fade_in_rtl 0.6s forwards"
        projectNum++;
        } else {
            project[projectNum].style = "animation:fade_out_ltr_2 0.6s forwards"
            project[projectNum - 1].style = "animation:fade_out_ltr_1 0.6s forwards"
            project[0].style = "animation:fade_out_ltr_0 0.6s forwards"
            projectNum = 0;
        }
        for(i=0; i<6; i++){
            document.getElementsByClassName('project_ex')[i].style="display:none;";
        }
}
function movePrev() {
    if (projectNum != 0) {
    project[projectNum].style = "animation:fade_out_ltr 0.4s forwards"
    project[projectNum - 1].style = "animation:fade_in_ltr 0.4s forwards"
    projectNum--;
    } else {
        project[0].style = "animation:fade_in_rtl_0 0.4s forwards"
        project[project.length - 1].style="animation:fade_in_rtl_2 0.4s forwards"
        projectNum = project.length - 1;
    }
    for(i=0; i<6; i++){
        document.getElementsByClassName('project_ex')[i].style="display:none;";
    }
}

// 프로젝트 슬라이드 -> 내부 상자 호버
function projectWrapOn(){
    //
    document.querySelector('.project_etiqa_wrap h1').style="animation: h1_ani_on 0.4s 0s forwards";
    document.querySelector('.project_netflix_wrap h1').style="animation: h1_ani_on 0.4s 0s forwards";
    document.querySelector('.project_tesla_wrap h1').style="animation: h1_ani_on 0.4s 0s forwards";
    document.querySelector('.project_nike_wrap h1').style="animation: h1_ani_on 0.4s 0s forwards";
    document.querySelector('.project_sml_wrap h1').style="animation: h1_ani_on 0.4s 0s forwards";
    document.querySelector('.project_apple_wrap h1').style="animation: h1_ani_on 0.4s 0s forwards";
    //

    //
    document.getElementsByClassName('project_etiqa_wrap')[0].style="width: 100%; height: 100%; left:0%; top:0%; animation: pjWrapOn 0.4s 0.2s forwards; border:none";
    document.getElementsByClassName('project_netflix_wrap')[0].style="width: 100%; height: 100%; left:0%; top:0%; animation: pjWrapOn 0.4s 0.2s forwards";
    document.getElementsByClassName('project_tesla_wrap')[0].style="width: 100%; height: 100%; left:0%; top:0%; animation: pjWrapOn 0.4s 0.2s forwards";
    document.getElementsByClassName('project_nike_wrap')[0].style="width: 100%; height: 100%; left:0%; top:0%; animation: pjWrapOn 0.4s 0.2s forwards";
    document.getElementsByClassName('project_sml_wrap')[0].style="width: 100%; height: 100%; left:0%; top:0%; animation: pjWrapOn 0.4s 0.2s forwards";
    document.getElementsByClassName('project_apple_wrap')[0].style="width: 100%; height: 100%; left:0%; top:0%; animation: pjWrapOn 0.4s 0.2s forwards";
}
function projectWrapOff(){
        //
        document.querySelector('.project_etiqa_wrap h1').style="animation: h1_ani_off 0.4s 0s forwards";
        document.querySelector('.project_netflix_wrap h1').style="animation: h1_ani_off 0.4s 0s forwards";
        document.querySelector('.project_tesla_wrap h1').style="animation: h1_ani_off 0.4s 0s forwards";
        document.querySelector('.project_nike_wrap h1').style="animation: h1_ani_off 0.4s 0s forwards";
        document.querySelector('.project_sml_wrap h1').style="animation: h1_ani_off 0.4s 0s forwards";
        document.querySelector('.project_apple_wrap h1').style="animation: h1_ani_off 0.4s 0s forwards";
        //
        
        //
    document.getElementsByClassName('project_etiqa_wrap')[0].style="width: 50%; height: 60%; left:25%; top:20%; animation: pjWrapOff 0.4s forwards; border: 3px solid rgb(37,37,37);";
    document.getElementsByClassName('project_netflix_wrap')[0].style="width: 50%; height: 50%; left:25%; top:25%; animation: pjWrapOff 0.4s forwards";
    document.getElementsByClassName('project_tesla_wrap')[0].style="width: 50%; height: 50%; left:25%; top:25%; animation: pjWrapOff 0.4s forwards";
    document.getElementsByClassName('project_nike_wrap')[0].style="width: 50%; height: 50%; left:25%; top:25%; animation: pjWrapOff 0.4s forwards";
    document.getElementsByClassName('project_sml_wrap')[0].style="width: 50%; height: 50%; left:25%; top:25%; animation: pjWrapOff 0.4s forwards";
    document.getElementsByClassName('project_apple_wrap')[0].style="width: 50%; height: 50%; left:25%; top:25%; animation: pjWrapOff 0.4s forwards";
}
var projectExCnt = document.getElementsByClassName('project_ex');//상세설명 초기화 카운트

// 프로젝트 상세 설명 열기
function projectOpen(num){
    projectExCnt[num].style="display:block";
    //닫는버튼 추가,

    //스크롤 자동 이동
    window.scroll(0,900);
    //자동 이동 후 텍스트, 이미지 애니메이션


    //서브 페이지서도 작동
    
    //슬라이드 이동 시 에도 닫히도록 슬라이드 전체에 코드 추가

}

//자세히 보기 버튼 호버
function viewOn(){
    for(i=0; i<6; i++){
        document.getElementsByClassName('viewOnOff')[i].style="font-size: 24px; font-weight: 700;";
    }
}
function viewOff(){
    for(i=0; i<6; i++){
        document.getElementsByClassName('viewOnOff')[i].style="font-size: 16px; font-weight: 1;";
    }
}


//모바일 네비게이션
// function gnbMon(){
//     document.getElementById('gnb_moblie_line_1').style="animation: line1On 0.4s forwards;";
//     document.getElementById('gnb_moblie_line_2').style="animation: line2On 0.4s forwards;";
//     document.getElementById('gnb_moblie_line_3').style="animation: line3On 0.4s forwards;";
// } //마우스 호버
// function gnbMoff(){
//     document.getElementById('gnb_moblie_line_1').style="animation: line1Off 0.4s forwards;";
//     document.getElementById('gnb_moblie_line_2').style="animation: line2Off 0.4s forwards;";
//     document.getElementById('gnb_moblie_line_3').style="animation: line3Off 0.4s forwards;";
// } //마우스 아웃
var gnbopencnt=0;
function gnbMopenclose(){
    if(gnbopencnt==0){
        document.getElementById('gnb_page').style="animation: gnbOpen 0.3s forwards;";
        document.querySelector('.gnb_page_pos li:nth-child(1)').style="animation: gnbh3on 0.2s 0.4s forwards;";
        document.querySelector('.gnb_page_pos li:nth-child(2)').style="animation: gnbh3on 0.6s 0.4s forwards;";
        document.querySelector('.gnb_page_pos li:nth-child(3)').style="animation: gnbh3on 1s 0.4s forwards;";
        document.getElementById('gnb_moblie_line_1').style="animation: line1On 0.4s forwards;";
        document.getElementById('gnb_moblie_line_2').style="animation: line2On 0.4s forwards;";
        document.getElementById('gnb_moblie_line_3').style="animation: line3On 0.4s forwards;";
        gnbopencnt++;
    }
    else{
        document.getElementById('gnb_page').style="animation: gnbClose 0.3s forwards;";
        document.querySelector('.gnb_page_pos li:nth-child(1)').style="animation: gnbh3off 8s 0.4s forwards;";
        document.querySelector('.gnb_page_pos li:nth-child(2)').style="animation: gnbh3off 8s 0.4s forwards;";
        document.querySelector('.gnb_page_pos li:nth-child(3)').style="animation: gnbh3off 8s 0.4s forwards;";
        document.getElementById('gnb_moblie_line_1').style="animation: line1Off 0.4s forwards;";
        document.getElementById('gnb_moblie_line_2').style="animation: line2Off 0.4s forwards;";
        document.getElementById('gnb_moblie_line_3').style="animation: line3Off 0.4s forwards;";
        gnbopencnt=0;
    }

}

//시작 페이지 초기화
function startPageclear(){
    document.querySelector('body').style="background-image: none;";
}

//시작 페이지 아이콘 호버
function mainemailOn(){
    document.getElementsByClassName('main_comu_email')[0].style="opacity:1";
}
function mainemailOff(){
    document.getElementsByClassName('main_comu_email')[0].style="opacity:0";
}
function maingitOn(){
    document.getElementsByClassName('main_comu_git')[0].style="opacity:1";
}
function maingitOff(){
    document.getElementsByClassName('main_comu_git')[0].style="opacity:0";
}
function mainkaOn(){
    document.getElementsByClassName('main_comu_kakao')[0].style="opacity:1";
}
function mainkaOff(){
    document.getElementsByClassName('main_comu_kakao')[0].style="opacity:0";
}



//////////////////////////////////////////////////////////////////////////////////////////////////////////                   /////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
//프로젝트 페이지 애니메이션
// function projectImgOn(){
//         document.querySelector('.project_flex li span').style="opacity:1; animation: text_opacity 1s forwards;";
//         document.querySelector('.project_flex img').style="animation: span_up 0.4s forwards";
// }
// function projectImgOff(){
//     document.querySelector('.project_flex li span').style="opacity:0;";
//     document.querySelector('.project_flex img').style="animation: span_down 0.4s forwards";
// }

// //애플 온
// function appleOpen(){
//     document.querySelector('.apple_link').style="display: block;";
// }
// //애플 오프
// function appleClose(){
//     document.querySelector('.apple_link').style="display: none;";
// }