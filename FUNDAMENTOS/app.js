/*

var num = Math.round(6.2);
console.log(num);

var nombre = "chris"
var edad = "15"

edad >= 18 ? console.log( nombre + ' es mayor de edad') : console.log( nombre + ' es menor de edad');

var mes = 3;
switch(mes){
    case 3 : console.log('Marzo'); break;
    case 4 : console.log('Abril'); break;
    case 5 : console.log('Mayo'); break;
    default :  console.log('valor incorrecto');
}

for(var i = 1; i <= 10 ; i+=2)
{
    console.log(i);
}*/

/*var promPablo = (14 + 8 + 16) / 3;
var promMaria = (12 + 18 + 10) / 3;

promPablo = promPablo.toFixed(2);
promMaria = promMaria.toFixed(2);


console.log('Promedio de pablo: ' + promPablo + ' Promedio de Maria: ' + promMaria);

if( promPablo > promMaria){
    console. log( 'Promedio de Pablo es mayor');
}else{
    console.log('Promedio de Maria es mayor');
}

promPablo > 13 ? console.log('Pablo Aprobado') : console.log('Pablo Desaprobado');

promMaria > 13 ? console.log('Maria Aprobado') : console.log('Maria Desaprobado');*/

// var year = 1995;
// var nombre = 'Christopher';

// var edad = calcularEdad(year)

// var restante=jubilacion(nombre,edad);
// console.log(restante);


// function calcularEdad(yearBorn){
//     var edad;
//     edad = 2020 - yearBorn;
    
//     return edad;
// }

// function jubilacion (nombre, edad)
// {
//     jubilacion = 65 - edad; 
    
//     return (nombre+ ' le faltan ' + jubilacion + ' años para la jubilacion');
// }


var yvonne = {
    nombre: 'yvonne',
    edad: 6,
    profesion: "Enfermera",
    sexo: "Mujer",
    altura: 1.54,
    cantidadDeLibros: 10,
}

var poly = {
    nombre: 'Poly',
    edad: 26,
    profesion: "Enfermera",
    sexo: "Mujer",
    altura: 1.70,
    cantidadDeLibros: 21,
}

var cesar = {
    nombre: 'cesar',
    edad: 36,
    profesion: "Ing",
    sexo: "Hombre",
    altura: 1.77,
    cantidadDeLibros: 30,
}

const MAYORIA_DE_EDAD = 18

const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD

function imprimirMayor(persona){
    if (esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else {
        console.log(`${persona.nombre} es menor de edad`)
    }
}

// function permitirAcceso({edad}){
//     if(!esMayorDeEdad({edad})){
//         console.log('Acceso Negado')
//     }
// }

const permitirAcceso = ({edad}) => !esMayorDeEdad({edad}) ?
console.log('Acceso Denegado') : console.log ('Acceso Aceptado') 

// var contador = 0
// const llueve = () => Math.random() < 0.25

// do 
// {
//     contador++
// }while(!llueve())


// contador === 1 ? console.log(`Fui a ver ${contador} vez`) : console.log(`Fui a ver ${contador} veces`)


personas = [ yvonne, poly, cesar]

var personasMayores = personas.filter(esMayorDeEdad)
console.log(personasMayores)

const pasarAltturaCm = (persona) => ({
        ...persona,
        altura: persona.altura * 100
    
}) 

var personasCms = personas.map(pasarAltturaCm)
console.log(personasCms)

// var acum = 0

// for (var i = 0; i < personas.length; i++){
//     acum = acum + personas[i].cantidadDeLibros
// }
const reducer = (acum, {cantidadDeLibros}) => acum + cantidadDeLibros

var totalLibros = personas.reduce(reducer, 0)

console.log(`En total de libros por todos es ${totalLibros}`)
