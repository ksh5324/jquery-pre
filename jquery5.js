$(function(){

});
// ==
$(document).ready(function(){

});

// 이벤트
$(selector).event(function(){
    $(selector).command;
});

$(function(){
    $("button").click(function(){
        $("img").attr("src","sea.jpg").attr("alt","바다");
    });
});


$(function(){
    $("a:eq(0)").click(function(){
        $("img").attr("src","flower.jpg").attr("alt","꽃");
        return false;
    });
    $("a:eq(1)").click(function(){
        $("img").attr("src","sea.jpg").attr("alt","바다");
        return false;
    });
    $("a:eq(2)").click(function(){
        $("img").attr("src","jellyfish.jpg").attr("alt","해파리");
        return false;
    });
    $("a:eq(3)").click(function(){
        $("img").attr("src","building.jpg").attr("alt","건물");
        return false;
    });
});
// ==
$(function(){
    $("a").click(function(){
        $("img").attr("src",$(this).attr("href")).attr("alt",$(this).text());
    });
});

// dbclick()
$(function(){
    $("button").dbclick(function(){
        $("img").attr("src","sea.jpg").attr("alt","바다");
    });
});

// dbclick() a태그
$(function(){
    $("a").dbclick(function(){
        $("img").attr("src",$(this).attr("href")).attr("alt",$(this).text());
    });
});