$(window).scroll(function() {
	if ($(".navbar").offset().top > 50) {
		$(".navbar-fixed-top").addClass("top-nav-collapse");
	} else {
		$(".navbar-fixed-top").removeClass("top-nav-collapse");
		$("a.page-scroll").hover(
			function() {$(this).css("background", "rgba(255,255,255,.3")},
			function() {$(this).css("background", "none")}	
		);
	}
});

