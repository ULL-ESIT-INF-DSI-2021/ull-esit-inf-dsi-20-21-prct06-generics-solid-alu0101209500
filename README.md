# Informe Práctica 6: Clases e interfaces genéricas. Principios SOLID.

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct06-generics-solid-alu0101209500/badge.svg?branch=master)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct06-generics-solid-alu0101209500?branch=master)

## Introducción y objetivos de la práctica:

Esta práctica tiene como propósito familiarizarnos con el uso de Clases abstractas y Clases e Interfaces genéricas para definir nuevos tipos de datos. Además, se hará uso de las herramientas Istanbul y Coveralls para analizar el porcentaje de código que está cubierto por las pruebas.

## Istanbul y Coveralls.

Para usar las herramientas Istanbul y Coveralls primero es necesario añadirlas al proyecto:

~~~
npm install --save-dev nyc coveralls
~~~

Para vincular nuestro repositorio con la página de Coveralls es necesario iniciar sesión en la misma con nuestra cuenta de github, seleccionar el repositorio al que queremos hacer seguimiento, y copiar un identificador “repo_token”, que deberemos pegarlo en un nuevo fichero llamado **.coveralls.yml**. Una vez hecho esto, modificamos el fichero package.json para añadir el siguiente script:

~~~
"coverage": "nyc npm test && nyc report --reporter=text-lcov | coveralls && rm -rf .nyc_output"
~~~

Donde la primera parte indica que se deben ejecutar las pruebas haciendo uso de nyc (El cliente de Istanbul) para obtener el porcentaje del código cubierto por pruebas, la segunda parte indica que dicha información se debe guardar en un formato lcov que a su vez será redirigido al comando que ejecuta coveralls. La tercera parte elimina los ficheros intermedios generados.

## Ejercicio 1

### La clase Fighter

Para este ejercicio se ha definido una clase abstracta básica denominada Fighter. La clase Fighter posee todos los atributos y métodos con los que debería contar cualquier luchador, pero permite añadir información adicional a las nuevas clases.

De esta forma, un objeto de la clase **Pokemon**, heredada de **Fighter**, podría tener un atributo denominado *Región*, mientras que un objeto de la clase **StarWars** no lo tendría. No obstante, ambos objetos se podrían almacenar en una misma colección de objetos **Fighter**, dado que ambas clases heredan de **Fighter**. Además, es conveniente recordar que no se pueden instanciar directamente objetos de **Fighter**, pues es una clase abstracta, siendo necesario definir primero una nueva clase a partir de ella.

~~~ typescript
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

~~~

La clase Fighter cuenta con unos métodos muy simples, pues todos ellos son getter de sus atributos, además de un método print que imprime por pantalla la información del objeto (además de devolver dicha información como cadena de texto).

Las clases creadas a partir de esta clase abstracta podrían implementar distintos métodos y atributos, pero para simplificar el ejercicio he decidido que las clases creadas cuenten únicamente con los atributos y métodos de la clase padre:

~~~ typescript
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

~~~

Podemos apreciar que el constructor de la clase StarWarsFighters recibe menos parámetros. Esto se debe a que el nombre del universo al que pertenece un luchador de esta clase debería ser el mismo para todos los objetos. Los parámetros se pasarán a su vez al constructor de la clase padre usando **super()**.

### La clase DeffinitiveCombat

