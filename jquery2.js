$(function() {
    $("[id]").css("color", "red");
});
// 속성 선택자

$(function(){
    $("[title='second']").css("color", "red");
});
// 특정 값을 가진 속성 선택

$(function(){
    $("li[title!='first']").css("color", "red");
});
// 특정 값을 갖지않은 속성 선택

$(function(){
    $("[title^='f']").css("color", "red");
});
// 특정 속성의 값이 특정 문자열로 시작하는 태그 선택

$(function(){
    $("[title$='d']").css("color", "red");
});
// 특정 속성값으로 끝나는 태그 선택

$(function(){
    $("[title*='ir']").css("color","red");
});
// 특정 문자열을 포함하고있는 태그 지정

$(function(){
    $("[title^='f'][title*='th']").css("color","red");
});
// 복수의 속성 셀렉터

$(function(){
    $("li:first").css("color", "red");
    $("li:last").css("color", "red");
});
// 첫 번째, 마지막 태그

$(function(){
    $("li:odd").css("color","red");
    $("li:even").css("color","red");
});
// 짝수 홀수 태그 선택

$(function(){
    $("li:lt(2)").css("color","red");
    $("li:eq(2)").css("color","red");
    $("li:gt(2)").css("color","red");
});
// 특정 태그를 기준으로 선택

$(function(){
    $(":header").css("color","red");
});
// h1~h6까지

$(function(){
    $("li:contains('샘플')").css("color","red"); // 특정 문자열이 포함되어 있는 태그
    $("li:has(strong)").css("color","red"); // 특정 태그가 포함되어 있는 태그
});

$(function(){
    $("li:parent").css("color", "red");
});
// 자식 태그 혹은 문자열을 포함하는 태그