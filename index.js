const addClassShowBurger = document.getElementById("whereToAddShowClass");

function toggleClassBurger() {
	if (addClassShowBurger.classList == "show") {
		addClassShowBurger.classList.remove("show");
		console.log(addClassShowBurger.classList);
	} else {
		addClassShowBurger.classList.add("show");
		console.log(addClassShowBurger.classList);
	}
}

const addClassPriceList = document.getElementsByClassName(
	"whereToAddShowPrice"
);

const miss = document.getElementById("miss");
const sir = document.getElementById("sir");

function toggleClassMiss() {
	if (miss.classList == "show") {
		miss.classList.remove("show");
		console.log(miss.classList);
	} else {
		miss.classList.add("show");
		console.log(miss.classList);
	}
}
function toggleClassMister() {
	if (sir.classList == "show") {
		sir.classList.remove("show");
		console.log(sir.classList);
	} else {
		sir.classList.add("show");
		console.log(sir.classList);
	}
}
