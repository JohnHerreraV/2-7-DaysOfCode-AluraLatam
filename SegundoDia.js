let nombre = prompt ("Ingresa tu nombre")
const edad = prompt ("Ingresa tu edad")
let lenguajeProgramacion = prompt ("¿Que lenguaje de programación estas estudiando?")

alert(`Hola ${nombre}, tienes ${edad} años y estás aprendiendo ${lenguajeProgramacion}!`)

alert(`Te gusta estudiar ${lenguajeProgramacion}?`)
const opcion = parseInt(prompt(`Marca 1 para si o 2 para no`))

if (opcion === 1){
    alert ("!Muy bien Sigue estudiando y tendrás mucho exito");
       
} else{
    alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?")
}
