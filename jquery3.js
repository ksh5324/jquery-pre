// text변경
$(function(){
    $("p#first").text("변경후");
});

// text 가져오기 $("p#first").text();
$(function(){
    $("p#second").text($("p#first").text());
});

// HTML변경
$(function(){
    $("p#first").html("<strong>변경후</strong>");
});

// HTML가져오기
$(function(){
    $("p#first").html();
});

// HTML삽입
$(function(){
    $("p#first").prepend("<strong> 앞부분에 삽입 </strong>");
});

// HTML뒷부분에 삽입
$(function(){
    $("p#first").append("<strong> 뒷부분에 삽입 </strong>");
});

// HTML태그 앞에 삽입
$(function(){
    $("p#first").before("<h1>태그 앞에 삽입</h1>");
});

// HTML태그 뒤에 삽입
$(function(){
    $("p#first").after("<h1>태그 뒤에 삽입</h1>");
});

// HTML태그 텍스트 앞으로 이동
$(function(){
    $("q").prependTo("p");
});

// HTML태그 텍스트 뒤로 이동
$(function(){
    $("q").appendTo("p");
});

// HTML태그 앞으로 이동
$(function(){
    $("h1").insertBefore("p");
});

// HTML뒤로 이동
$(function(){
    $("h1").insertAfter("p");
});

// 다른 태그로 감싸기
$(function(){
    $("strong").wrap("<h1></h1>");
});

// 복수 태그 전체를 감싸기
$(function(){
    $("strong").wrapAll("<h1></h1>");
});

// 지정한 태그의 자식 태그를 다른 태그로 감싸기
$(function(){
    $("p").wrapInner("<strong></strong>");
});

// 태그 변경
$(function(){
    $("p").replaceWith("<h1>변경후</h1>");
});

// 태그 제거
$(function(){
    $("p strong").remove();
});