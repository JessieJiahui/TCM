$(function(){
	"use strict";
	$(".d-select > p > a").click(function (){
        if($(this).hasClass("ico-down")==true){
			$(this).removeClass("ico-down").addClass("ico-up");
			$(this).parents("p").next("ul").show();
		}else{
			$(this).removeClass("ico-up").addClass("ico-down");
			$(this).parents("p").next("ul").hide();
		}
    });
});

$(document).ready(function(e) {
	"use strict";
    $('.close').click(function(e) {
        $('#col8').hide();
		$('#col5').hide();
    });
});

$(function(){
	"use strict";
	$(".d-table > table > tbody > tr > td > s").click(function (){
		if($(this).hasClass("ico-down2")==true){
			$(this).parents("td").parents("tr").next(".table-level2").removeClass("hidden").addClass("table-show");
			$(this).removeClass("ico-down2").addClass("ico-up2");
			$(this).parents("td").parents("tr").addClass("current");
		}else{
			$(this).parents("td").parents("tr").next(".table-level2").removeClass("table-show").addClass("hidden");
			$(this).removeClass("ico-up2").addClass("ico-down2");
			$(this).parents("td").parents("tr").removeClass("current");
		}
		
		
        
    });
});

$(function(){
	"use strict";
	$("h3 > label").click(function (){
        $(this).siblings("label").removeClass("current");
		$(this).addClass("current");
    });
});

$(function(){
	"use strict";
	$(".tab-lst > li").click(function (){
        $(this).siblings("li").removeClass("current");
		$(this).addClass("current");
    });
	
});
$(document).ready(function(e) {
	"use strict";
	$("#tab1").click(function (){
		$("#content1").show();
		$("#content2").hide();
   		$("#content3").hide();
   		$("#content4").hide();
    });
	$("#tab2").click(function (){
		$("#content2").show();
		$("#content1").hide();
   		$("#content3").hide();
   		$("#content4").hide();
    });
	$("#tab3").click(function (){
		$("#content3").show();
		$("#content2").hide();
   		$("#content1").hide();
   		$("#content4").hide();
    });
	$("#tab4").click(function (){
		$("#content4").show();
		$("#content2").hide();
   		$("#content3").hide();
   		$("#content1").hide();
    });
});