// JavaScript Document
$(function(){
	"use strict";
	$(".expand").click(function(){
		if($(".map").hasClass("col-xs-9")){
			$(".map").removeClass("col-xs-9");
			$(".map").addClass("col-xs-12");
		}else{
			$(".map").removeClass("col-xs-12");
			$(".map").addClass("col-xs-9");
		}
		$(".vary").toggleClass("hidden");
	});
});

$(function(){
	"use strict";
	var CL = $(".map").children(".inf").children(".inf-tips").children("li");
	$(CL).click(function(){
		$(this).siblings("li").removeClass("current");
		$(this).addClass("current");
	});
});

function floatDiv1(){
	"use strict";
	document.getElementsByClassName('nearby')[0].style.display='block';
	document.getElementById('fade').style.display='block';
}
function floatDiv2(){
	"use strict";
	document.getElementsByClassName('warning')[0].style.display='block';
	document.getElementById('fade').style.display='block';
}
function floatDiv3(){
	"use strict";
	document.getElementsByClassName('snapshot')[0].style.display='block';
}
function floatDiv4(){
	"use strict";
	document.getElementsByClassName('staff')[0].style.display='block';
}

function floatDiv6(){
	"use strict";
	document.getElementsByClassName('export')[0].style.display='block';
}
function floatDiv7(){
	"use strict";
	document.getElementsByClassName('info-user')[0].style.display='block';
}
function floatDiv8(){
	"use strict";
	document.getElementsByClassName('export-record')[0].style.display='block';
	document.getElementById('fade').style.display='block';
}
function floatDiv9(){
	"use strict";
	document.getElementsByClassName('message')[0].style.display='block';
	document.getElementById('fade').style.display='block';
}
function floatDiv10(){
	"use strict";
	document.getElementsByClassName('group-message')[0].style.display='block';
	document.getElementById('fade').style.display='block';
}
function openSure(){
	"use strict";
	document.getElementsByClassName('warning-sure')[0].style.display='block';
	document.getElementsByClassName('warning')[0].style.display='none';
}
function openClear(){
	"use strict";
	document.getElementsByClassName('warning-clear')[0].style.display='block';
	document.getElementsByClassName('warning')[0].style.display='none';
}
function Warning(){
	"use strict";
	document.getElementsByClassName('warning')[0].style.display='block';
	document.getElementById('fade').style.display='block';
}
function closeWarning(){
	"use strict";
	document.getElementsByClassName('warning')[0].style.display='none';
	document.getElementById('fade').style.display='none';
}
$(function(){
	"use strict";
	$("#set").click(function(){
		$(".set").toggleClass("show");
		$(".find").removeClass("show");
	});
	$("#find").click(function(){
		$(".find").toggleClass("show");
		$(".set").removeClass("show");
	});
	$("#warning2").hover(function (){
        $(".warning2").show();
    },function () {
        $(".warning2").hide();
    });

});
function closeDiv(){
	"use strict";
	document.getElementById('fade').style.display='none';
	document.getElementsByClassName('gray-content')[0].style.display='none';
	document.getElementsByClassName('gray-content')[1].style.display='none';
	document.getElementsByClassName('gray-content')[2].style.display='none';
	document.getElementsByClassName('gray-content')[3].style.display='none';
	
	document.getElementsByClassName('gray-content')[4].style.display='none';
	document.getElementsByClassName('gray-content')[5].style.display='none';
	document.getElementsByClassName('gray-content')[6].style.display='none';
	document.getElementsByClassName('gray-content')[7].style.display='none';
	document.getElementsByClassName('gray-content')[8].style.display='none';
	document.getElementsByClassName('gray-content')[9].style.display='none';
	document.getElementsByClassName('gray-content')[10].style.display='none';
	document.getElementsByClassName('gray-content')[11].style.display='none';
	document.getElementsByClassName('gray-content')[12].style.display='none';
	
}
function delAlert(){
	"use strict";
	document.getElementsByClassName('del-alert')[0].style.display='block';
	document.getElementById('fade').style.display='block';
}
function closeAlert(){
	"use strict";
	document.getElementById('fade').style.display='none';
	document.getElementsByClassName('del-alert')[0].style.display='none';	
}
function messDtl(){
	"use strict";
	document.getElementsByClassName('messagedtl')[0].style.display='block';
	document.getElementById('fade').style.display='block';
}
function closeMess(){
	"use strict";
	document.getElementById('fade').style.display='none';
	document.getElementsByClassName('messagedtl')[0].style.display='none';	
}
function newparty(){
	"use strict";
	document.getElementById('newparty').style.display='block';
	document.getElementById('newarea').style.display='none';
	document.getElementById('keynum').style.display='none';
}
function newarea(){
	"use strict";
	document.getElementById('newparty').style.display='none';
	document.getElementById('newarea').style.display='block';
	document.getElementById('keynum').style.display='none';
}
function keynum(){
	"use strict";
	document.getElementById('newparty').style.display='none';
	document.getElementById('newarea').style.display='none';
	document.getElementById('keynum').style.display='block';
}
function closecard(){
	"use strict";
	document.getElementById('newparty').style.display='none';
	document.getElementById('newarea').style.display='none';
	document.getElementById('keynum').style.display='none';
}

