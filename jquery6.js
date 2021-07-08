// mousedown() -> 마우스 포인터가 있는 상태에서 마우스 버튼의 눌렸을 경우 처리
$(function(){
    $("a").mousedowm(function(){
        $("img").attr("src",$(this).attr("href")).attr("alt",$(this).text());
    }).click(function(){
        return false;
    })
});

// mouseup() -> 특정 태그 위에 마우스 포인터가 있는 상태에서 이미 눌려 있던 버튼이 떨어지는 타이밍에 처리
$(function(){
    $("a").mouseup(function(){
        $("img").attr("src",$(this).attr("href")).attr("alt",$(this).text());
    }).click(function(){
        return false;
    });
});

// toggle
$(function(){
    $("button").toggle(function(){
        $("img").attr("src","sea.jpg").attr("alt","바다");
    },function(){
        $("img").attr("src","jellyfish.jpg").attr("alt","해파리");
    },function(){
        $("img").attr("src","building.jpg").attr("alt","건물");
    },function(){
        $("img").attr("src","flower.jpg").attr("alt","꽃");
    });
});

// mouseover, mouseout -> 마우스가 겹쳐진 타이밍을 처리
$(function(){
    $("img").mouseover(function(){
        $(this).attr("src","sea.jpg").attr("alt","바다");
    }).mouseout(function(){
        $(this).attr("src","flower.jpg").attr("alt","꽃");
    });
});

// mousemove() -> 마우스 포인터가 움직이는 경우를 처리
$(function(){
    $("img").mousemove(function(e){
        $("p").html("현재 X좌표: "+e.clientX+"<br>현재 Y좌표: "+e.clientY);
    });
}); // e.clientX -> 마우스의 X좌표, e.clientY -> 마우스의 Y좌표

// one()
$(function(){
    $("a").one("click",function(){
        $("img").attr("stc",$(this).attr("href")).attr("alt",$(this).text());
        return false;
    });
});

// unbind() ->  이벤트 처리 취소
$(function(){
    $("a").click(function(){
        $("img").attr("src",$(this).attr("href")).attr("alt",$(this).text());
        return false;
    })
    $("button").click(function(){
        $("a").unbind("click");
    });
});

// live() -> 앞으로 추가될 태그에 이벤트 처리 설정
$(function(){
    $("a").click(function(){
        $("img").attr("src",$(this).attr("href")).attr("alt",$(this).text());
        return false;
    });
    $("button").click(function(){
        $("ul").append("<li><a href='butilding.jpg'>건물</a></li>");
    });
});