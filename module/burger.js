burger();
function burger() {
	const hamb = document.querySelector("#hamb");
	if(!hamb) { return false; }

	const popup = document.querySelector("#popup");
	const menu = document.querySelector("#menu").cloneNode(1);
	const body = document.body;

	hamb.addEventListener("click", hambHandler);

	function hambHandler(event) {
		event.preventDefault();
		popup.classList.toggle("open");
		hamb.classList.toggle("active");
		body.classList.toggle("noscroll");
		renderPopup();
	}

	function renderPopup() {
		popup.append(menu);
	}

	//Код для закрытия меню при нажатии на ссылку
	const links = Array.from(menu.children);
	//console.log(links);

	links.forEach((link) => {
		link.addEventListener("click", closeOnClick);
	});

	function closeOnClick() {
		popup.classList.remove("open");
		hamb.classList.remove("active");
		body.classList.remove("noscroll");
	}
}