$(function(){
	"use strict";
	$(".box-color-list li:first-child").click(function(){
		$(this).siblings("li").toggleClass("hidden");
		if($(this).children("i").hasClass("fa-minus")==true){
			$(this).children("i").removeClass("fa-minus").addClass("fa-plus");
		}else{
			$(this).children("i").removeClass("fa-plus").addClass("fa-minus");
		}
		
	});
});

$(function(){
	"use strict";
	$(".new-area-list li").click(function(){
		$(this).toggleClass("current");
	});
});
$(function(){
	"use strict";
	$(".box-color-list2 li").click(function(){
		$(this).addClass("current");
		$(this).siblings("li").removeClass("current");
	});
});

$(function(){
	"use strict";
	$(".box-tools>.btn-toolbar>.lst-btn li ").click(function(){
		$(this).addClass("current");
		$(this).siblings("li").removeClass("current");
	});
});

$(function(){
	"use strict";
	$(".box-color-list li ").click(function(){
		$(this).addClass("current");
		$(this).siblings("li").removeClass("current");
	});
});



$(function(){
	"use strict";
    $('.tree li:has(ul)').addClass('parent_li').find(' > a').attr('title', 'Collapse this branch');
    $('.tree li.parent_li > a').on('click', function (e) {
        var children = $(this).parent('li.parent_li').find(' > ul > li');
        if (children.is(":visible")) {
            children.hide('fast');
            $(this).attr('title', 'Expand this branch').find(' > i').addClass('fa-plus').removeClass('fa-minus');
        } else {
            children.show('fast');
            $(this).attr('title', 'Collapse this branch').find(' > i').addClass('fa-minus').removeClass('fa-plus');
        }
        e.stopPropagation();
    });
});
$(function(){
	"use strict";
	$(".tree li >a").click(function(){
		$(".tree li>a").removeClass("current");
		$(this).toggleClass("current");
	});
});

function alerttips(){
	"use strict";
	document.getElementsByClassName('alert')[0].style.display='block';
	document.getElementsByClassName('alert')[1].style.display='block';
	document.getElementsByClassName('alert')[2].style.display='block';
	setTimeout(function(){
		$(".alert").animate({opacity:"0"},4000);
	});
	
}
$(document).ready(function(){//页面加载完之后，自动执行该方法
	"use strict";
	$(".input-correct > span.control-label").append("<i class='fa fa-check'></i>正确");
	$(".input-warning > span.control-label").append("<i class='fa fa-bell-o'></i>此项不能为空"); 
	$(".input-error > span.control-label").append("<i class='fa fa-times'></i>格式错误");

});

