import {isConvertible} from "./isConvertible";

export class Velocidad implements isConvertible<[string, number]>{
    unidades: [string[], number[]];
    constructor(){
        this.unidades = [["m/s", "km/h", "mi/h"], [1, 3.6, 2.237]];
    }
    convert(val1:[string, number], val2:string): [string, number]{
        if(this.unidades[0].indexOf(val1[0]) < 0 || this.unidades[0].indexOf(val2) < 0){
            throw console.error("Se está intentando convertir una unidad no definida");
        }else{
            return [val2, Number((val1[1] * this.unidades[1][this.unidades[0].indexOf(val2)]/ this.unidades[1][this.unidades[0].indexOf(val1[0])]).toFixed(3))];
        }
    }
}