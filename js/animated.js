window.addEventListener("DOMContentLoaded", (e) => {
	const animation = anime.timeline({
		loop: false,
		direction: "forwards",
	});

	animation
		.add({
			targets: ".landing-page",
			opacity: 1,
			easing: "easeInQuart",
			duration: 1400,
		})
		.add({
			targets: "#border-anim",
			opacity: 1,
			easing: "easeInQuart",
			duration: 200,
		})
		.add({
			targets: "#border-anim",

			strokeDashoffset: [anime.setDashoffset, 0],
			easing: "linear",
			duration: 2300,
			delay: function (el, i) {
				return i * 800;
			},
		});
});
