const nav = document.getElementById('primary-navigation');
const navToggle = document.getElementById('nav-toggle');

navToggle.onclick = () => {
	// const visibility = nav.getAttribute('data-visible');
	const visibility = nav.dataset.visible

	if (visibility === "false") {
		nav.dataset.visible = 'true';
		navToggle.setAttribute('aria-expanded', true);
	} else {
		nav.dataset.visible = 'false';
		navToggle.setAttribute('aria-expanded', false);
	}

}