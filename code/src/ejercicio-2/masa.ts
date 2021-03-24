import {isConvertible} from "./isConvertible";

export class Masa implements isConvertible<{unitname:string, val:number}>{
    unidades: [string[], number[]];
    constructor(){
        this.unidades = [["kg", "g"], [1, 1000]];
    }
    convert(val1:{unitname:string, val:number}, val2:string): {unitname:string, val:number}{
        if(this.unidades[0].indexOf(val1.unitname) < 0 || this.unidades[0].indexOf(val2) < 0){
            throw new TypeError("Se está intentando convertir una unidad no definida");
        }else{
            let result = {unitname: val2, val: Number((val1.val * this.unidades[1][this.unidades[0].indexOf(val2)]/ this.unidades[1][this.unidades[0].indexOf(val1.unitname)]).toFixed(3))};
            return result;
        }
    }
}