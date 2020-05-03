// get references to inputs elements
let inputs = document.querySelectorAll('input')
let button = document.querySelector('button');


function checkValidInput(input) {
    if(input.value == '') {
        input.nextElementSibling.className = 'error';
        input.style.border = "1px solid red";
    } else {
        input.nextElementSibling.className = 'note';
        input.style.border = "";
    }
}

for(let input of Array.from(inputs)) {
    input.addEventListener('blur', () => {
        checkValidInput(input);
    });
}