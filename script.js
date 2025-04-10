




function createSixteenGrid() {
    const gridContainer = document.querySelector(".grid-container");
    for (let i = 0; i < 16; i++) {
       const gridNode = document.createElement("div");
       gridNode.classList.add("grid-node");
       gridContainer.appendChild(gridNode);
    }
}