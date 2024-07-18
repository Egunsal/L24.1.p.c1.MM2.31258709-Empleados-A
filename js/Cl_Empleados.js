export default class Cl_Empleados{
    constructor(p, n, s){
        this.personal = p;
        this.nombre = n;
        this.sueldo = s;
    }
    set personal(p){
        this._personal= +p
    }
    set nombre(n){
        this._nombre = +n;
    }
    set sueldo(s){
        this._sueldo = +s
    }
    get personal(){
        return this._personal;
    }
    get nombre(){
        return this._nombre;
    }
    get sueldo(){
        return this._sueldo
    }
    
}