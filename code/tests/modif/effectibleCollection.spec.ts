import "mocha";
import {expect} from "chai";
import {Complex} from "../../src/modif/Complex";
import {EffectibleCollection} from "../../src/modif/effectibleCollection";

let c1 = new Complex(2, 2);
let c2 = new Complex(3, 1);
let col = new EffectibleCollection([c1, c2]);
describe('Colección de Complejos:', () =>{
  it('Se debe poder obtener el número de complejos.', () =>{
    expect(col.getNumberOfEffectibles()).to.be.equal(2);
  });
  it('Se debe poder añadir un complejo.', () =>{
    col.addEffectible(c2);
    expect(col.getNumberOfEffectibles()).to.be.equal(3);
  });
  it('Se debe poder recuperar un complejo de la colección.', () =>{
    expect(col.getEffectible(0).getString()).to.be.equal("2, 2i");
  });
});