
const container = document.getElementById("container");
function generateGrid (gridSize = 16) {
	for ( i = 0; i < gridSize; ++i) {
		let newDiv = document.createElement("div");
		container.appendChild(newDiv);
	}

}