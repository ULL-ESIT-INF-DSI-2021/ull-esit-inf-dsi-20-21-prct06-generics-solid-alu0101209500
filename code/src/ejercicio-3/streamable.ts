export interface Streamable <T>{
    getNumberOfElements():number;
    searchElement(criterio: string, val: string|number): T[];
    addElement(element: T):void;
    removeElement(id: number):void;
}