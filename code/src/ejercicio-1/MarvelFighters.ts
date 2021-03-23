import {Fighter, WeightHeight, Statistics} from "./fighter";

export class MarvelFighters extends Fighter {
    constructor(nombre:string, pa: WeightHeight,
        catchphrase: string, stats: Statistics){
            super(nombre, pa, catchphrase, stats, "Marvel");
        }
}