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
function addHover() {
    document.querySelectorAll('.theDiv').forEach(div => {
        div.addEventListener('mouseover', function (e) {
            e.srcElement.classList.add('hover');
        })
    });
}
addHover();
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
    document.querySelectorAll('.theDiv').forEach(item => {
        container.removeChild(item);
    });
}

//grid generator
let contentSelector;
const askGrid = document.querySelector('.changeGrid');
askGrid.addEventListener('click', () => {
    let gridCounter = 1;
    grid = parseInt(prompt("Enter a number between 2-64"));
    if (Number.isInteger(grid) && grid >1 && grid < 65) {
        removeDiv(); //removing all div before creating new grid
        while (gridCounter <= grid * grid) {
            let gridDiv = document.createElement('div');
            gridDiv.classList.add('theDiv')
            gridDiv.style = `height:${500 / grid}px; width:${500 / grid}px;`;
            container.appendChild(gridDiv);
            gridCounter++;

        }
        addHover();
    }
    else if (grid<2||grid>64){
        alert("Ony numbers between 2 and 64 are accepted.")
    }
    else {
        alert("Only integers are accepted")
    }
});


