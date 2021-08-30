
let counter = 0;

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').onclick = levitate;

    document.querySelector('form').onsubmit = function () {
        const name = document.querySelector('#name').value;
        alert(`Wait, ${name}, Elon\'s gonna pick you up on Jupiter`);
    };
});


function levitate() {
    if (document.querySelector('h1').innerHTML === 'Elon Musk is levitating!') {
        document.querySelector('h1').innerHTML = 'Elon Musk has landed on Mars!'
    } else {
        document.querySelector('h1').innerHTML = 'Elon Musk is levitating!'
    }
    counter++;
    document.querySelector('div').innerHTML = counter;
    document.querySelector('h2').innerHTML + counter;
};

