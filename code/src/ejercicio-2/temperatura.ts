import {isConvertible} from "./isConvertible";

/**
 * Clase para convertir sistemas y unidades de temperatura
 */
export class Temperatura implements isConvertible<[string, number]>{
    /**
     * @param unidades Relación entre las unidades definidas en la clase.
     */
    unidades: [string[], number[]];
    /**
     * Constructor de la clase
     */
    constructor(){
        this.unidades = [["C", "K"], [0, 273.15]];
    }
    /**
     * Realiza el cambio de unidades de temperatura
     * @param val1 Valor a convertir
     * @param val2 Unidad a la que se desea convertir
     */
    convert(val1:[string, number], val2:string): [string, number]{
        if(val1[0] == val2){
            return val1;
        }else if(val1[0] == "C" && val2 == "K"){
            return ["K", val1[1] + 273.15];
        }else if(val1[0] == "K" && val2 == "C"){
            return ["C", val1[1] - 273.15];
        }else{
            throw console.error("Se está intentando convertir una unidad no definida");
        }
    }
}