~~~ typescript
export class DeffinitiveCombat <T extends Fighter>{
    /**
     * Añade los dos luchadores que participarán en el combate
     * @param fighter1 Primer luchador
     * @param fighter2 Segundo luchador
     */
    constructor(private fighter1:T, private fighter2:T){}
    /**
     * Calcula el daño que inflinge un luchador atacante a un luchador atacado
     * @param player Atacante
     * @param enemy Atacado
     * @param att Ataque del atacante
     * @param defen Defensa del atacado
     */
    ataque(player:string, enemy:string, att:number, defen:number): number{
        let efectividad: number;
        let mayorEfectividad:[string, string][] = [["pokemon", "marvel"], ["marvel", "star wars"], ["marvel", "action heroes"], ["star wars", "pokemon"], ["warhammer", "pokemon"], ["warhammer", "star wars"], ["action heroes", "star wars"], ["action heroes", "warhammer"]];
        let igualEfectividad:[string, string][] = [["pokemon", "action heroes"], ["star wars", "action heroes"], ["warhammer", "marvel"]];
        if(mayorEfectividad.filter((i) => ((i[0] == player.toLowerCase()) && (i[1] == enemy.toLowerCase()))).length > 0){
            efectividad = 2;
        }else if(igualEfectividad.filter((i) => (((i[0] == player.toLowerCase()) && (i[1] == enemy.toLowerCase())) || ((i[1] == player.toLowerCase()) && (i[0] == enemy.toLowerCase()))) ).length > 0){
            efectividad = 1;
        }else{
            efectividad = 0.5;
        }
        return Number((50 * (att/defen)*efectividad).toFixed(0));
    }
    /**
     * Inicia la simulación. Imprime por pantalla el desarrollo del combate y devuelve una cadena indicando el vencedor y los hp restantes.
     */
    start(){
        let P1:number = this.fighter1.getStats().hp;
        let P2:number = this.fighter2.getStats().hp;
        let dmg:number = 0;
        while((P1 > 0)&&(P2 > 0)){
            console.log(this.fighter1.getNombre() + " ataca a " + this.fighter2.getNombre() + ".");
            dmg = this.ataque(this.fighter1.getUniverso(), this.fighter2.getUniverso(), this.fighter1.getStats().attack, this.fighter2.getStats().deffense);
            if(dmg < 0){
                throw console.error("Tipo no definido");
            }
            console.log("El ataque ha inflingido " + String(dmg) + " de daño!");
            console.log(this.fighter1.getNombre() + ": " + this.fighter1.getCatch());
            P2 = P2 - dmg;
            if(P2 <= 0){
                console.log(this.fighter2.getNombre() + " ha sido derrotado!\n" + this.fighter1.getNombre() + " es el vencedor.");
                return (this.fighter1.getNombre() + " vence con " + P1 + " HP restantes.");
            }
            console.log(this.fighter1.getNombre() + " HP = " + String(P1) + ".\n" + this.fighter2.getNombre() + " HP = " + String(P2) + ".");
            console.log("-----------------------------------------");
            console.log(this.fighter2.getNombre() + " ataca a " + this.fighter1.getNombre() + ".");
            dmg = this.ataque(this.fighter2.getUniverso(), this.fighter1.getUniverso(), this.fighter2.getStats().attack, this.fighter1.getStats().deffense);
            if(dmg == -1){
                throw console.error("Tipo no definido");
            }
            console.log("El ataque ha inflingido " + String(dmg) + " de daño!");
            console.log(this.fighter2.getNombre() + ": " + this.fighter2.getCatch());
            P1 = P1 - dmg;
            if(P1 <= 0){
                console.log(this.fighter1.getNombre() + " ha sido derrotado!\n" + this.fighter2.getNombre() + " es el vencedor.");
                return (this.fighter2.getNombre() + " vence con " + P2 + " HP restantes.");
            }
            console.log(this.fighter1.getNombre() + " HP = " + String(P1) + ".\n" + this.fighter2.getNombre() + " HP = " + String(P2) + ".");
            console.log("-----------------------------------------");
        }
        return "";
    }
}

~~~

La clase DeffinitiveCombat funciona de manera similar a como lo hacía en prácticas anteriores, con unos pequeños cambios:

* Los combatientes ya no son del tipo **Pokemon**, ahora son del tipo genérico T, el cual hemos indicado que puede ser cualquier objeto **que extienda la clase Fighter**. De esta forma, el luchador 1 puede ser de la clase **PokemonFighters** y el luchador 2 de la clase **WarhammerFighters**, pues ambas clases heredan de **Fighter**.

* Se han cambiado los criterios a la hora de asignar el daño: Antes se hacía con el tipo del Pokémon, ahora se emplea el universo de procedencia para determinar si un luchador es más o menos efectivo que otro.

* Durante los ataques se imprime por pantalla la “catchphrase” del luchador de forma adicional al daño.

Nótese que en todo el código únicamente se hace referencia a métodos contenidos en la clase Fighter, garantizando así la compatibilidad de clases de luchadores.

Además, en el método ataque, se ha cambiado la estructura Switch-Case por dos arrays, facilitando así actualizar la información relativa a la efectividad de los ataques.

### La clase DeffinitivePokedex

~~~ typescript
export class DeffinitivePokedex <T extends Fighter>{
    /**
     * @param vect Vector que almacena objetos del tipo Pokemon
     */
    constructor(private vect: T[]){}
    /**
     * Imprime por pantalla la información del Pokemon con el ID indicado
     * @param id ID del Pokemon
     */
    getByID(id:number):string {
        if(id >= this.vect.length || id < 0){
            console.log("Entrada no encontrada\n");
            return "Entrada no encontrada\n";
        } else{
        return this.vect[id].print();
        }
    }
    /**
     * Devuelve el número de Pokemon que contiene la Pokedex
     */
    getNumberOfFighters(){
        return this.vect.length;
    }
    /**
     * Imprime por pantalla la información relativa a cada Pokemon contenido en la Pokedex
     */
    showFullPokedex():string {
        let result: string = "";
        for(let i:number = 0; i < this.vect.length; i++){
            console.log("\n");
            result = result + this.getByID(i) + "\n";
        }
        return result;
    }
}

~~~

Al igual que con **DeffinitiveCombat**, esta clase implementa un tipo genérico, que podría ser cualquier clase que extienda Fighter. De esta forma, al tener como atributo un array de T[], podemos definir una colección de luchadores, donde podremos:
* Mostrar la información de un luchador dado su identificador (**getByID()**)
* Mostrar por pantalla el número de luchadores que se encuentran registrados (**getNumberOfFighters()**)
* Mostrar la información de todos los luchadores (**showFullPokedex()**)

