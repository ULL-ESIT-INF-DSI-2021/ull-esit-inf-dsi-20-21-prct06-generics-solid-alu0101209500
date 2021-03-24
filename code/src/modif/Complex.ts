import {Printable} from "../ejercicio-3/printable";
import {Effectible} from "./effectible";

/**
 * Clase para definir números complejos y sus operaciones matemáticas básicas
 */
export class Complex implements Effectible<Complex>, Printable{
    /**
     * Constructor de la clase
     * @param real Parte real del complejo
     * @param imag Parte imaginaria del complejo
     */
    constructor(private real:number, private imag:number){}
    /**
     * Devuelve la parte real
     */
    getReal(){
        return this.real;
    }
    /**
     * Devuelve la parte imaginaria
     */
    getImag(){
        return this.imag;
    }
    /**
     * Devuelve el complejo en formato de cadena de texto
     */
    getString(){
        return `${this.getReal()}, ${this.getImag()}i`;
    }
    /**
     * Realiza la suma de dos números complejos. El objeto que invoca al método se considera el primer operando.
     * @param val Segundo operando
     */
    add(val:Complex){
        let r: number = this.getReal() + val.getReal();
        let i: number = this.getImag() + val.getImag();
        return new Complex(r, i);
    }
    /**
     * Realiza la resta de dos números complejos. El objeto que invoca al método se considera el primer operando.
     * @param val Segundo operando
     */
    substract(val:Complex){
        let r: number = this.getReal() - val.getReal();
        let i: number = this.getImag() - val.getImag();
        return new Complex(r, i);
    }
    /**
     * Realiza el producto de dos números complejos. El objeto que invoca al método se considera el primer operando.
     * @param val Segundo operando
     */
    multiply(val:Complex){
        let r: number = this.getReal()*val.getReal() - this.getImag()*val.getImag();
        let i: number = this.getReal()*val.getImag() + this.getImag()*val.getReal();
        return new Complex(r, i);
    }
    /**
     * Realiza la división de dos números complejos. El objeto que invoca al método se considera el primer operando.
     * @param val Segundo operando
     */
    divide(val:Complex){
        let r: number = (this.getReal()*val.getReal() + this.getImag()*val.getImag())/(Math.pow(val.getReal(), 2) + Math.pow(val.getImag(), 2));
        let i: number = (this.getImag()*val.getReal() - this.getReal()*val.getImag())/(Math.pow(val.getReal(), 2) + Math.pow(val.getImag(), 2));
        return new Complex(r, i);
    }
    /**
     * Imprime el complejo por pantalla
     */
    print(){
        console.log(`${this.getReal()}, ${this.getImag()}i`);
    }
}