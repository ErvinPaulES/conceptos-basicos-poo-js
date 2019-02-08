import Auto from "./Auto.js"
let auto1 = new Auto("Ford", 2000, "rojo", 100)
let auto2= new Auto("Nissan", 2018, "blanco")
let auto3 = new Auto("VW", 2010)

console.log(`Color ${auto1.color}`)
console.log(`Color ${auto2.color}`)
auto1.color="Amarillo"
auto2.color="Azul"

auto1.mostrarEstado()
auto1.encender()
auto1.Avanzar(50, 2)
auto1.apagar()
auto1.Avanzar(20, 1)

auto2.encender()
auto3.encender()