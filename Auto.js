export default class Auto{
    constructor( marca, modelo, color="Azul", kilometraje=0){
        this._marca=marca
        this._modelo=modelo
        this._color=color
        this._kilometraje=kilometraje
        this._estado="Apagado"
    }
    get color(){
        return this._color
    }
    set color(color){
        this._color=color.toUpperCase()

    }
    mostrarEstado(){
        console.log(`El auto ${this._marca} ${this._color} del año ${this._modelo} 
        tiene un kilometraje de ${this._kilometraje}kms y esta ${this._estado}`)
    }
    encender(){
        this._estado="Encendido"
        this.mostrarEstado()
    }
    apagar(){
        this._estado="Apagado"
        this.mostrarEstado()
    }
    Avanzar(velocidad, tiempo){
        if(this._estado==="Apagado"){
            console.log("El auto esta apagado por consecuente no puede avanzar")
        }
        else{
            let distancia =velocidad*tiempo
            this._kilometraje=this._kilometraje+distancia
            this.mostrarEstado()
        }
    }
}