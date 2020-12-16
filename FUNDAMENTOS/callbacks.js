const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = {crossDomain: true}

//Arrow Function
// const onPeopleResponse = (persona) => {
    
// }

function getPerson(id, callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    
    $.get(url, opts, function(persona){
        console.log(`Hola, yo soy- ${persona.name}`)
        if(callback){
            callback()
        }
    })

    
}

getPerson(1, function(){
    getPerson(2, function(){
        getPerson(3, function(){
            getPerson(4, function(){
                getPerson(5)
            })
        })
    })
})


