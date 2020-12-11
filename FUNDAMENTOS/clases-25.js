class Persona{
    constructor(nombre, apellido, altura)
    {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }

    soyAlto(){
    this.altura > 1.80 ? console.log(`Soy alto`) : console.log(`Soy bajito`)

    }
}

class Desarrollador extends Persona{
    constructor(nombre, apellido, altura){
        super(nombre, apellido, altura)
    }

    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
    }
    
}

// var sacha = new Persona('Sacha', 'Mejia', 1.60)
// var erika = new Persona('Erika', 'Martinez', 1.84)
// var yvonne = new Persona('yvonne', 'Alonso', 1.64)