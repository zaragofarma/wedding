// jquery library code here
// =========================
$(document).ready(function() {
	// text container function "scroll-up" and "scroll-down" start here
	// -----------------------------------------------------------------
	//  random id genarator function start (to detact scroll element dynamically)
	//  glabally for thit wedding site
	//  -------------------------------------------------------------------------
	function makeid() {
		var text = '';
		var possible =
			'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

		for (var i = 0; i < 5; i++)
			text += possible.charAt(
				Math.floor(Math.random() * possible.length),
			);

		return text;
	}
	// end ID genarator

	// paragraph scroll-up "upore" function start here
	// -----------------------------------------------
	function verticalSlideUp() {
		$('.scroll-inner-container').each(function() {
			let id = makeid();
			var div = $(this);
			div.stop();
			$(this).attr('id', id);
			var remHeight = div[0].scrollHeight - $(this).height();
			var scrollableHeight = remHeight - div.scrollTop();
			var pos = div.scrollTop();
			var remainingTime = ((remHeight - pos) * 100) / 5; //here 5 is a speed
			div.animate(
				{
					scrollTop: remHeight,
				},
				{
					duration: remainingTime,
					easing: 'linear',
				},
			);
		});
	}
	//  end scroll-up function
	// paragraph scroll-down "neche" function start here
	// -----------------------------------------------
	function verticalSlideDown() {
		$('.scroll-inner-container').each(function() {
			let id = makeid();
			var div = $(this);
			div.stop();
			$(this).attr('id', id);
			var remHeight = div[0].scrollHeight - $(this).height();
			var scrollableHeight = remHeight - div.scrollTop();
			var pos = div.scrollTop();
			var remainingTime = (pos * 100) / 5; //here 5 is a speed

			div.animate(
				{
					scrollTop: 0,
				},
				{
					duration: remainingTime,
					easing: 'linear',
				},
			);
		});
	}
	//  end scroll-down function

	// mouse movement exucution start here .when mouse hover over 10% top or 10% bottom then scroll up/down start
	// ----------------------------------------------------------------------------------------------------------
	var obj = $('.scroll-inner-container');
	var top, left, bottom, right;
	var excldH, objHeight, objWidth;
	// Get position of the div 'scroll-inner-container'
	function getPos(obj) {
		var offsets = obj.offset();
		objHeight = obj.height();
		objWidth = obj.width();
		excldH = objHeight / 3; //Caculating 10% height
		(top = offsets.top),
			(left = offsets.left),
			(bottom = top + objHeight),
			(right = left + objWidth);
	}
	getPos(obj);
	// end function
	//Calls fuction on mouse over
	obj.mousemove(function(e) {
		handleMouseMove(e);
	});
	// end function
	//Get position of mouse pointer
	var disableAutoScroll = true;

	function handleMouseMove(e) {
		var posX = e.clientX;
		var posY = e.clientY;

		if (posY < top + excldH && disableAutoScroll == true) {
			verticalSlideDown();
		} else if (posY > bottom - excldH && disableAutoScroll == true) {
			verticalSlideUp();
		} else {
			var div = $('.scroll-inner-container');
			div.stop();
		}
	}

	// wedding left menu start
	// =========================

	let scrollSpeed = 10;

	function horizontal_Menu_Width() {
		$('.wedding-menu-left-outer').each(function() {
			let id = makeid();
			$(this).attr('id', id);
			//total width of horizontal menu with 2 arrow.
			let horizontalMenuWidth = $(this).width();
			console.log('horizontal-menu : ' + horizontalMenuWidth);
			// width of the arrow
			let horizontalMenuArrowWidth = $(this)
				.children('i')
				.outerWidth(true);
			// console.log("horizontalMenuArrowWidth " + horizontalMenuArrowWidth);
			// total-width - 2 arrow-width = menu-container width;
			let mainContainerWidth =
				horizontalMenuWidth - horizontalMenuArrowWidth * 2;
			// console.log(mainContainerWidth);
			$(this)
				.children('.wedding-menu-left-inner')
				.css('width', mainContainerWidth);
		});
	}
	// initialization horizontal menu width function
	// horizontal_Menu_Width();
	// for left menu
	// -----------------
	$('.wedding-menu-left-outer > i').on('mouseenter', function() {
		// init class,ID on valiable when mouse inter
		let horizontalMenuParentID = $(this).parent(
			'.wedding-menu-left-outer',
		)[0].id;
		let leftArrow = $(this).hasClass('left-arrow');
		let rightArrow = $(this).hasClass('right-arrow');

		// need to find total width of "menu-inner-container" class
		let horizontalMenuScrollableWidth = $(
			'#' +
				horizontalMenuParentID +
				' >.wedding-menu-left-inner>.main-menu-left',
		)[0].scrollWidth;
		console.log(horizontalMenuScrollableWidth);

		//need to find out visible width of "menu-inner-container" class
		let menuInnerContainerWidth = $(
			'#' +
				horizontalMenuParentID +
				' >.wedding-menu-left-inner>.main-menu-left',
		).width();
		console.log(menuInnerContainerWidth);

		//this is the value of total scrolable area of horizontal menu
		let horizontalMenuScroll =
			horizontalMenuScrollableWidth - menuInnerContainerWidth;
		console.log(horizontalMenuScroll);

		//now we need to make a scroll left of "total scrolable area"
		let scrollableMenu =
			horizontalMenuScroll -
			$(
				'#' +
					horizontalMenuParentID +
					' >.wedding-menu-left-inner>.main-menu-left',
			).scrollLeft();
		console.log('scrollableMenu : ' + scrollSpeed * scrollableMenu);
		// when mouse inter in right-arrow then scroll start
		if (rightArrow) {
			$(
				'#' +
					horizontalMenuParentID +
					' >.wedding-menu-left-inner>.main-menu-left',
			).animate(
				{
					scrollLeft: horizontalMenuScroll,
				},
				scrollSpeed * scrollableMenu,
			);
		} else if (leftArrow) {
			$(
				'#' +
					horizontalMenuParentID +
					' >.wedding-menu-left-inner>.main-menu-left',
			).animate(
				{
					scrollLeft: 0,
				},
				scrollSpeed *
					$(
						'#' +
							horizontalMenuParentID +
							' >.wedding-menu-left-inner>.main-menu-left',
					).scrollLeft(),
			);
		}

		// gape between left menu all code start  from here
		// let animationSpeed = (scrollSpeed*scrollableMenu)/13;
		// if(rightArrow){
		//     let position = 4;
		//     let intervel = setInterval(function(){
		//         position++;
		//         $(".wedding-menu-left-inner > ul > li:nth-child("+ position +")").addClass("active").siblings(".active").removeClass('active');
		//         if(position == 16){
		//             clearInterval(intervel);
		//         }
		//         console.log("position number :"+ position);
		//     },animationSpeed);
		// }else{
		//     clearInterval(intervel);
		// }
	});

	// when mouse leave from arrow then scroll should stop

	$('.wedding-menu-left-outer > i').on('mouseleave', function() {
		let horizontalMenuParentID = $(this).parent(
			'.wedding-menu-left-outer',
		)[0].id;
		$(
			'#' +
				horizontalMenuParentID +
				' >.wedding-menu-left-inner>.main-menu-left',
		).stop();
	});

	// for right menu
	// -----------------
	// $('.wedding-menu-right-outer > i').on('mouseenter', function(){
	// 	// init class,ID on valiable when mouse inter
	// 	let horizontalMenuParentID = $(this).parent('.wedding-menu-right-outer')[0].id;
	// 	let leftArrow = $(this).hasClass('left-arrow');
	// 	let rightArrow = $(this).hasClass('right-arrow');

	// 	// need to find total width of "menu-inner-container" class
	// 	let horizontalMenuScrollableWidth = $("#"+horizontalMenuParentID+" >.wedding-menu-right-inner>.main-menu-right")[0].scrollWidth;
	// 	console.log("right menu "+ horizontalMenuScrollableWidth);

	// 	//need to find out visible width of "menu-inner-container" class
	// 	let menuInnerContainerWidth = $("#"+horizontalMenuParentID+" >.wedding-menu-right-inner>.main-menu-right").width();
	// 	console.log(menuInnerContainerWidth);

	// 	//this is the value of total scrolable area of horizontal menu
	// 	let horizontalMenuScroll = horizontalMenuScrollableWidth - menuInnerContainerWidth;
	// 	console.log(horizontalMenuScroll);

	// 	//now we need to make a scroll left of "total scrolable area"
	// 	let scrollableMenu = horizontalMenuScroll - $("#"+horizontalMenuParentID+" >.wedding-menu-right-inner>.main-menu-right").scrollLeft();
	// 	// when mouse inter in right-arrow
	// 	if(rightArrow){
	// 		$("#"+horizontalMenuParentID+" >.wedding-menu-right-inner>.main-menu-right").animate({
	// 			scrollLeft: horizontalMenuScroll
	// 		},scrollSpeed*scrollableMenu);
	// 	} else if(leftArrow){
	// 		$("#"+horizontalMenuParentID+" >.wedding-menu-right-inner>.main-menu-right").animate({
	// 			scrollLeft: 0
	// 		},scrollSpeed * $("#"+horizontalMenuParentID+" >.wedding-menu-right-inner>.main-menu-right").scrollLeft());
	// 	}
	// });

	// when mouse leave from arrow then scroll should stop

	// $('.wedding-menu-right-outer > i').on('mouseleave', function(){
	// 	let horizontalMenuParentID = $(this).parent('.wedding-menu-right-outer')[0].id;
	// 	$("#"+horizontalMenuParentID+" >.wedding-menu-right-inner>.main-menu-right").stop();
	// });

	const speed = 3000;

	function slideLeft() {
		sliderContainer = '.menu-left';
		RsliderContainer = '.menu-right';
		remLength =
			$(sliderContainer)[0].scrollWidth - $(sliderContainer).width();
		scrollable = remLength - $(sliderContainer).scrollLeft();
		RremLength =
			$(RsliderContainer)[0].scrollWidth - $(RsliderContainer).width();
		Rscrollable = RremLength - $(RsliderContainer).scrollLeft();
		$(sliderContainer).animate(
			{
				scrollLeft: remLength,
			},
			speed,
		);

		$(RsliderContainer).animate(
			{
				scrollLeft: RremLength,
			},
			speed,
		);
	}

	function slideRight() {
		sliderContainer = $('.menu-left');
		RsliderContainer = $('.menu-right');
		$(sliderContainer).animate(
			{
				scrollLeft: 0,
			},
			speed,
		);
		$(RsliderContainer).animate(
			{
				scrollLeft: 0,
			},
			speed,
		);
	}

	$('.right-arrow').on('mouseover', slideLeft);
	$('.left-arrow').on('mouseover', slideRight);

	function stop() {
		$('.menu-left').stop();
		$('.menu-right').stop();
	}

	$('.right-arrow, .left-arrow').on('mouseout', stop);

	// for mobile devices menu function
	// ------------------------------------------

	function slideLeftForMobile() {
		sliderContainer = '.mobile-menu-width';
		remLength =
			$(sliderContainer)[0].scrollWidth - $(sliderContainer).width();
		scrollable = remLength - $(sliderContainer).scrollLeft();
		$(sliderContainer).animate(
			{
				scrollLeft: remLength,
			},
			speed,
		);
	}

	function slideRightForMobile() {
		sliderContainer = $('.mobile-menu-width');
		$(sliderContainer).animate(
			{
				scrollLeft: 0,
			},
			speed,
		);
	}

	$('.mobile-right-arrow').on('mouseover', slideLeftForMobile);
	$('.mobile-left-arrow').on('mouseover', slideRightForMobile);

	function stopForMobile() {
		$('.mobile-menu-width').stop();
	}

	$('.mobile-right-arrow, .mobile-left-arrow').on('mouseout', stopForMobile);

	// for mobile devices menu function END
	// =====================================

	// main content right-menu "tab-content" functionality START here
	// ----------------------------------------------------------------

	$('ul.tab-menu li').click(function(e) {
		let tab_id = $(this).attr('data-tab');
		$('ul.tab-menu li').removeClass('current');
		$('.tab-content').removeClass('current');
		$(this).addClass('current');
		$('#' + tab_id).addClass('current');
	});

	// main content right-menu "tab-content" functionality END here
	// ----------------------------------------------------------------

	let menuObj = $('ul.tab-menu li');
	let menuText = menuObj.html();
	console.log(menuText);
	let newString = menuText.substring(0, 3);

	$(menuObj).each(function(index, value) {
		console.log(newString + '...' + value);
	});

	// document ready function end
});

// raw JavaScript code here
// =========================
