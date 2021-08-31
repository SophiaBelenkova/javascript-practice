
let counter = 0;
document.addEventListener('DOMContentLoaded', loadjs => {
    //document.querySelector('button').onclick = levitate;

    /*document.querySelector('#namesubmit').onsubmit = function () {
        const name = document.querySelector('#name').value;
        if(name.length > 0){
            alert(`Wait, ${name}, Elon\'s gonna pick you up on Jupiter`);
        }else if(name.length === 0){
            alert('Please, enter your name');
        }
        
    };
    document.querySelector('#colorchanger').onclick = function(){
        document.querySelector('h1').style.color = 'blue';
    }
*/
});

levitate => {
    document.querySelector('h1').innerHTML = 'Elon Musk is levitating!';
    counter++;
    document.querySelector('div').innerHTML = counter;
    document.querySelector('h2').innerHTML + counter;
};
