//// Mensaje por consola de tipo informativo
// para mostrar texto sin formato texto plano
console.log(" mensaje de texto sin formato")
// para mostrar informacion
console.info("soy texto ")
// Para mostar mensaje de error 
console.error("soy un error")
// mostrar un mensaje de alerta
console.warn("soy alerta")

// Mensaje por consola de gestion de tiempo
console.time("Tiempo de ejecucion")
edad=16
if(edad<= 18){
    console.log("eres mayor de edad")
} else{
    console.warn("eres menor")
}
console.timeEnd("Tiempo de ejecucion")

//mensaje de tipo tabla
console.table("soy una tabla, edwin es un clavo")
lenguajes=[
    {nombre_:"javascript",extension:".js"},
    {nombre_:"python",extension:".py"},
    {nombre_:"php",extension:".php"}
 ]
 console.log(lenguajes)
 console.table(lenguajes)
