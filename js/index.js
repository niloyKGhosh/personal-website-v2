const nav = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
	console.log(window.scrollY);
	if (window.scrollY > nav.offsetHeight) {
		nav.classList.add("bg-custom-scrolled");
	} else {
		nav.classList.remove("bg-custom-scrolled");
	}
});
