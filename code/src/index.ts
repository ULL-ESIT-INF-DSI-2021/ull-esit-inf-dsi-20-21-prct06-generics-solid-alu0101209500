import {Velocidad} from "./ejercicio-2/velocidad";
import {Masa} from "./ejercicio-2/masa";
import {Tiempo} from "./ejercicio-2/tiempo";
import {Volumen} from "./ejercicio-2/volumen";
import {Longitud} from "./ejercicio-2/longitud";
import {Fuerza} from "./ejercicio-2/fuerza";
import {Temperatura} from "./ejercicio-2/temperatura";

let vel = new Velocidad();
let mas = new Masa();
let tiem = new Tiempo();
let vol = new Volumen();
let lng = new Longitud();
let frz = new Fuerza();
let tmp = new Temperatura();

console.log(vel.convert(["km/h", 1], "m/s"));
console.log(vel.convert(["km/h", 1], "mi/h"));
console.log(tiem.convert(["s", 60], "min"));
console.log(mas.convert({unitname: "kg", val: 2}, "g"));
console.log(vol.convert(["m3", 1], "l"));
console.log(lng.convert(["km", 1], "m"));
console.log(frz.convert(["N", 1], "dina"));
console.log(tmp.convert(["C", 1], "K"));