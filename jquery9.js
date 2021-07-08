// :input 입력 폼태그 전부선택
$(function(){
    $(":input").focus(function(){
        $(this).css("background","#EFEEFF");
    }).blur(function(){
        $(this).css("background","");
    });
});

// :text -> 속성값에 text가 설정되어 있는 input 태그
$(function(){
    $(":text").focus(function(){
        $(this).after("<strong>필수 항목 입니다.</strong>");
    }).blur(function(){
        $("strong").remove();
    });
});

// :password -> type속성값이 password인 input 태그
$(function(){
    $(":password").focus(function(){
        $(this).after("<p> 패스워드는 여섯 자 이상이어야 합니다.</p>");
    }).blur(function(){
        $("p").remove();
    });
});


// :radio
$(function(){
    $(":radio").click(function(){
        $("label").css("font-weight","")
        $("label[for='"+$(this).attr("id")+"']").css("font-weight","bold");
    })
    $("label").click(function(){
        $("label").css("font-weight","");
        $(this).css("font-weight","bold");
    });
});

// :checkbox
$(function(){
    $("button").click(function(){
        $(":checkbox").attr("checked","checked");
    });
});

// :submit
$(function(){
    $(":submit").mouseover(function(){
        $(this).after("<p> 입력한 내용을 서버로 전송합니다.</p>");
    }).mouseout(function(){
        $("p").remove();
    });
});

// :image
$(function(){
    $(":image").mouseover(function(){
        $(this).attr("src","button_on.jpg");
    }).mouseout(function(){
        $(this).attr("src","button.jpg");
    });
});

// :reset
$(function(){
    $(":reset").one("click",function(){
        $(this).after("<p> 입력 내용을 초기화 합니다.</p>");
    });
});

// :button
$(function(){
    $(":button").click(function(){
        if($("input[name='mail']").val() != $("input[name='check']").val()){
            $("em").text("메일 주소가 동일하지 않습니다.");
            return false;
        }
    });
});

// :file
$(function(){
    $(":file").mouseover(function(){
        $(this).after("<p> 업로드 가능한 파일은 300kb까지 입니다.</p>");
    }).mouseout(function(){
        $("p").remove();
    });
});

// :checked
$(function(){
    $("label,:checked").click(function(){
        $("label").css("background","");
        $(":checked").each(function(){
            $("label[for='"+$(this).attr("id")+"']").css("background","#ccc");
        });
    });
});

// :selected
$(function(){
    $("select").change(function(){
        if($(":selected").attr("value")=="10 대"){
            $("input").attr("disabled", "disabled");
        }else{
            $("input").removeAttr("disabled");
        }
    });
});