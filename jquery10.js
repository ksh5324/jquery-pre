// load() -> 웹 페이지에 텍스트를 삽입
$(function(){
    $("button").click(function(){
        $("p").load("./a.txt");
    })
})

// load() 이용하여 외부의 HTML표시
$("p").load("./a.html");
// -> !doctype부터 최하단까지 전부 삽입

$("p").load("./a.html p");
// -> p태그만 삽입

// XML데이터를 가져와서 변환하여 표시
// ajax()
$.ajax({
    url: '가져올 XML 파일',
    dataType: 'xml',
    success: function(data){
        //가져온 파일에 대한 처리
    }
});

$(function(){
    $.ajax({
        url: 'sample3.xml',
        dataType: 'xml',
        success: function(data){
            $("item",data).each(function(){
                $("dl").append("<dt><a href='"+$("link",this).text()+"'>"+$("title",this).text()+"</a></dt><dd>"+$("description",this).text()+"</dd>");
            })
        }
    })
})

