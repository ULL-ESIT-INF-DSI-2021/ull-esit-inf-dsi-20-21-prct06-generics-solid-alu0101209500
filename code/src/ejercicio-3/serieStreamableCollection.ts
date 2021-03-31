import {BasicStreamableCollection} from "./basicStreamableCollection";

/**
 * Define un objeto serie, con nombre de la serie, número de temporadas, número de capítulos y plataforma de emisión
 */
export type serie = {
    nombre: string;
    temporadas: number;
    capitulos: number;
    plataforma: string;
};

/**
 * Define una clase para instanciar colecciones de series
 */
export class SerieStreamableCollection extends BasicStreamableCollection<serie>{
    /**
     * Constructor de la clase
     * @param col Array de elementos inicial
     */
    constructor(col: serie[]){
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
            case "temporadas":
                return this.collection.filter((a) => (a.temporadas == Number(val)));
                break;
            case "capitulos":
                return this.collection.filter((a) => (a.capitulos == Number(val)));
                break;
            case "plataforma":
                return this.collection.filter((a) => (a.plataforma == String(val)));
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
        this.collection.forEach((v, index) => (console.log(`ID: ${index}\nNombre: ${v.nombre}\nTemporadas: ${v.temporadas}\nCapitulos: ${v.capitulos}\nPlataforma: ${v.plataforma}\n`)));
    }
}