## Ejercicio 2

Para este ejercicio se ha implementado una interfaz genérica. Al igual que las interfaces normales, las interfaces genéricas permiten definir métodos y atributos con los que debería contar una clase que las implementen, con la diferencia de que en estas interfaces no se especifica el tipo de las propiedades, sino que en su lugar se define un tipo genérico.

~~~ typescript
export interface isConvertible<T> {
    unidades:[string[], number[]];
    convert(val1:T, val2:string):T;
}

~~~

De esta forma se ha definido una interfaz **isConvertible**, que indica que todo objeto capaz de convertir distintas magnitudes debe tener un array con la información necesaria para realizar el cambio de unidad, y un método que devuelva el resultado de la conversión. No obstante, en ningún caso indica el formato que tiene la magnitud a convertir.

Para ilustrar esto, dentro de las clases “magnitud” que he implementado, los métodos de la clase **Masa** reciben un objeto con propiedades *unitname* (string) y *val* (number) como parámetro, mientras que el resto reciben una tupla [string, number].

Los métodos de estas clases reciben tipos distintos como parámetro, pero todas ellas implementan la interfaz **isConvertible**.

Masa:
~~~ typescript
export class Masa implements isConvertible<{unitname:string, val:number}>{
    unidades: [string[], number[]];
    constructor(){
        this.unidades = [["kg", "g"], [1, 1000]];
    }
    convert(val1:{unitname:string, val:number}, val2:string): {unitname:string, val:number}{
        if(this.unidades[0].indexOf(val1.unitname) < 0 || this.unidades[0].indexOf(val2) < 0){
            throw new TypeError("Se está intentando convertir una unidad no definida");
        }else{
            let result = {unitname: val2, val: Number((val1.val * this.unidades[1][this.unidades[0].indexOf(val2)]/ this.unidades[1][this.unidades[0].indexOf(val1.unitname)]).toFixed(3))};
            return result;
        }
    }
}

~~~

Velocidad:

~~~ typescript
export class Velocidad implements isConvertible<[string, number]>{
    unidades: [string[], number[]];
    constructor(){
        this.unidades = [["m/s", "km/h", "mi/h"], [1, 3.6, 2.237]];
    }
    convert(val1:[string, number], val2:string): [string, number]{
        if(this.unidades[0].indexOf(val1[0]) < 0 || this.unidades[0].indexOf(val2) < 0){
            throw console.error("Se está intentando convertir una unidad no definida");
        }else{
            return [val2, Number((val1[1] * this.unidades[1][this.unidades[0].indexOf(val2)]/ this.unidades[1][this.unidades[0].indexOf(val1[0])]).toFixed(3))];
        }
    }
}

~~~

## Ejercicio 3

Este ejercicio nos pide definir una interfaz genérica que defina los métodos y atributos que debería tener una clase para representar colecciones de contenido audiovisual (series, películas, documentales…). Esta interfaz define las propiedades básicas de una colección: Un método para obtener el número de elementos almacenados, buscar un elemento, añadir un elemento y eliminar un elemento.

~~~ typescript
export interface Streamable <T>{
    getNumberOfElements():number;
    searchElement(criterio: string, val: string|number): T[];
    addElement(element: T):void;
    removeElement(id: number):void;
}

~~~

Además se ha definido otra interfaz, **Printable**, pues es conveniente que se pueda imprimir por pantalla el contenido de la colección. Al definir una interfaz nueva estamos respetando el principio SOLID **Interface segregation principle:** Es mejor tener un número elevado de interfaces simples y específicas que tener una interfaz compleja y genérica.

~~~ typescript
export interface Printable{
    print():void;
}

~~~

A continuación creamos la clase genérica y abstracta **BasicStreamableCollection**, de la cual podemos definir ya los métodos **addElement**, **removeElement** y **getNumberOfElements**, pues su comportamiento será similar en todas las futuras clases que hereden de esta, pero los métodos **searchElement** y **print** permanecen abstractos, pues para implementarlos debemos conocer la estructura de los objetos T que almacenará la clase.

~~~ typescript
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

~~~

El último paso sería definir las clases para almacenar series, películas, y documentales:

Series
~~~ typescript
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

~~~

Películas
~~~ typescript
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

~~~

Documentales
~~~ typescript
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

~~~

Podemos apreciar que en todas ellas los métodos de búsqueda e impresión por pantalla siguen una estructura similar, pero varían en función de las propiedades que tienen los respectivos objetos que están diseñadas para almacenar.

## Conclusiones:

La definición de clases e interfaces genéricas facilita en gran medida el diseño de estructuras de datos con un carácter más general, y pueden resultar muy útiles a la hora de diseñar software que manipule distintos tipos de objetos. A su vez, la herramienta Istanbul ha resultado de gran ayuda a la hora de redactar las pruebas, pues considero que sin ella habría pasado por alto secciones importantes del código.
