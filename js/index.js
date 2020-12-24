$(function () {
	const nav = document.querySelector(".navbar");
	const scrolled = document.querySelector(".navbar__bg-custom-scrolled");
	const footerYear = document.querySelector(".page-footer--year");
	const date = new Date();
	const currentYear = date.getFullYear();
	/**
	 * Setting footer year
	 */
	if (currentYear > 2020) {
		footerYear.innerHTML = `2020-${currentYear}`;
	} else {
		footerYear.innerHTML = `2020`;
	}

	/**
	 * Code taken from https://codepen.io/bradtraversy/pen/xBdyzr
	 */
	function smoothScroll(e) {
		if (this.hash !== "") {
			e.preventDefault();
			const hash = this.hash;

			$("html, body").animate(
				{
					scrollTop: $(hash).offset().top,
				},
				900
			);
		}
	}

	/**
	 * Adding active class on home during loading
	 */
	const links = $(".navbar-nav a");
	$(links[0]).parent().addClass("active");

	/**
	 * Adding smooth scroll
	 */
	$(".navbar-nav a").on("click", smoothScroll);
	$(".btn-more-about-me").on("click", smoothScroll);

	$(window).scroll(function () {
		/**
		 * Adding navbar shadow
		 */
		if (window.pageYOffset > 0) {
			scrolled.style.opacity = 1;
			nav.style.borderBottom = "0px";
		} else {
			scrolled.style.opacity = 0;
			nav.style.borderBottom = `1px solid rgba(92, 92, 92, 0.096)`;
		}
		/**
		 * Adding custom scrollspy
		 */
		const scrollLocation = $(this).scrollTop();
		const links = $(".navbar-nav a");
		links.each(function () {
			const heightFromTop = $(this.hash).offset().top;

			if (heightFromTop - 110 < scrollLocation) {
				$(this).parent().siblings().removeClass("active");
				$(this).parent().addClass("active");
			}
		});
	});
});
