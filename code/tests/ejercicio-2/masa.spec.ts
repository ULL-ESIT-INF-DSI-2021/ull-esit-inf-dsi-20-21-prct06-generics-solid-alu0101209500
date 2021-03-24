import "mocha";
import {expect} from "chai";
import {Masa} from "../../src/ejercicio-2/masa";

let v = new Masa();
describe('Masa:', () =>{
  it('Se debe poder convertir unidades de masa con formato {unitname: nombreunidad, val: valor}.', () =>{
      expect(v.convert({unitname: "g", val: 1}, "kg").val).to.be.equal(0.001);
      expect(v.convert({unitname: "kg", val: 1}, "g").val).to.be.equal(1000);
  });
});