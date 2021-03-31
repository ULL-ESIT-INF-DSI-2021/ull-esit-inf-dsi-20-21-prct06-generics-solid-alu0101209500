import {isConvertible} from "./isConvertible";

/**
 * Clase para convertir sistemas y unidades de tiempo
 */
export class Tiempo implements isConvertible<[string, number]>{
    /**
     * @param unidades Relación entre las unidades definidas en la clase.
     */
    unidades: [string[], number[]];
    /**
     * Constructor de la clase
     */
    constructor(){
        this.unidades = [["s", "h", "min"], [3600, 1, 60]];
    }
    /**
     * Realiza el cambio de unidades de tiempo
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