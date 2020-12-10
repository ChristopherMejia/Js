function Persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function (){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}
Persona.prototype.soyAlto = function(){
    this.altura > 1.80 ? console.log(`Soy alto`) : console.log(`Soy bajito`)
}
var sacha = new Persona('Sacha', 'Mejia', 1.60)
var erika = new Persona('Erika', 'Martinez', 1.84)
var yvonne = new Persona('yvonne', 'Alonso', 1.64)