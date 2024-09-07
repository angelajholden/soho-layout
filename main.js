function youAreHere() {
	const links = document.querySelectorAll(".navigation a");
	const href = document.location.href;
	links.forEach((link) => {
		if (link.href === href) {
			link.classList.add("active");
		}
	});
}

function clickMenu() {
	const icon = document.querySelector(".menu");
	const nav = document.querySelector(".navigation");
	const body = document.querySelector("body");

	icon.addEventListener("click", (e) => {
		const clicked = e.target.classList.contains("active");

		if (clicked) {
			icon.classList.remove("active");
			nav.classList.remove("active");
			body.classList.remove("active");
		} else {
			icon.classList.add("active");
			nav.classList.add("active");
			body.classList.add("active");
		}
	});
}

function searchOpen() {
	const icon = document.querySelector(".search");
	const drawer = document.querySelector(".search-drawer");
	const body = document.querySelector("body");

	icon.addEventListener("click", (e) => {
		const clicked = e.target.classList.contains("active");

		if (clicked) {
			icon.classList.remove("active");
			drawer.classList.remove("active");
			body.classList.remove("active");
		} else {
			icon.classList.add("active");
			drawer.classList.add("active");
			body.classList.add("active");
		}
	});
}

document.addEventListener("DOMContentLoaded", () => {
	youAreHere();
	clickMenu();
	searchOpen();
});
