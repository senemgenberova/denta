$(document).ready(function(){
	var appointment = $(".appointment");
	var bg = ["bg1.jpg","bg2.jpg","bg3.jpg"];
	var circle1 = "";
	
	for(var i=0;i<bg.length;i++){
		$(".header").find(".circles").append("<div class='circle circle1'></div>");
		circle1 = $(".circle1");
		circle1.eq(i).attr("data-value",i);
	}

	circle1.eq(0).removeClass("circle").addClass("active_circle")

	circle1.each(function(){
		$(this).click(function(){
			var data_value = $(this).attr("data-value");
			$(this).attr("class","active_circle");
			$(this).siblings().removeClass("active_circle").addClass("circle"); 
			$(".header").css("background-image",'url(img/background/'+bg[data_value]+'),linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5))');
			appointment.eq(data_value).css("display","block").siblings().css("display","none");
		})
	})

	var circle2 = "";
	var testimonial = $(".testimonial");
	
	for(i=0;i<testimonial.length;i++){
		$(".testimonials").find(".circles").append("<div class='circle circle2'></div>");
		circle2 = $(".circle2");
		circle2.eq(i).attr("data-value",i);
	}

	testimonial.eq(0).siblings().css("display","none");
	circle2.eq(0).removeClass("circle").addClass("active_circle")
	
	circle2.each(function(){
		$(this).click(function(){
			var data_value = $(this).attr("data-value"); 
			$(this).attr("class","active_circle");
			$(this).siblings().removeClass("active_circle").addClass("circle");
			testimonial.eq(data_value).css("display","block").siblings().css("display","none");
			
			if(data_value > $(this).siblings().attr("data-value")){
				testimonial.eq(data_value).css("animation","fade_left .3s ease-in-out");
			}
			else{
				testimonial.eq(data_value).css("animation","fade_right .3s ease-in-out");
			}
		})
	})

	var team_group = $(".team_group_3");
	var length = team_group.length;
	var circle3 = "";

	for(i=0;i<length;i++){
		$(".our_team").find(".circles").append("<div class='circle circle3'></div>");
		circle3 = $(".circle3");
		circle3.eq(i).attr("data-value",i);
	}
	circle3.eq(0).removeClass("circle").addClass("active_circle");

	circle3.each(function(){
		$(this).click(function(){
			var data_value = $(this).attr("data-value"); 
			$(this).attr("class","active_circle");
			$(this).siblings().removeClass("active_circle").addClass("circle");
			team_group.eq(data_value).css("display","flex").siblings().css("display","none");

			if(data_value > $(this).siblings().attr("data-value")){
				team_group.eq(data_value).css("animation","fade_left .6s ease-in-out");
			}
			else{
				team_group.eq(data_value).css("animation","fade_right .6s ease-in-out");
			}
		})
	})

	 $('.map').on({
		click: function(){
			$(this).find('iframe').addClass('clicked')
		},

		mouseleave: function(){
			$(this).find('iframe').removeClass('clicked')
		}
	});

	var service_msg = $(".service_msg").find("p");
	service_msg.each(function(){
		$(this).mouseenter(function(){
			$(this).css("background","#F57E57");
			$(this).find("i").css("display","inline-block").css("margin-right","10px");
		})
		$(this).mouseleave(function(){
			$(this).css("background","#18AFD3");
			$(this).find("i").css("display","none").css("margin-right","0px");
		})
	})

	var booking = $(".booking");
	var name = $("#name");
	var email = $("#email");
	
	var bar = $("#bar");
	bar.click(function(){
		if($(this).find("span").attr("class") == "glyphicon glyphicon-menu-hamburger"){
			$(this).find("span").removeClass("glyphicon-menu-hamburger").addClass("glyphicon-remove");
			$(this).animate({left: "23%"},'fast',function(){
				$(".side_list").css("display","block").animate({
					left: 0
				},'fast');	
			})
		}
		else if($(this).find("span").attr("class") == "glyphicon glyphicon-remove"){
			$(this).find("span").addClass("glyphicon-menu-hamburger").removeClass("glyphicon-remove");
			$(this).animate({left: "30px"},'fast',function(){
				$(".side_list").css("display","block").animate({
					left: "-150%"
				},'fast');	
			})
		}		
	})

	var ell = $("#ell");

	ell.click(function(){
		if($(this).find("span").attr("class") == "glyphicon glyphicon-option-vertical"){
			$(this).find("span").removeClass("glyphicon-option-vertical").addClass("glyphicon-remove");	
		}
		else if($(this).find("span").attr("class") == "glyphicon glyphicon-remove"){
			$(this).find("span").removeClass("glyphicon-remove").addClass("glyphicon-option-vertical");	
		}
		$(".ell_list").toggle();
	})	

	$(".side_list").find("span").each(function(){
		$(this).click(function(){
			var data_value = $(this).attr("data-value");
			$(".inner_list").eq(data_value).toggle();
			
		})
	})
});

// if(ell.css("display","block") == true ){
	// 	ell.click(function(){
	// 		if($(this).find("span").attr("class") == "glyphicon glyphicon-option-vertical"){
	// 			$(this).find("span").removeClass("glyphicon-option-vertical").addClass("glyphicon-remove");	
	// 		}
	// 		else if($(this).find("span").attr("class") == "glyphicon glyphicon-remove"){
	// 			$(this).find("span").removeClass("glyphicon-remove").addClass("glyphicon-option-vertical");	
	// 		}
	// 		$(".ell_list").toggle();
	// 	})	
	// }
	// else{
	// 	$(".ell_list").hide();
	// }