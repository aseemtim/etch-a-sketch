const container = document.querySelector('#container');

let counter = 1;
while (counter <= 256) {
    const content = document.createElement('div');
    content.classList.add('theDiv');
    container.appendChild(content);
    counter ++;
}
