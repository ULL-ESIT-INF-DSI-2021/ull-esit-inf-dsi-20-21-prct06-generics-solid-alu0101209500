import "mocha";
import {expect} from "chai";
import {Complex} from "../../src/modif/Complex";

let c1 = new Complex(2, 2);
let c2 = new Complex(3, 1);
describe('Complejo:', () =>{
  it('Se debe poder sumar dos complejos.', () =>{
    expect(c1.add(c2).getString()).to.be.equal("5, 3i");
  });
  it('Se debe poder restar dos complejos.', () =>{
    expect(c1.substract(c2).getString()).to.be.equal("-1, 1i");
  });
  it('Se debe poder multiplicar dos complejos.', () =>{
    expect(c1.multiply(c2).getString()).to.be.equal("4, 8i");
  });
  it('Se debe poder dividir dos complejos.', () =>{
    expect(c1.divide(c2).getString()).to.be.equal("0.8, 0.4i");
  });
  it('Se debe poder imprimir un complejo.', () =>{
    expect(c1.print()).to.be.undefined;
  });
});