import {isConvertible} from "./isConvertible";

/**
 * Clase para convertir sistemas y unidades de fuerza
 */
export class Fuerza implements isConvertible<[string, number]>{
    /**
     * @param unidades Relación entre las unidades definidas en la clase.
     */
    unidades: [string[], number[]];
    /**
     * Cosntructor de la clase
     */
    constructor(){
        this.unidades = [["N", "dina"], [1, 100000]];
    }
    /**
     * Realiza el cambio de unidades de fuerza
     * @param val1 Valor a convertir
     * @param val2 Unidad a la que se desea convertir
     */
    convert(val1:[string, number], val2:string): [string, number]{
        if(this.unidades[0].indexOf(val1[0]) < 0 || this.unidades[0].indexOf(val2) < 0){
            throw console.error("Se está intentando convertir una unidad no definida");
        }else{
            return [val2, Number((val1[1] * this.unidades[1][this.unidades[0].indexOf(val2)]/ this.unidades[1][this.unidades[0].indexOf(val1[0])]).toFixed(5))];
        }
    }
}