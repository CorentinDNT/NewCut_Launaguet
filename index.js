const buttonBurgerMenu = document.getElementById("icon");
const addClassShow = document.getElementById("whereToAddShowClass");

function toggleClass() {
	if (addClassShow.classList == "show") {
		addClassShow.classList.remove("show");
		console.log(addClassShow.classList);
	} else {
		addClassShow.classList.add("show");
		console.log(addClassShow.classList);
	}
}
