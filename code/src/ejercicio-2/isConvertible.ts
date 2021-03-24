/**
 * Estructura de una interfaz para definir objetos que permitan conversion de sistemas / unidades.
 */
export interface isConvertible<T> {
    unidades:[string[], number[]];
    convert(val1:T, val2:string):T;
}