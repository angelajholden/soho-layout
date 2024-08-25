function clickMenu() {
	const icon = document.querySelector(".menu");
	const nav = document.querySelector(".navigation");

	icon.addEventListener("click", (e) => {
		const clicked = e.target.classList.contains("active");

		if (clicked) {
			icon.classList.remove("active");
			nav.classList.remove("active");
		} else {
			icon.classList.add("active");
			nav.classList.add("active");
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
	clickMenu();
	searchOpen();
});
