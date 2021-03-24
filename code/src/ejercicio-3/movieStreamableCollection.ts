import {BasicStreamableCollection} from "./basicStreamableCollection";

export type movie = {
    nombre: string;
    duracion: number;
    director: string;
    estreno: number;
};

export class MovieStreamableCollection extends BasicStreamableCollection<movie>{
    constructor(col: movie[]){
        super(col);
    }
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
    print(){
        this.collection.forEach((v, index) => (console.log(`ID: ${index}\nNombre: ${v.nombre}\nDirector: ${v.director}\nDuración: ${v.duracion}\nAño de estreno: ${v.estreno}\n`)));
    }
}