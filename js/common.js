$(document).ready(function() {

	var sideBar = $('.sideBar'),
	wrapperWidth = $(".wrapper").width();

	$(".popup_content_1").magnificPopup({
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: true,
		mainClass: 'mfp-with-zoom',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1]
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
		}
	});
	$(".popup_content_2").magnificPopup({
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: true,
		mainClass: 'mfp-with-zoom',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1]
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
		}
	});
	$(".popup_content_3").magnificPopup({
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: true,
		mainClass: 'mfp-with-zoom',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1]
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
		}
	});

	/*function inWindow(s){
  		var scrollTop = $(window).scrollTop();
  		var windowHeight = $(window).height();
  		var currentEls = $(s);
  		var result = [];
  		currentEls.each(function(){
    	var el = $(this);
    	var offset = el.offset();
   	 	if(scrollTop <= offset.top && (el.height() + offset.top) < (scrollTop + windowHeight))
      		result.push(this);
  		});
 		 return $(result);
	}*/


	//alert($(window).scrollTop());
	//alert($(window).height());
	//alert($(".section_job").height())
	//alert($("body").height())
	var elem = $("section[id^='work_2']");
	var elemHeight = elem.height();
	var documentHeight = $(document).height();
	var position = elem.offset();
	var top_scroll = $(window).scrollTop();
	var screen_height = $(window).height();
	var see_y2 = screen_height + top_scroll;
	


function getPosition(){
	var top_scroll = $(window).scrollTop();
	var positionArr = [];
	var documentHeight = $(document).height();
	for (var i = 1; i <= $(".jobs").children().length; i++) {
		elem = $("section[id^='work_"+ i +"']");
		var position = elem.offset().top;
		positionArr.push(position - 170);

	}
	positionArr.push(documentHeight);
	return positionArr;
		
}



function checkPosition(){
	var top_scroll = $(window).scrollTop();
	var section = $("section[id^='work_']");
	var sectionLength = section.length;
	var j = 1;
	for (var i = 0; i <= section.length; i++) {

		if(getPosition().length == i){
			j = 0;
		}

		if(top_scroll >= getPosition()[i] && top_scroll <= getPosition()[i + j]){
				$("a[href^='#work_" + (i + 1) + "']").css({'background-color': '#00B9EE'});
			}
			else{
				$("a[href^='#work_" + (i + 1) + "']").css({'background-color': 'inherit'});
			}
	}


	}


		































	function addTarget(){
		var jobs = $(".jobs");
		for (var i = 1; i <= jobs.children().length; i++) {
			$(".scroll_tabs_wrap ul").append("<li><a class='scroll_tabs'></li>");
			$(".scroll_tabs").each(function(i){
				if(!($(this).attr("href")))
				$(this).attr("href","#work_" + i);
			})
		}



	}

	addTarget();






	$(".top_menu_wrap a").click(function(){
		$(this).toggleClass("active");
	})

	$(sideBar).css("height", $("body").height());
	
	$(".buttom_menu").click(function() {

  		$(".sandwich").toggleClass("active");

  		if($(".top_menu div").hasClass("open")){
  			$(".open").fadeOut(400,function(){
  				$(".top_menu div").removeClass("open");
  			})
  		}
  		else{
  			$(".top_menu_wrap").addClass("open");
  			$(".top_menu div").fadeIn(400);
  		}
  		$(".top_menu ul").toggleClass("open_menu");

	});

	$(".jobs_content a, .scroll_tabs_wrap a").mPageScroll2id({ scrollSpeed: 800 });

	/*$(".top_menu ul li a").click(function(){
		$(".sandwich").toggleClass("active");

		if($(".top_menu div").hasClass("open")){
  			$(".open").fadeOut(400,function(){
  				$(".top_menu div").removeClass("open");
  			})
  		}
  		else{
  			$(".top_menu_wrap").addClass("open");
  			$(".top_menu div").fadeIn(400);
  		}
  		$(".top_menu ul").toggleClass("open_menu");

	});*/


	/* Targets*/
	


	$(window).scroll(function() {
		checkPosition();
		if(($(this).scrollTop() > 600 && $(window).width()) > 768){
			$(".scroll_tabs_wrap").show("slow");
			$(sideBar).css({
				'margin-left': '-500px'
				
			});
			$(".content").css({
				'padding-left': '0'
			});
		}
		if(($(this).scrollTop() < 600 && $(window).width()) > 768) {
			$(".scroll_tabs_wrap").hide("slow");
			$(sideBar).css({
				'margin-left': '-250px'
				
			});
			$(".content").css({
				'padding-left': '250px'
			});
		}
	})


	$(window).resize(function(){
		if (($(window).width()) <= 768) {
			$(sideBar).css({
				'margin-left': '-500px'
				
			});

			$(".content").css({
				'padding-left': '0'
			});

		}
		if (($(window).width()) > 768 && $(this).scrollTop() == 0){
			$(".top_menu_wrap").show();
			$(sideBar).css({
				'margin-left': '-250px'
				
			});
			$(".content").css({
				'padding-left': '250px'
			});
		}

	});
});

$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".preloader").delay(400).fadeOut("slow");

	if($(this).width() > 768){
			$(".sideBar").css({
				'margin-left': '-500px'
					
			});
			$(".content").css({
				'padding-left': '0'
			});
		}
	if($(this).width() <= 768){
		$(".mfp-arrow").hide();
		$(".sideBar").css({
				'margin-left': '-500px'
					
			});
			$(".content").css({
				'padding-left': '0'
			});
	}
	if($(this).scrollTop() == 0){
		$(".sideBar").css({
				'margin-left': '-250px'
					
			});
		$(".content").css({
				'padding-left': '250px'
			});

	if($(this).scrollTop() == 0 && $(this).width() > 768){
		$(".scroll_tabs_wrap").hide();
	}

	if($(this).scrollTop() == 0 && $(this).width() <= 768){
		$(".scroll_tabs_wrap").hide();
		$(".sideBar").css({
			'margin-left': '-500px'	
		});
		$(".content").css({
			'padding-left': '0'
		});
	}
	}
}); 