$(function(){
	"use strict";
	$(".dropdown>a").click(function(){
		$(this).next(".down-menu").toggleClass("show");
	});
});
$(function(){
	"use strict";
	$(".piece>.content").click(function(){
		$("#light").addClass("show");
		$("#fade").addClass("show");
		var p = $(this).css("backgroundImage").split("style")[1].split(".jpg")[0];
		p = "../style" + p + ".jpg";
		
		$("#light").children("img").attr('src',p);
		var image = new Image();
		image.src = p;
		var w = image.width;
		var h = image.height;
		if(w>h){
			
			if((w/h)>1.7778){
				$("#light").removeClass("direction");
				$("#light").addClass("horizontal");
			}else{
				$("#light").removeClass("horizontal");
				$("#light").addClass("direction");
			}	
		}else{
			$("#light").removeClass("horizontal");
			$("#light").addClass("direction");
		}
		
			
	});
	$(".snapshot-l>h2>span").click(function(){
		$(this).parents("h2").parents(".snapshot-l").removeClass("show").addClass("hidden");
		$("#fade").removeClass("show").addClass("hidden");
	});
});

$(function(){
	"use strict";
	$(".radio_box").click(function(){
		$(this).toggleClass("checked");
		$(this).parent(".choose-radio").siblings(".choose-radio").children(".radio_box").removeClass("checked");
	});
	$(".check_box").click(function(){
		$(this).toggleClass("checked");
	});
	$(".check").click(function(){
		$(this).toggleClass("checked");
	});
});
$(function(){
	"use strict";
	$(".select>p>a").click(function(){
		$(this).parent("p").next("ul").toggleClass("show");
		if($(this).hasClass("fa-angle-down")){
			$(this).removeClass("fa-angle-down").addClass("fa-angle-up");
		}else{
			$(this).removeClass("fa-angle-up").addClass("fa-angle-down");
		}
		
	});
	$(".select>ul>li").click(function(){
		var V = $(this).text();
		var oNav_span=$(this).parent("ul").siblings("p").find("span").length;
		if(oNav_span==1){
			$(this).parent("ul").siblings("p").children("span").html(V);
		}else{
			$(this).parent("ul").siblings("p").children("input").val(V);
		}
		$(this).parent("ul").removeClass("show").addClass("hidden");
		$(this).parent("ul").siblings("p").children("a").removeClass("fa-angle-up").addClass("fa-angle-down");
	});

});
$(function(){
	"use strict";
	$(".select>p>a").click(function(){
		$(this).parent("p").next("div").toggleClass("show");
		
		
	});
});

$(function(){
	"use strict";
	var n = 0;
	$(".right-rotate").click(function(){
		n = n + 90;
		var R = "rotate(" + n + "deg)";
		$(this).siblings("img").css("transform",R);
	});
	$(".left-rotate").click(function(){
		n = n - 90;
		var R = "rotate(" + n + "deg)";
		$(this).siblings("img").css("transform",R);
		
	});
	$(".snapshot-l > h2 > .close2").click(function(){
		$(this).parents("h2").next("img").css("transform","rotate(0)");
	});
});

$(function(){
	"use strict";
	$(".video-play-ico").click(function(){
		$("#fade").addClass("show");
		$("#light2").addClass("show");
		var p = $(this).parents(".video-fade").siblings("video").children("source").attr("src");
		$("#light2 > .video-box > video > source").attr("src", p);
	});
	

});
$(function(){
	"use strict";
	$(".video-fade").hover(function (){
        $(this).animate({opacity:"1"},400);
		$(this).children(".video-play-ico").animate({top:"44px"},400);
    },function () {
        $(this).animate({opacity:"0"},400);
		$(this).children(".video-play-ico").animate({top:"0"},400);
    });

});

$(function(){
	"use strict";
	$(".funcbtn > li > s").click(function(){
		if($(this).hasClass("start")){
			$(this).removeClass("start").addClass("stop");
		}else if($(this).hasClass("stop")){
			$(this).removeClass("stop").addClass("start");
		}
	});
});

$(function(){
	"use strict";
	$(".ico-QR").hover(function (){
        $(".ico-QR-big").removeClass("hidden").addClass("show");
    },function () {
        $(".ico-QR-big").removeClass("show").addClass("hidden");
    });

});

/*$(document).ready(function(){//页面加载完之后，自动执行该方法
	"use strict";
	var H = $(window).height();
	var W = $(window).width();
	$(".info-user").css( {"margin":"0","top":"0","left":"0","height":H,"width":W});
});*/

