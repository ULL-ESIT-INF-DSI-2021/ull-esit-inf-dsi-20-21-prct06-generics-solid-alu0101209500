import "mocha";
import {expect} from "chai";
import {Tiempo} from "../../src/ejercicio-2/tiempo";

let v = new Tiempo();
describe('Tiempo:', () =>{
  it('Se debe poder convertir unidades de tiempo con formato [nombreunidad, valor].', () =>{
      expect(v.convert(["s", 6], "min")[1]).to.be.equal(0.1);
      expect(v.convert(["h", 1], "min")[1]).to.be.equal(60);
  });
});