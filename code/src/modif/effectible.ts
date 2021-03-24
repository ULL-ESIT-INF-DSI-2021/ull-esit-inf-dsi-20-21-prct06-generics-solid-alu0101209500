/**
 * Estructura de una interfaz genérica para definir objetos que puedan realizar operaciones matemáticas básicas.
 */
export interface Effectible<T>{
    add(val: T):T;
    substract(val: T):T;
    multiply(val: T):T;
    divide(val: T):T;
}