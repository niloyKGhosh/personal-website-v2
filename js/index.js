$(function () {
	const nav = document.querySelector(".navbar");
	const scrolled = document.querySelector(".navbar__bg-custom-scrolled");
	const footerYear = document.querySelector(".page-footer--year");
	const date = new Date();
	const currentYear = date.getFullYear();

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

			console.log(hash, $(hash).offset());
			$("html, body").animate(
				{
					scrollTop: $(hash).offset().top,
				},
				900
			);
		}
	}

	$(".navbar-nav a").on("click", smoothScroll);
	$(".btn-more-about-me").on("click", smoothScroll);

	window.addEventListener("scroll", () => {
		if (window.pageYOffset > 0) {
			scrolled.style.opacity = 1;
			nav.style.borderBottom = "0px";
		} else {
			scrolled.style.opacity = 0;
			nav.style.borderBottom = `1px solid rgba(92, 92, 92, 0.096)`;
		}
	});
});
