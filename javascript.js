const container = document.querySelector('#container');

let counter = 1;
let content;
while (counter <= 4096) {
    content = document.createElement('div');
    content.classList.add('theDiv');
    container.appendChild(content);
    counter++;
}
//hover effect
let allDiv = document.querySelectorAll('.theDiv');
allDiv.forEach(div => {
    div.addEventListener('mouseover', function (e) {
        e.srcElement.classList.add('hover');
    })
});
//clear board
const clearBoard = document.querySelector('.clearBoard');
clearBoard.addEventListener('click', () => {
    const removeClass = document.querySelectorAll('.theDiv');
    removeClass.forEach(div => {
        div.classList.remove('hover');
    })
})
//function to remove div
function removeDiv() {
    allDiv.forEach(item => {
        container.removeChild(item);
    });
}

//grid generator
/*let grid;
let gridCounter = 1;
const askGrid = document.querySelector('.changeGrid');
askGrid.addEventListener('click', () => {
    grid = parseInt(prompt("Enter a number between 2-64"));
    allDiv.forEach(item => {
        container.removeChild(item);
    });
    while (gridCounter <= grid * grid) {
        content = "";
        content = document.createElement('div');
        content.classList.add('theDiv');
        content.setAttribute('style', 'height: `${500/grid}`px, width: `${500/grid}`px');
        container.appendChild(content);
        gridCounter++;
    }
})*/
