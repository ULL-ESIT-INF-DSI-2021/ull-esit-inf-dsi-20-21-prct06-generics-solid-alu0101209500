import {Fighter} from "./fighter";

export class DeffinitivePokedex <T extends Fighter>{
    /**
     * @param vect Vector que almacena objetos del tipo Pokemon
     */
    constructor(private vect: T[]){}
    /**
     * Imprime por pantalla la información del Pokemon con el ID indicado
     * @param id ID del Pokemon
     */
    getByID(id:number):string {
        if(id >= this.vect.length || id < 0){
            console.log("Entrada no encontrada\n");
            return "Entrada no encontrada\n";
        } else{
        return this.vect[id].print();
        }
    }
    /**
     * Devuelve el número de Pokemon que contiene la Pokedex
     */
    getNumberOfFighters(){
        return this.vect.length;
    }
    /**
     * Imprime por pantalla la información relativa a cada Pokemon contenido en la Pokedex
     */
    showFullPokedex():string {
        let result: string = "";
        for(let i:number = 0; i < this.vect.length; i++){
            console.log("\n");
            result = result + this.getByID(i) + "\n";
        }
        return result;
    }
}