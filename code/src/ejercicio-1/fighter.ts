/**
 * Define un tipo que almacena peso y altura.
 */
export type WeightHeight = [number, number];

/**
 * Define un tipo que almacena las estadísticas de un luchador. Guarda hp, ataque, defensa y velocidad.
 */
export type Statistics = {
    hp: number;
    attack: number;
    deffense: number;
    speed: number;
};

/**
 * Define un luchador.
 */
export abstract class Fighter {
    /**
     * Constructor de la clase
     * @param nombre Nombre del luchador
     * @param pa Peso y altura
     * @param catchphrase Frase característica
     * @param stats Estadísticas del luchador
     * @param Universo A qué universo pertenece
     */
    constructor(private nombre:string, private pa: WeightHeight,
        private catchphrase: string, private stats: Statistics, private Universo:string){}
    /**
     * Devuelve una cadena con el nombre del luchador
     */
    getNombre(){
        return this.nombre;
    }
    /**
     * Devuelve una array con el peso y la altura del luchador
     */
    getPa(){
        return this.pa;
    }
    /**
     * Devuelve una cadena con el tipo del luchador
     */
    getCatch(){
        return this.catchphrase;
    }
    /**
     * Devuelve un objeto con las estadísticas del luchador
     */
    getStats(){
        return this.stats;
    }
    /**
     * Devuelve una cadena con el Universo del personaje
     */
    getUniverso(){
        return this.Universo;
    }
    /**
     * Imprime la información del luchador
     */
    print():string {
        console.log(`Nombre: ${this.getNombre()}\nPeso: ${this.getPa()[0]}\nAltura: ${this.getPa()[1]}\nUniverso: ${this.getUniverso()}\nFrase con gancho: ${this.getCatch()}\nEstadísticas: \n\tHP: ${this.getStats().hp}\n\tAtaque: ${this.getStats().attack}\n\tDefensa: ${this.getStats().deffense}\n\tVelocidad: ${this.getStats().speed}\n`);
        return (`Nombre: ${this.getNombre()}\nPeso: ${this.getPa()[0]}\nAltura: ${this.getPa()[1]}\nUniverso: ${this.getUniverso()}\nFrase con gancho: ${this.getCatch()}\nEstadísticas: \n\tHP: ${this.getStats().hp}\n\tAtaque: ${this.getStats().attack}\n\tDefensa: ${this.getStats().deffense}\n\tVelocidad: ${this.getStats().speed}\n`);
    }
}
