export interface isConvertible<T> {
    unidades:[string[], number[]];
    convert(val1:T, val2:string):T;
}