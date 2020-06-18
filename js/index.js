const nav = document.querySelector(".navbar");
const scrolled = document.querySelector(".navbar-bg-custom-scrolled");
window.addEventListener("scroll", () => {
	console.log(nav.offsetHeight);
	if (window.pageYOffset > 0) {
		scrolled.style.opacity = 1;
		nav.style.borderBottom = "0px";
	} else {
		scrolled.style.opacity = 0;
		nav.style.borderBottom = `1px solid rgba(92, 92, 92, 0.096)`;
	}
});
