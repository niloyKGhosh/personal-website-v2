const nav = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
	if (window.scrollY > nav.offsetHeight) {
		nav.classList.add("navbar-bg-custom-scrolled");
	} else {
		nav.classList.remove("navbar-bg-custom-scrolled");
	}
});
