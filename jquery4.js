// 속성값 변경
$(function(){
    $("a").attr("href","http://naver.com");
});

// 속성값 가져오기
$(function(){
    $("a").text($("a").attr("href"));
});

// 속성 제거
$(function(){
    $("a").removeAttr("target");
});

// class속성 추가
$(function(){
    $("p").addClass("red");
});

// class속성 제거
$(function(){
    $("p").removeClass("red");
});

// css 제어
$(function(){
    $("p").css("color","red");
});

// css 복수 제어
$(function(){
    $("p").css({
        backgroundColor : "yellow",
        fontWeight : "bold",
        color : "red"
    });
});

// css값 가져오기
$(function(){
    $("p").text($("p").css("color"));
});

// 복수 명령 조합
$(function(){
    // $("p").preppend("<strong>맨앞에 삽입</strong>");
    // $("p").append("<strong>맨뒤에 삽입</strong>");

    // ===

    $("P").preppend("<strong>맨앞에 삽입</strong>").append("<strong>맨뒤에 삽입</strong>");
})