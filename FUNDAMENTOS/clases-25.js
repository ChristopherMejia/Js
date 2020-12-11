class Persona{
    constructor(nombre, apellido, altura)
    {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(fn){
        var {nombre, apellido} = this

        console.log(`Hola, me llamo ${nombre} ${apellido}`)
        if(fn){
            fn(nombre, apellido)
        }
    }

    soyAlto(){
    this.altura > 1.80 ? console.log(`Soy alto`) : console.log(`Soy bajito`)

    }
}

class Desarrollador extends Persona{
    constructor(nombre, apellido, altura){
        super(nombre, apellido, altura)
    }

    saludar(fn){
        // var nombre = this.nombre
        // var apellido = this.apellido
        var {nombre, apellido} = this

        console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador`)
        if(fn){
            fn(nombre, apellido, true)
        }
    }
    
}


function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen día ${nombre} ${apellido}`)
    if(esDev)
    {
        console.log(`No sabía que eras Desarrollador`)
    }
}

var sacha = new Persona('Sacha', 'Mejia', 1.60)
var erika = new Persona('Erika', 'Martinez', 1.84)
var yvonne = new Desarrollador('yvonne', 'Alonso', 1.64)

sacha.saludar()
erika.saludar(responderSaludo)
yvonne.saludar(responderSaludo)