/*假设你的div的id为DIV 触发打开的按钮class为open 关闭按钮的class为close 
$(function(){
	"use strict";
	$(".open").click(function(){
		$("#DIV").addClass("show");
	});
	$(".close").click(function(){
		$("#DIV").removeClass("show").addClass("hidden");
	});
});*/


$(function(){
	"use strict";
	$(".expand2").click(function(){
		$(".p-right").toggleClass("show-inline");
		if($(".p-right").hasClass("show-inline")==true){
			$(".p-left").css("width","83.333334%");
		}else{
			$(".p-left").css("width","100%");
		}
	});
});

$(function(){
	"use strict";
	$(".btn-toolbar > button").click(function(){
		$(this).addClass("current");
		$(this).siblings("button").removeClass("current");
	});
});

$(function(){
	"use strict";
	$(".expand3").click(function(){
		$(".p-right").toggleClass("show-inline");
		if($(".p-right").hasClass("show-inline")==true){
			$(".p-left").css("width","83.333334%");
			
		}else{
			$(".p-left").css("width","100%");
		}
		$(".btn-toolbar2").toggleClass("show");
		$(".btn-toolbar3").toggleClass("hidden");
		$(".select-toolbar").toggleClass("show");
		$(".tool-inf").toggleClass("hidden");
	});
});

$(function(){
	"use strict";
	$(".tip-lst > ul > li").click(function(){
		$(this).toggleClass("current");
	});
});
$(function(){
	"use strict";
	$(".timeline2 > li").click(function(){
		$(this).toggleClass("current");
		$(this).siblings("li").removeClass("current");
	});
});

function tipOpen(){
	"use strict";
	$(".plantip").addClass("show");
	$(".black-overlay").addClass("show");
}
function tipClose(){
	"use strict";
	$(".plantip").removeClass("show");
	$(".black-overlay").removeClass("show");
}

$(function(){
	"use strict";
	$(".switch > li").click(function(){
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
	});
});

function part1(){
	"use strict";
	$("#communicate1").show();
	$("#communicate2").hide();
	
}
function part2(){
	"use strict";
	$("#communicate2").show();
	$("#communicate1").hide();
	
}

$(document).ready(function(){
	"use strict";
	/*var W = $(".col-slg-2 > .box").width();
	var H = $(".map").height()-36;
	var H2 = $(window).height()-180;
	var H3 = $(window).height()-300;
	$(".con-mess").css( {"min-height":H,"width":W});
	$(".con-call").css( {"min-height":H,"width":W});
	$(".con-mess > .con-box").css( {"max-height":H2});
	$(".con-call > .con-box").css( {"max-height":H3});
	$(".con-mess").css( {"max-height":H2+80});*/
	 var winH = $(window).height();
	$(".con-side").css("height",winH-50);
});

$(function(){
	"use strict";
	$(".con-part > .con-icon1").click(function(){
		$(this).siblings(".con-icon1").removeClass("current");
		$(this).toggleClass("current");
	});
	$(".fa-envelope").click(function(){
		$(".con-call").removeClass("show");
		$(".con-mess").toggleClass("show");
	});
	$(".fa-phone").click(function(){
		$(".con-mess").removeClass("show");
		$(".con-call").toggleClass("show");
	});
	$(".call-menu > li").click(function(){
		$(this).addClass("current");
		$(this).siblings("li").removeClass("current");
	});
	$("#guangbo").siblings("li").click(function(){
		$(this).parent(".call-menu").parent(".call-tool").next(".con-box").show();
		$(this).parent(".call-menu").parent(".call-tool").next(".con-box").next(".con-footer").show();
		$(".con-box2").hide();
		$(".con-call").css("padding-bottom","110px");
	});
	$("#guangbo").click(function(){
		$(this).parent(".call-menu").parent(".call-tool").next(".con-box").hide();
		$(this).parent(".call-menu").parent(".call-tool").next(".con-box").next(".con-footer").hide();
		$(".con-box2").show();
		$(".con-call").css("padding-bottom","0");
	});
	
	$(".call-inner > h4 > i").click(function(){
		$(this).toggleClass("active");
	});
});
