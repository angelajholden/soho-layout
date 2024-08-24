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

document.addEventListener("DOMContentLoaded", () => {
	clickMenu();
});
