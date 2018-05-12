
const container = document.getElementById("container");
const resetButton = document.getElementById("reset");
const rainbowButton = document.getElementById("rainbow");
let rainbowSet = false;

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
		if (rainbowSet == true) {
			childNodes[i].addEventListener("mouseenter", makeRandomColors);
		}
		else {
			childNodes[i].addEventListener("mouseenter", darkenDiv);
		}
    }
}		

function darkenDiv (e) {
	this.classList.add("hovered");
	return;
}

function makeRandomColors (e) {
	this.classList.add("rainbowHover");
	this.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
}

rainbowButton.addEventListener("click", function() {rainbowSet = true; applyEvents();});
resetButton.addEventListener("click", resetGrid);

function resetGrid () {
	let resetSize = prompt("What dimensions woud you like for you sketch pad? eg. 16 gives a 16x16 grid", 16);
	while(container.firstChild) {
		container.removeChild(container.firstChild);
	}
	generateGrid(resetSize);
	rainbowSet = false;
	childNodes = container.querySelectorAll("div");
	applyEvents();
	return;
}
