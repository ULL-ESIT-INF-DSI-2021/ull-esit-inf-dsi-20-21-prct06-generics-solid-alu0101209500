import "mocha";
import {expect} from "chai";
import {Velocidad} from "../../src/ejercicio-2/velocidad";

let v = new Velocidad();
describe('Velocidad:', () =>{
  it('Se debe poder convertir unidades de velocidad con formato [nombreunidad, valor].', () =>{
      expect(v.convert(["m/s", 1], "km/h")[1]).to.be.equal(3.6);
      expect(v.convert(["km/h", 1], "mi/h")[1]).to.be.equal(0.621);
  });
});