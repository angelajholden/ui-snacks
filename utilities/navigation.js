export default function initNavigation() {
	const body = document.body;
	const button = document.querySelector(".menu_button");

	button.addEventListener("click", () => {
		const isActive = body.classList.toggle("menu_active");
		if (!isActive) {
			button.setAttribute("aria-expanded", "false");
		} else {
			button.setAttribute("aria-expanded", "true");
		}
	});
}
