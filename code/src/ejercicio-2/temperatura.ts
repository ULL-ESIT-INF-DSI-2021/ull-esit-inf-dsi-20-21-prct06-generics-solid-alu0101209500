import {isConvertible} from "./isConvertible";

export class Temperatura implements isConvertible<[string, number]>{
    unidades: [string[], number[]];
    constructor(){
        this.unidades = [["C", "K"], [0, 273.15]];
    }
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