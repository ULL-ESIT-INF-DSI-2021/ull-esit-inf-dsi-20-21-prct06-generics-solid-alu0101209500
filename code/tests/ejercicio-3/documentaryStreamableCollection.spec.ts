import "mocha";
import {expect} from "chai";
import {DocumentaryStreamableCollection, documentary} from "../../src/ejercicio-3/documentaryStreamableCollection";

let s1:documentary = {nombre: "d1", localizacion: "l1", categoria: "c1", estreno: 1990};
let s2:documentary = {nombre: "d2", localizacion: "l2", categoria: "c2", estreno: 1991};
let s3:documentary = {nombre: "d3", localizacion: "l3", categoria: "c3", estreno: 1992};
let s4:documentary = {nombre: "d4", localizacion: "l4", categoria: "c4", estreno: 1993};

let ssc = new DocumentaryStreamableCollection([s1, s2, s3, s4]);
describe('Documental:', () =>{
    it('Se debe poder añadir documentales al catálogo', () =>{
        expect(ssc.getNumberOfElements()).to.be.equal(4);
        ssc.addElement(s4);
        expect(ssc.getNumberOfElements()).to.be.equal(5);
    });
    it('Se debe poder eliminar documentales del catálogo', () =>{
        expect(ssc.getNumberOfElements()).to.be.equal(5);
        ssc.removeElement(4);
        expect(ssc.getNumberOfElements()).to.be.equal(4);
    });
    it('Se debe poder buscar por nombre', () =>{
        expect(ssc.searchElement("Nombre", "d1")[0].nombre).to.be.equal("d1");
    });
    it('Se debe poder buscar por localización', () =>{
        expect(ssc.searchElement("Localizacion", "l2")[0].nombre).to.be.equal("d2");
    });
    it('Se debe poder buscar por categoría', () =>{
        expect(ssc.searchElement("Categoria", "c3")[0].nombre).to.be.equal("d3");
    });
    it('Se debe poder buscar por la fecha de estreno', () =>{
        expect(ssc.searchElement("Estreno", 1993)[0].nombre).to.be.equal("d4");
    });
    it('Se debe poder imprimir la información por pantalla', () =>{
        expect(ssc.print()).to.be.undefined;
    });
  });