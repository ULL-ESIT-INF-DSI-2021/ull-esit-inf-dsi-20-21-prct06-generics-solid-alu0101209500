/*
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
*/

// import {Complex} from "./modif/Complex";
import {EffectibleCollection} from "./modif/effectibleCollection";
import {Rational} from "./modif/Rational";

let c1 = new Rational(2, 2);
let c2 = new Rational(3, 1);
c1.print();
c2.print();
console.log("----");
c1.add(c2).print();
c1.substract(c2).print();
c1.multiply(c2).print();
c1.divide(c2).print();

let col = new EffectibleCollection([c1, c2]);
console.log(col.getNumberOfEffectibles());
console.log(col.getEffectible(0).getString());