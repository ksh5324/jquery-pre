// 비표시 상태의 태그를 표시하는 show()
// display값이 none -> block
$(function(){
    $("button").click(function(){
        $("div").show("slow"); // slow, normal, fast + 밀리초 단위로 지정 가능
        // $("div").show(1000);
    })
})

// show에 콜백 함수 지정
$(function(){
    $("button").click(function(){
        $("div").show("slow",function(){
            $(this).css("background", "blue");
        });
    })
})

// 표시중인 태그 숨기기 -> hide()
$(function(){
    $("button#show").click(function(){
        $("div :not(:animated)").show("slow");
    });
    $("button#hide").click(function(){
        $("div :not(:animated)").hide("slow");
    })
})

// toggle()
$(function(){
    $("button").click(function(){
        $("div:not(:animated)").toggle("slow");
    })
})

// slideDown()/slideUp()
$(function(){
    $("dt").click(function(){
        if($("dd").css("display")=="block"){
            $("dd:not(:animated)").slideUp("slow");
        }else{
            $("dd").slideDown("slow");
        }
    })
})

// sideToggle()
$(function(){
    $("dt").click(function(){
        $("dd:not(:animated)").slideToggle("slow");
    })
})

// 표시상태를 페이든인/페이드아웃으로 변경
$(function(){
    $("button#fadeIn").click(function(){
        $("img:not(:animated)").fadeIn("slow");
    })
    $("button#fadeOut").click(function(){
        $("img:not(:animated)").fadeOut("slow");
    })
})

// fadeTo() -> 투명도 변경
$(function(){
    $("button#fade100").click(function(){
        $("img:not(:animated)").fadoTo("slow",1);
    })
    $("button#fade50").click(function(){
        $("img:not(:animated)").fadoTo("slow",0.5);
    })
    $("button#fade0").click(function(){
        $("img:not(:animated)").fadoTo("slow",0);
    })
})

// 독자적인 애니메이션 효과를 설정 -> animate()
$(function(){
    $("#flower").click(function(){
        $("p:not(:animated)").animate({
            marginLeft:"-400px"
        },"slow","swing");
    });
})