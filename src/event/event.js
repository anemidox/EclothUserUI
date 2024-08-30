export function event(action) {
    switch (action) {
        case 'test 1':
            displayBox('Box 1 Content', 'red');
            break;
        case 'test 2':
            displayBox('Box 2 Content', 'blue');
            break;
        default:
            console.log('Unknown action:', action);
    }
}

function displayBox(content, color) {
    // Create or select a box where content will be displayed
    let box = document.querySelector('.display-box');
    
    if (!box) {
        box = document.createElement('div');
        box.classList.add('display-box');
        document.body.appendChild(box);
    }
    
    // Update the content and style of the box
    box.textContent = content;
    box.style.backgroundColor = color;
    box.style.border = '1px solid #000';
    box.style.padding = '10px';
    box.style.marginTop = '20px';
    box.style.width = 'fit-content';
}
