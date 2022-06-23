const board = document.querySelector("#board");
const colors = ["#ff0000", "#00ff5f", "#ff4f00", "#08457e", "#0000ff", "#ffff00", "#000000", "#f2f3f4", "#5a005a", "#ff00a0", "#808080", "#c0c0c0", "#ffe5b4"]
const SQUARES_NUMBER = 450;

for (let i = 0; i < SQUARES_NUMBER; i++) {
	const square = document.createElement("div");
	square.classList.add("square");

	square.addEventListener("mouseover", setColor);
	
	square.addEventListener("mouseleave", removeColor);

	board.append(square);
}

function setColor(event) {
	const element = event.target;	
	const color = getRandomColor();
	element.style.backgroundColor = color;
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor() {
	const element = event.target;
	element.style.backgroundColor = "cyan";
	element.style.boxShadow = `0 0 2px cyan`;
}

function getRandomColor() {
	return colors[ Math.floor(Math.random() * colors.length)];
}