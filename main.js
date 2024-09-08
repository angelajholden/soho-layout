function updateInnerText(id, text) {
	const element = document.getElementById(id);
	if (element) {
		element.innerText = text;
	}
}

function copyright() {
	const year = new Date().getFullYear();
	updateInnerText("date", year);
}

function youAreHere() {
	const links = document.querySelectorAll(".navigation a");
	const currentHref = window.location.href;
	links.forEach((link) => {
		if (link.href === currentHref) {
			link.classList.add("active");
		}
	});
}

function toggleActiveOnClick(selector, targetSelectors) {
	const icon = document.querySelector(selector);
	const body = document.querySelector("body");

	icon.addEventListener("click", () => {
		const isActive = icon.classList.contains("active");
		const toggleAction = isActive ? "remove" : "add";

		[icon, body, ...targetSelectors.map((sel) => document.querySelector(sel))].forEach((el) => {
			el.classList[toggleAction]("active");
		});
	});
}

document.addEventListener("DOMContentLoaded", () => {
	copyright();
	youAreHere();
	toggleActiveOnClick(".menu", [".navigation"]);
	toggleActiveOnClick(".search", [".search-drawer"]);
});
