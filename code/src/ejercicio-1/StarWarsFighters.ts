import {Fighter, WeightHeight, Statistics} from "./fighter";

/**
 * Define la clase luchador "Star Wars Fighters"
 */
export class StarWarsFighters extends Fighter {
        /**
     * Constructor de la clase
     * @param nombre Nombre del luchador
     * @param pa Peso y altura
     * @param catchphrase Frase característica
     * @param stats Estadísticas del luchador
     * @param Universo A qué universo pertenece
     */
    constructor(nombre:string, pa: WeightHeight,
        catchphrase: string, stats: Statistics){
            super(nombre, pa, catchphrase, stats, "Star Wars");
        }
}