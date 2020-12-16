const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = {crossDomain: true}

//Arrow Function
const onPeopleResponse = (persona) => {
    console.log(`Hola, yo soy- ${persona.name}`)
}

function getPerson(id){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, onPeopleResponse )
}

getPerson(1)
getPerson(2)
getPerson(3)
getPerson(4)
getPerson(5)


