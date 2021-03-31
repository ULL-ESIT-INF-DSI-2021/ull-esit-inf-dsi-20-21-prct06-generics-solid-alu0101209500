import {BasicStreamableCollection} from "./basicStreamableCollection";

/**
 * Define un objeto película, con nombre de la película, duración, director y fecha de estreno
 */
export type movie = {
    nombre: string;
    duracion: number;
    director: string;
    estreno: number;
};

/**
 * Define una clase para instanciar colecciones de documentales
 */
export class MovieStreamableCollection extends BasicStreamableCollection<movie>{
    /**
     * Constructor de la clase
     * @param col Array de elementos inicial
     */
    constructor(col: movie[]){
        super(col);
    }
    /**
     * Busca un elemento en la colección
     * @param criterio Criterio de búsqueda
     * @param val Valor de búsqueda
     */
    searchElement(criterio:string, val: string|number){
        switch (criterio.toLowerCase()) {
            case "nombre":
                return this.collection.filter((a) => (a.nombre == String(val)));
                break;
            case "duracion":
                return this.collection.filter((a) => (a.duracion == Number(val)));
                break;
            case "estreno":
                return this.collection.filter((a) => (a.estreno == Number(val)));
                break;
            case "director":
                return this.collection.filter((a) => (a.director == String(val)));
                break;
            default:
                console.log("Criterio de búsqueda no válido");
                return [];
                break;
        }
    }
    /**
     * Imprime por pantalla la información de los elementos de la colección.
     */
    print(){
        this.collection.forEach((v, index) => (console.log(`ID: ${index}\nNombre: ${v.nombre}\nDirector: ${v.director}\nDuración: ${v.duracion}\nAño de estreno: ${v.estreno}\n`)));
    }
}