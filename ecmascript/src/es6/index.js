function newFunction(name, age, country){
    var name = name || 'chris';
    var age = age || 25;
    var country = country || 'MX';
    console.log(name, age, country)
}

//es6

function newFunction2(name="oscar", age=32, country="MX"){ //parametros por defecto
    console.log(name, age, country)
};

newFunction2();
newFunction2('Ricardo', '23', 'CO');

let hello ="hello"
let world ="Wolrd"
let epicPhrase = hello + ' ' + world;
let epicPhrase2 = `${hello} ${world}`; //template literals

let lorem = `hola esta es un ejemplo de multilinea
que hace el nuevo ecmascripts`;
console.log(lorem);


let person = {
    'name':'chris',
    'age' : 32,
    'country' : 'MX',
}

console.log(person.name, person.age);

//Destructurando un objeto
let{ name, age, country} = person;
console.log(name, age, country)

//Extender Arreglos
let team1 = ['Oscar', 'Julian', 'Ricardo']
let team2 = ['Valeria', 'Yesica', 'Camila']

let team3 = ['David', ...team1,...team2]

console.log(team3)

//nueva forma de crear objetos

let name = 'christopher'
let age = '25'

obj = {name, age};
console.log(obj)

//Arrow Functions
const name = [
    {name:'Oscar', age:32},
    {name: 'Yesica', age:27},
]
let listOfNames2 = name.map(item=>{
    console.log(item.name)
})

const listOfNames3 = (name, age, country) =>{
    ///
}

const listOfNames4 = name =>{
    ///
}

const square = num => num * num;
const valor = square(2);
console.log(valor);

//function normal
let listOfNames = name.map(function (item){
    console.log(item.name);
})

console.log(listOfNames)


 