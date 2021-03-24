import {BasicStreamableCollection} from "./basicStreamableCollection";

export type serie = {
    nombre: string;
    temporadas: number;
    capitulos: number;
    plataforma: string;
};

export class SerieStreamableCollection extends BasicStreamableCollection<serie>{
    constructor(col: serie[]){
        super(col);
    }
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
    print(){
        this.collection.forEach((v, index) => (console.log(`ID: ${index}\nNombre: ${v.nombre}\nTemporadas: ${v.temporadas}\nCapitulos: ${v.capitulos}\nPlataforma: ${v.plataforma}\n`)));
    }
}