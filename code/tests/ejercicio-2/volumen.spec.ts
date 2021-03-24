import "mocha";
import {expect} from "chai";
import {Volumen} from "../../src/ejercicio-2/volumen";

let v = new Volumen();
describe('Volumen:', () =>{
  it('Se debe poder convertir unidades de volumen con formato [nombreunidad, valor].', () =>{
      expect(v.convert(["m3", 1], "l")[1]).to.be.equal(100);
      expect(v.convert(["l", 200], "m3")[1]).to.be.equal(2);
  });
});