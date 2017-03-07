var slider = $('#slider');
slider.find(".slide-trigger").find("li").eq(0).addClass("cur");
window.mySwipe = new Swipe(document.getElementById('slider'), {
	//更多参数：https://github.com/thebird/swipe
	speed: 400,
	auto: 3000,
	continuous: true,
	callback: function(index, elem) {
		slider.find(".slide-trigger").find("li").eq(index).addClass("cur").siblings().removeClass("cur");
	}
});
