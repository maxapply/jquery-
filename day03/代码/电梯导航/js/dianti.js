$(function () {
	function showBox () {
		// 显示电梯导航
		if ( $(document).scrollTop() >= $('.recommend').offset().top ) {
			$('.fixedtool').fadeIn();
		} else {
			$('.fixedtool').fadeOut();
		}
		$('.floor>div').each(function (i, elm) {

			// 用卷起的距离和当前元素距离文档顶部的位置比较
			// 如果大于等于这个文档顶部位置，说明到达了这个div，那么就让对应的li添加类名
			if ( $(document).scrollTop() >= $(elm).offset().top ) {// 卷起距离 >= elm到文档顶部位置 
				$('.fixedtool li').eq(i).addClass('current').siblings().removeClass('current');
			}

		});
		
	}
	showBox();

	$(window).scroll(function () {
		showBox();


		// 设置类名
		// 遍历元素
		$('.floor>div').each(function (i, elm) {

			// 用卷起的距离和当前元素距离文档顶部的位置比较
			// 如果大于等于这个文档顶部位置，说明到达了这个div，那么就让对应的li添加类名
			if ( $(document).scrollTop() >= $(elm).offset().top ) {// 卷起距离 >= elm到文档顶部位置 
				$('.fixedtool li').eq(i).addClass('current').siblings().removeClass('current');
			}

		});
	});


	// 2、点击电梯导航
	$('.fixedtool li').click(function () {
		// 获取索引值
		var index = $(this).index();
		// 查找
		var topZhi = $('.floor>div').eq(index).offset().top;
		// 设置卷起距离
		// $(document).scrollTop(topZhi);
		$('body,html').animate({
			scrollTop : topZhi,
		});

	});


});