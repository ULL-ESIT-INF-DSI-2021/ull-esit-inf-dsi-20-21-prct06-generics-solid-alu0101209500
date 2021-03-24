import {Printable} from "../ejercicio-3/printable";
import {Effectible} from "./effectible";

/**
 * Clase para definir números racionales y sus operaciones matemáticas básicas
 */
export class Rational implements Effectible<Rational>, Printable{
    /**
     * Constructor de la clase
     * @param num Numerador
     * @param den Denominador
     */
    constructor(private num:number, private den:number){}
    /**
     * Devuelve el numerador
     */
    getNum(){
        return this.num;
    }
    /**
     * Devuelve el denominador
     */
    getDen(){
        return this.den;
    }
    /**
     * Devuelve el racional el formato de cadena de texto
     */
    getString(){
        return `${this.getNum()}/${this.getDen()}`;
    }
    /**
     * Realiza la suma de dos números racionales. El objeto que invoca al método se considera el primer operando.
     * @param val Segundo operando
     */
    add(val:Rational){
        let r: number = this.getNum()*val.getDen() + this.getDen()*val.getNum();
        let i: number = this.getDen()*val.getDen();
        return new Rational(r, i);
    }
    /**
     * Realiza la resta de dos números racionales. El objeto que invoca al método se considera el primer operando.
     * @param val Segundo operando
     */
    substract(val:Rational){
        let r: number = (this.getNum())*val.getDen() + this.getDen()*(-1*val.getNum());
        let i: number = this.getDen()*val.getDen();
        return new Rational(r, i);
    }
    /**
     * Realiza el producto de dos números racionales. El objeto que invoca al método se considera el primer operando.
     * @param val Segundo operando
     */
    multiply(val:Rational){
        let r: number = this.getNum()*val.getNum();
        let i: number = this.getDen()*val.getDen();
        return new Rational(r, i);
    }
    /**
     * Realiza la división de dos números racionales. El objeto que invoca al método se considera el primer operando.
     * @param val Segundo operando
     */
    divide(val:Rational){
        let r: number = this.getNum()*val.getDen();
        let i: number = this.getDen()*val.getNum();
        return new Rational(r, i);
    }
    /**
     * Imprime por pantall
     */
    print(){
        console.log(`${this.getNum()}/${this.getDen()}`);
    }
}