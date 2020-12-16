const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = {crossDomain: true}

//Arrow Function
// const onPeopleResponse = (persona) => {
    
// }

function getPerson(id, callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    
    $.get(url, opts, callback).fail(function(){
        console.log(`Sucedio un Error, no se pudo obtener el personaje ${id}`)
    })
}

getPerson(1, function(persona){
    console.log(`Hola, yo soy ${persona.name}`)
    getPerson(2, function(persona){
        console.log(`Hola, yo soy ${persona.name}`)
        getPerson(3, function(persona){
            console.log(`Hola, yo soy ${persona.name}`)
            getPerson(4, function(persona){
                console.log(`Hola, yo soy ${persona.name}`)
            })
        })
    })
})

