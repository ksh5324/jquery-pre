$(function(){
	$("th:nth-child(odd)").addClass("odd");
	$("tr:nth-child(even)").addClass("even");
	
	$("tr:not(:first-child)").mouseover(function(){
		$(this).addClass("hover");
	}).mouseout(function(){
		$(this).removeClass("hover");
	});
	
	$("td").mouseover(function(){
		$("td:nth-child("+($("td").index(this)%$("th").size()+1)+")").addClass("hover");
	}).mouseout(function(){
		$("td:nth-child("+($("td").index(this)%$("th").size()+1)+")").removeClass("hover");
	});
});