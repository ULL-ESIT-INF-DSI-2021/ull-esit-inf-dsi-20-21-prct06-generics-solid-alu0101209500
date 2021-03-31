import {BasicStreamableCollection} from "./basicStreamableCollection";

/**
 * Define un objeto documental, con nombre del documental, localización, categoría y fecha de estreno
 */
export type documentary = {
    nombre: string;
    localizacion: string;
    categoria: string;
    estreno: number;
};

/**
 * Define una clase para instanciar colecciones de documentales
 */
export class DocumentaryStreamableCollection extends BasicStreamableCollection<documentary>{
    /**
     * Constructor de la clase
     * @param col Array de elementos inicial
     */
    constructor(col: documentary[]){
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
            case "localizacion":
                return this.collection.filter((a) => (a.localizacion == String(val)));
                break;
            case "estreno":
                return this.collection.filter((a) => (a.estreno == Number(val)));
                break;
            case "categoria":
                return this.collection.filter((a) => (a.categoria == String(val)));
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
        this.collection.forEach((v, index) => (console.log(`ID: ${index}\nNombre: ${v.nombre}\nCategoría: ${v.categoria}\nLocalización: ${v.localizacion}\nAño de publicación: ${v.estreno}\n`)));
    }
}