const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = {crossDomain: true}

$.get(LUKE_URL, opts, function(luke){
    console.log(`Hola yo soy ${luke.name}`)
});