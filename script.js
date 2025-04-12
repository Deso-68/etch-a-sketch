const DEFAULT_GRID_SIZE = 16;
const gridContainer = document.querySelector(".grid-container");

// main
createSixteenGridContainer(DEFAULT_GRID_SIZE);
addHoverEvent();

addNewGridBtnEvent();

function addNewGridBtnEvent() {
    const newGridBtn = document.querySelector(".btn-new-grid");

    newGridBtn.addEventListener("click", () => {
        const gridSize = promptGridSize();

        console.log("hello");
        
        while(gridContainer.firstChild) {
            gridContainer.removeChild(gridContainer.firstChild);
        }

        createSixteenGridContainer(gridSize);
        addHoverEvent();
    });
}

function promptGridSize() {
    const userPromptSize = prompt("Input the number of squares per side for the new the grid, max is 100");
    
    if(userPromptSize < 0 || userPromptSize > 100) {
        alert("Valid number is 1-100 range");
        return promptGridSize();
    } 

    return userPromptSize;
}

function addHoverEvent() {
    const gridNode = document.querySelectorAll(".grid-node");
    console.log(gridNode);

    gridNode.forEach(element => {
        element.addEventListener("mouseenter", () => {
            element.setAttribute("style", "background-color: red;");
            }, once);
   }); 
}

function randomRgbValue() {
    
}

function createSixteenGridContainer(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const sixteenGridContainer = document.createElement("div");
        sixteenGridContainer.classList.add("sixteen-grid-container");

        gridContainer.appendChild(sixteenGridContainer);
        createSixteenGrid(sixteenGridContainer, gridSize);
    }
}

function createSixteenGrid(sixteenGridContainer, gridSize) {
    for (let i = 0; i < gridSize; i++) {
       const gridNode = document.createElement("div");
       gridNode.classList.add("grid-node");
       sixteenGridContainer.appendChild(gridNode);
    }
}