import Cl_Empleados from "./Cl_Empleados.js";
import Cl_Procesar from "./Cl_Procesar.js";

let personal1 = new Cl_Empleados("obrero", "Juan", 100)
let personal2 = new Cl_Empleados("obrero", "Ana", 50)
let personal3 = new Cl_Empleados("administrativo", "Lin", 200)
let personal4 = new Cl_Empleados("obrero", "Mary", 50)
let personal5 = new Cl_Empleados("administrativo", "Carlos", 150)

let Procesar = new Cl_Procesar()

Procesar.procesarPersonal(personal1);
Procesar.procesarPersonal(personal2);
Procesar.procesarPersonal(personal3);
Procesar.procesarPersonal(personal4);
Procesar.procesarPersonal(personal5);

let salida = document.getElementById("salida")

salida.innerHTML = "Uno de los que gana menos: "+Procesar.devolverAuxNombre();
salida.innerHTML += "<br> Monto promedio pagado a administrativos: "+Procesar.calcularPromedio();