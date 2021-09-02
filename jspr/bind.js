//.bind() method
let person = {
    name: 'Elon',
    age: 50
};

function printObjectProps(){
    console.log(this.name , this.age);
}

let p1func = printObjectProps.bind(person);

p1func();
