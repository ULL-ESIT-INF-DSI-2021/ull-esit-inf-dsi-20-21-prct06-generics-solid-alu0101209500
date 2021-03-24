import "mocha";
import {expect} from "chai";
import {Temperatura} from "../../src/ejercicio-2/temperatura";

let v = new Temperatura();
describe('Temperatura:', () =>{
  it('Se debe poder convertir unidades de temperatura con formato [nombreunidad, valor].', () =>{
      expect(v.convert(["C", 1], "K")[1]).to.be.equal(274.15);
      expect(v.convert(["K", 373.15], "C")[1]).to.be.equal(100);
  });
});