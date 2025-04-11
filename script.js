

// main
createSixteenGridContainer();


function createSixteenGridContainer() {
    const gridContainer = document.querySelector(".grid-container")
    for (let i = 0; i < 16; i++) {
        const sixteenGridContainer = document.createElement("div");
        sixteenGridContainer.classList.add("sixteen-grid-container");

        gridContainer.appendChild(sixteenGridContainer);
        createSixteenGrid(sixteenGridContainer);
    }
}

function createSixteenGrid(sixteenGridContainer) {
    
    for (let i = 0; i < 16; i++) {
       const gridNode = document.createElement("div");
       gridNode.classList.add("grid-node");
       sixteenGridContainer.appendChild(gridNode);
    }
}