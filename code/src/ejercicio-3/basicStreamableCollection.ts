import {Streamable} from "./streamable";
import {Printable} from "./printable";

/**
 * Define una clase abstacta de colecciones de contenido audiovisual
 */
export abstract class BasicStreamableCollection<T> implements Streamable<T>, Printable {
    /**
     * Constructor de la clase.
     * @param collection Array de elementos inicial
     */
    constructor(protected collection:T[]){}
    /**
     * Añade un elemento a la colección
     * @param element Elemento a añadir
     */
    addElement(element: T){
        this.collection.push(element);
    }
    /**
     * Elimina un elemento de la colección
     * @param id ID del elemento a eliminar
     */
    removeElement(id: number){
        let aux:T[] = [];
        this.collection.forEach((v, index) => {if(id != index) aux.push(v);});
        this.collection = [...aux];
    }
    /**
     * Obtiene el número de elementos de la colección
     */
    getNumberOfElements(){
        return this.collection.length;
    }
    /**
     * Busca un elemento en la colección
     * @param criterio Criterio de búsqueda
     * @param val Valor de búsqueda
     */
    abstract searchElement(criterio: string, val: string|number): T[];
    /**
     * Imprime por pantalla la información de los elementos de la colección.
     */
    abstract print():void;
}