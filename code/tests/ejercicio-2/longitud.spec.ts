import "mocha";
import {expect} from "chai";
import {Longitud} from "../../src/ejercicio-2/longitud";

let v = new Longitud();
describe('Longitud:', () =>{
  it('Se debe poder convertir unidades de longitud con formato [nombreunidad, valor].', () =>{
      expect(v.convert(["km", 1], "m")[1]).to.be.equal(1000);
      expect(v.convert(["km", 1], "mi")[1]).to.be.equal(0.62137);
  });
});