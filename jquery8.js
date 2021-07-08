$(function(){
    $("form").submit(function(){
        if($("input[name='name']").val()==""){
            if($("span").css("color") != "red"){
                $("input[name='name']").css("border","1px solid red").after("<span>이름을 입력해 주세요</span>");
                $("span").css("color","red");
            }
            return false;
        }
    });
});