const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = {crossDomain: true}

//Arrow Function
// const onPeopleResponse = (persona) => {
    
// }

function obtenerPersonaje(id){
    return new Promise((resolve, reject)=>{
        const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`

        $.get(url,opts, function(data){
            resolve(data)
        })
        .fail(()=>reject(id))
    })
}

onError=(id)=> {
    console.log(`Sucedio un error al obtener el personaje ${id}`)
}

// Promesas Encadenadas

// obtenerPersonaje(1)
//     .then(function(personaje){
//         console.log(`El personaje 1 es ${personaje.name}`)
//         return obtenerPersonaje(2)
//     })
//     .then(function(personaje){
//         console.log(`El personaje 2 es ${personaje.name}`)
//         return obtenerPersonaje(3)
//     })
//     .then(function(personaje){
//         console.log(`El personaje 3 es ${personaje.name}`)
//         return obtenerPersonaje(4)
//     })
//     .then(function(personaje){
//         console.log(`El personaje 4 es ${personaje.name}`)
//         return obtenerPersonaje(5)
//     })
//     .then(function(personaje){
//         console.log(`El personaje 5 es ${personaje.name}`)
//         return obtenerPersonaje(6)
//     })
//     .then(function(personaje){
//         console.log(`El personaje 6 es ${personaje.name}`)
//     })
//     .catch(onError)


// Promesas en Paralelo

let array = [1,2,3,4,5,6]

let promesas = array.map( (id) => obtenerPersonaje(id))
Promise
    .all(promesas)
    .then(function(personaje){ console.log(personaje) } )
    .catch(onError)


