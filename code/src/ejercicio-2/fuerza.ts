import {isConvertible} from "./isConvertible";

export class Fuerza implements isConvertible<[string, number]>{
    unidades: [string[], number[]];
    constructor(){
        this.unidades = [["N", "dina"], [1, 100000]];
    }
    convert(val1:[string, number], val2:string): [string, number]{
        if(this.unidades[0].indexOf(val1[0]) < 0 || this.unidades[0].indexOf(val2) < 0){
            throw console.error("Se está intentando convertir una unidad no definida");
        }else{
            return [val2, Number((val1[1] * this.unidades[1][this.unidades[0].indexOf(val2)]/ this.unidades[1][this.unidades[0].indexOf(val1[0])]).toFixed(5))];
        }
    }
}