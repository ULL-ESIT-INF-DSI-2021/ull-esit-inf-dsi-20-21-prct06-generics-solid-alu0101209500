import "mocha";
import {expect} from "chai";
import {Rational} from "../../src/modif/Rational";

let r1 = new Rational(2, 2);
let r2 = new Rational(3, 1);
describe('Complejo:', () =>{
  it('Se debe poder sumar dos racionales.', () =>{
    expect(r1.add(r2).getString()).to.be.equal("8/2");
  });
  it('Se debe poder restar dos racionales.', () =>{
    expect(r1.substract(r2).getString()).to.be.equal("-4/2");
  });
  it('Se debe poder multiplicar dos racionales.', () =>{
    expect(r1.multiply(r2).getString()).to.be.equal("6/2");
  });
  it('Se debe poder dividir dos racionales.', () =>{
    expect(r1.divide(r2).getString()).to.be.equal("2/6");
  });
  it('Se debe poder imprimir un racional.', () =>{
    expect(r1.print()).to.be.undefined;
  });
});