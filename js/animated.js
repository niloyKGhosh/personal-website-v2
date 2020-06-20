window.addEventListener("DOMContentLoaded", (e) => {
	const anim = anime.timeline({
		loop: false,
		direction: "forwards",
	});

	anim.add({
		targets: ".landing-page",
		opacity: 1,
		easing: "easeInQuad",
		duration: 1500,
	})
		.add({
			targets: "#hexagon",
			opacity: 1,
			easing: "easeInQuad",
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
