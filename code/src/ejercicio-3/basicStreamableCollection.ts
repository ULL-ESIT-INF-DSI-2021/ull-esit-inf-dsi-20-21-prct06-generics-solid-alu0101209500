import {Streamable} from "./streamable";
import {Printable} from "./printable";

export abstract class BasicStreamableCollection<T> implements Streamable<T>, Printable {
    constructor(protected collection:T[]){}
    addElement(element: T){
        this.collection.push(element);
    }
    removeElement(id: number){
        let aux:T[] = [];
        this.collection.forEach((v, index) => {if(id != index) aux.push(v);});
        this.collection = [...aux];
    }
    getNumberOfElements(){
        return this.collection.length;
    }
    abstract searchElement(criterio: string, val: string|number): T[];
    abstract print():void;
}