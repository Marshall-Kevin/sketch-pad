
const container = document.getElementById("container");
generateGrid();
function generateGrid (gridSize = 16) {
	for ( i = 0; i < Math.pow(gridSize, 2); ++i) {
		let newDiv = document.createElement("div");
		container.appendChild(newDiv);
		container.style.setProperty("--gridSize", gridSize);
	}

}
let childNodes = container.querySelectorAll("div");
for (i = 0; i < childNodes.length; ++i) {
	childNodes[i].addEventListener("mouseenter", function(e) {
		this.classList.add("hovered")
	});
}		

function darkenDiv () {
	//let increment = 0;
	//increment += 10;
	this.classList.add("hovered");
	//this.style.setProperty("--increment", increment);
	return;
}