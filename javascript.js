const container = document.querySelector('#container');

let counter = 1;
let content;
while (counter <= 256) {
    content = document.createElement('div');
    content.classList.add('theDiv');
    container.appendChild(content);
    counter ++;
}

const allDiv = document.querySelectorAll('.theDiv');
allDiv.forEach(div => {
    div.addEventListener('mouseover', function (e) {
        e.srcElement.classList.add('hover');
    })
});

const clearBoard = document.querySelector('.clearBoard');
clearBoard.addEventListener('click', () => {
    const removeClass = document.querySelectorAll('.theDiv');
    removeClass.forEach(div => {
        div.classList.remove('hover');
    })
})
