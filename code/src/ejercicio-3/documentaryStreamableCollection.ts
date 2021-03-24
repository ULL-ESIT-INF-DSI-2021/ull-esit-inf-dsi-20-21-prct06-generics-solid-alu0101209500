import {BasicStreamableCollection} from "./basicStreamableCollection";

export type documentary = {
    nombre: string;
    localizacion: string;
    categoria: string;
    estreno: number;
};

export class DocumentaryStreamableCollection extends BasicStreamableCollection<documentary>{
    constructor(col: documentary[]){
        super(col);
    }
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
    print(){
        this.collection.forEach((v, index) => (console.log(`ID: ${index}\nNombre: ${v.nombre}\nCategoría: ${v.categoria}\nLocalización: ${v.localizacion}\nAño de publicación: ${v.estreno}\n`)));
    }
}