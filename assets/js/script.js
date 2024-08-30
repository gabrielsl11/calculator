document.querySelectorAll('.button').forEach(element => {
    element.addEventListener('click', (e) => {
        addValue(element.innerHTML);
    })
});

function addValue(value) {
    var input = document.querySelector('#screen');
    if (value == 'CE') {
        input.value = '';
    } else if (value == '=') {
        input.value = eval(input.value);
    } else {
        input.value += value;
    }
}