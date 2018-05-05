
const container = document.getElementById("container");
function generateGrid (gridSize = 16) {
	for ( i = 0; i < Math.pow(gridSize, 2); ++i) {
		let newDiv = document.createElement("div");
		container.appendChild(newDiv);
		container.style.setProperty("--gridSize", gridSize);
	}

}