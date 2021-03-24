import "mocha";
import {expect} from "chai";
import {Fuerza} from "../../src/ejercicio-2/fuerza";

let v = new Fuerza();
describe('Fuerza:', () =>{
  it('Se debe poder convertir unidades de fuerza con formato [nombreunidad, valor].', () =>{
      expect(v.convert(["N", 1], "dina")[1]).to.be.equal(100000);
  });
});