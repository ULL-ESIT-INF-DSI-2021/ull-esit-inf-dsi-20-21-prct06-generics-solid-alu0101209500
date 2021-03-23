import {Fighter, WeightHeight, Statistics} from "./fighter";

export class StarWarsFighters extends Fighter {
    constructor(nombre:string, pa: WeightHeight,
        catchphrase: string, stats: Statistics){
            super(nombre, pa, catchphrase, stats, "Star Wars");
        }
}