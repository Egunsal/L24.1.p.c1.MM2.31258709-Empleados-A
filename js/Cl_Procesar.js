export default class Cl_Procesar{
    constructor(){
        this.acumSueldo = 0;
        this.contPersonal = 0;
        this.auxNombre =" ";
        this.menor = 300;
    }
    procesarPersonal(pe){
        if(pe._personal == "administrativo"){
        this.acumSueldo+= pe.sueldo;
        this.contPersonal++}
        if(this.menor > pe._sueldo){
            this.auxNombre = pe._nombre;
            this.menor = pe.sueldo;
        }
    }
    calcularPromedio(){
        return this.acumSueldo/this.contPersonal;
    }
    devolverAuxNombre(){
        return this.auxNombre;
    }


}
