window.addEventListener("DOMContentLoaded", (e) => {
	const anim = anime.timeline({
		loop: false,
		direction: "forwards",
	});

	anim.add({
		targets: ".landing-page",
		opacity: 1,
		easing: "easeInQuart",
		duration: 1400,
	})
		.add({
			targets: "#hexagon",
			opacity: 1,
			easing: "easeInQuart",
			duration: 200,
		})
		.add({
			targets: "#hexagon",

			strokeDashoffset: [anime.setDashoffset, 0],
			easing: "linear",
			duration: 2300,
			delay: function (el, i) {
				return i * 800;
			},
		});
});
