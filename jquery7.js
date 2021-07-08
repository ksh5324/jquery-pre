// value 속성값 가져오기 
// val()은 괄호 안에 아무것도 기술하지 않고 사용하면 폼 태그에 입력되어 있는 텍스트나 선택되어 있는 값을 가져옵니다
$(function(){
    $("button").click(function(){
        $("p").text($("input").val()+"로 메일을 전송합니다.");
        $("button").text("전송");
    });
});
// val()은 input태그뿐만 아니라 select/option태그 혹은 textarea태그에 대해서도 사용할 수 있습니다. 예를 들어 셀렉터로 select태그를 지정하면 선택되어 있는 option태그의 value값을 가져옵니다.

// value 속성값 바꾸기
$(function(){
    $("button").click(function(){
        $("input").val("");
    });
});

// focus() -> 태그가 선택됨을 감지
$(function(){
    $("input").val("입력해 주세요").css("color","#ccc").focus(function(){
        $(this).val("").css("color","#000");
    });
});

$(function(){
    $("input").val("입력해 주세요").css("color","#ccc").one("focus", function(){
        $(this).val("").css("color","#000");
    });
});

// blur() -> 태그에서 포커스가 벗어남을 감지
$(function(){
    $("input").val("입력해 주세요").css("color","#ccc").one("focus",function(){
        $(this).val("").css("color","#000");
    }).blur(function(){
        if($(this.val)()==""){
            $(this).val("입력해 주세요").css("color","#ccc").one("focus",function(){
                $(this).val("").css("color","#ccc");
            });
        }
    });
});

// change() -> 폼 태그의 변경을 감지
$(function(){
    $("select").change(function(){
        $("span").text($(this).val());
    });
});