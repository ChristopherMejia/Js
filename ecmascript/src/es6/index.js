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

console.log(listOfNames);

//Promise

const helloPromise = () => {
    return new Promise ((resolve, reject) => {
        if(true){
            resolve('HEY!')
        }else {
            reject('Ups!!')
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('hola'))
    .catch(error => console.log(error))


///Clases en Js ecma6

class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    suma(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.suma(2,2));

//import logic since other pagine
import {hello} from './module.js';

console.log(hello())

//exec
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');

const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day)

//flat, nos permite aplanar arreglos
let array = [1,2,3, [1,2,3,[1,2,3]]];
console.log(array.flat(2))

//flat.map permite apalnar arreglos pero antes podemos modificarlos
let array = [1,2,3,4,5];
console.log(array.flatMap(value => [value, value * 2]));

//Elmina espacios de un string
let hello ="           hello world"
console.log(hello.trimStart())

let hello = "hello world            "
console.log(hello.trimEnd())

//Creamos un objeto desde un arreglo o viseversa
let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries))



