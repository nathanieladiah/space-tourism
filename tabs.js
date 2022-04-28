// const tabList = document.getElementById()
const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');


// tabList.addEventListener('keydown', (e) => {
// 	changeTabFocus(e);
// })

// tabList.addEventListener('keydown', changeTabFocus);

tabList.onkeydown = changeTabFocus;

tabs.forEach(tab => {
	tab.onclick = changeTabPanel;
});

let tabFocus = 0;
function changeTabFocus(e) {
// const changeTabFocus = e => {
	const keydownLeft = 37;
	const keydownRight = 39;

	if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
		tabs[tabFocus].setAttribute("tabindex", -1);

		if (e.keyCode === keydownRight) {
			tabFocus++;
			if (tabFocus >= tabs.length) {
				tabFocus = 0;
			}
			console.log(tabFocus);
		} else if (e.keyCode === keydownLeft) { 
			tabFocus--;
			if (tabFocus < 0) {
				tabFocus = tabs.length - 1;
			}
			console.log(tabFocus);
		}

		tabs[tabFocus].setAttribute("tabindex", 0);
		tabs[tabFocus].focus();
	}
}




function changeTabPanel(e) {
	const targetTab = e.target;
	const targetPanel = targetTab.getAttribute("aria-controls");
	const targetImage = targetTab.getAttribute("data-image");

	const tabContainer = targetTab.parentNode;
	const mainContainer = tabContainer.parentNode;

	tabContainer
		.querySelector('[aria-selected="true"]')
		.setAttribute("aria-selected", false);

	targetTab
		.setAttribute("aria-selected", true);

	hideContent(mainContainer, '[role="tabpanel"]');
	showContent(mainContainer, [`#${targetPanel}`]);


	hideContent(mainContainer, 'picture');
	showContent(mainContainer, [`#${targetImage}`]);
}

function hideContent(parent, content) {
	parent
		.querySelectorAll(content)
		.forEach(item => item.setAttribute("hidden", true));
}

function showContent(parent, content) {
	parent.querySelector(content).removeAttribute('hidden');
}