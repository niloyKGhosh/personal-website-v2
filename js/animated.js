const anim = anime.timeline({
	loop: false,
	direction: "forwards",
});

anim.add({
	targets: "#hexagon",
	strokeDashoffset: [anime.setDashoffset, 800],
	easing: "linear",
	duration: 3000,
	delay: function (el, i) {
		return i * 250;
	},
});
