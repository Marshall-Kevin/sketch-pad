
const container = document.getElementById("container");
const resetButton = document.getElementById("reset");
const rainbowButton = document.getElementById("rainbow");

generateGrid();

function generateGrid (gridSize = 16) {
	for ( i = 0; i < Math.pow(gridSize, 2); ++i) {
		let newDiv = document.createElement("div");
		container.appendChild(newDiv);
		container.style.setProperty("--gridSize", gridSize);
	}

}
let childNodes = container.querySelectorAll("div");
applyEvents();

function applyEvents () {
	for (i = 0; i < childNodes.length; ++i) {
	childNodes[i].addEventListener("mouseenter", darkenDiv);
    }
}		

function darkenDiv (e) {
	this.classList.add("hovered");
	return;
}

rainbowButton.addEventListener("click", function() {console.log("clicked")});
resetButton.addEventListener("click", resetGrid);

function resetGrid () {
	let resetSize = prompt("What dimensions woud you like for you sketch pad? eg. 24 gives a 24x24 grid", 16);
	while(container.firstChild) {
		container.removeChild(container.firstChild);
	}
	generateGrid(resetSize);
	childNodes = container.querySelectorAll("div");
	applyEvents();
	return;
}
