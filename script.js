

// main
createSixteenGridContainer();
addHoverEvent();


function addNewGridBtnEvent() {
    const newGridBtn = document.querySelector(".btn-new-grid");

    newGridBtn.addEventListener("click", () => {
        const gridSize = promptGridSize();

    });
}

function promptGridSize() {
    const userPromptSize = prompt("Input the number of squares per side for new the grid, max is 100");
}

function addHoverEvent() {
    const gridNode = document.querySelectorAll(".grid-node");
    console.log(gridNode)

    gridNode.forEach(element => {
        element.addEventListener("mouseenter", () => {
            element.setAttribute("style", "background-color: red;");
            console.log("Hovered!");
            });
   }); 
}

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