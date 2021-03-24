import {Effectible} from "./effectible";

/**
 * Clase que define una colección de objetos que puedan realizar operaciones matemáticas básicas
 */
export class EffectibleCollection <T extends Effectible<T>>{
    /**
     * Constructor de la clase
     * @param collection Array de objetos que conforman la colección
     */
    constructor(protected collection: T[]){}
    /**
     * Añade un elemento a la colección
     * @param val Nuevo elemento
     */
    addEffectible(val: T){
        this.collection.push(val);
    }
    /**
     * Devuelve un elemento de la colección según su identificador
     * @param id Identificador del elemento
     */
    getEffectible(id: number):T{
        if((id < this.collection.length) && (id >= 0)) return this.collection[id];
        else throw new TypeError("Índice no válido");
    }
    /**
     * Devuelve el número de elementos de la colección
     */
    getNumberOfEffectibles():number{
        return this.collection.length;
    }
}