var frutas = ["manzana","Platano","Pera","Sandía"];
frutas.push('coco')
//frutas.pop();
const quantity = frutas.length

const cadena = "christopher emmanuel"
const data = cadena.charAt(2)
const candidad = cadena.length

console.log(quantity)
console.log(candidad)
console.log(data)
console.log(cadena)
console.log(frutas);


var estudiantes = ["Maria","Sergio", 
"Rosa","Daniel"]

var profesores =["Miguel", "Campos", 
"Carlos", "Rogelio"]

saludarEstudiantes=(estudiante)=>{
    console.log(`hola, ${estudiante}`);
}

saludarProfesores=(profesor)=>{
    console.log(`Buen día ${profesor}`)
}

estudiantes.forEach(estudiante =>{
    saludarEstudiantes(estudiante)
});

for(var i = profesores.length; i >= 0; i-- ){
    saludarProfesores(profesores[i]);
}

for(var profesor of profesores){
    saludarProfesores(profesor)
} 


var auto = {
    marca: 'ford',
    modelo: '2021',
    color: 'azul',
}

console.log(auto)


// typeof : sirve para conocer que tipo de dato es una variable. 
// toUpperCase(): Convierte las letras a mayusculas
// toLowerCase(): Convierte las letras en minusculas
// length: optiene la cantidad de elementos de un arreglo y de una cadena de caracteres

//Just Strings
// charAt(parametro): Optiene un caracter de acuerdo a la posición

//Arreglos
// push('parametro'): agrega elemento a la ultima posición del arreglo
// pop('parametro'): saca el ultimo elemento del arreglo
// unshift('parametro): agrega un elemento al inicio del arreglo 
// shift('parametro) : saca un elemento de la primera posición del arreglo
// indexOf("parametro"): regresa el index o la posición del arreglo. 
// substr(parametro, segundo parametro): ??