import "mocha";
import {expect} from "chai";
import {MovieStreamableCollection, movie} from "../../src/ejercicio-3/movieStreamableCollection";

let s1:movie = {nombre: "p1", duracion: 1.5, director: "d1", estreno: 2001};
let s2:movie = {nombre: "p2", duracion: 2, director: "d2", estreno: 2002};
let s3:movie = {nombre: "p3", duracion: 3, director: "d3", estreno: 2003};
let s4:movie = {nombre: "p4", duracion: 1, director: "d4", estreno: 2004};

let ssc = new MovieStreamableCollection([s1, s2, s3, s4]);
describe('Movies:', () =>{
    it('Se debe poder añadir películas al catálogo', () =>{
        expect(ssc.getNumberOfElements()).to.be.equal(4);
        ssc.addElement(s4);
        expect(ssc.getNumberOfElements()).to.be.equal(5);
    });
    it('Se debe poder eliminar películas del catálogo', () =>{
        expect(ssc.getNumberOfElements()).to.be.equal(5);
        ssc.removeElement(4);
        expect(ssc.getNumberOfElements()).to.be.equal(4);
    });
    it('Se debe poder buscar por nombre', () =>{
        expect(ssc.searchElement("Nombre", "p1")[0].nombre).to.be.equal("p1");
    });
    it('Se debe poder buscar por duración', () =>{
        expect(ssc.searchElement("Duracion", 2)[0].nombre).to.be.equal("p2");
    });
    it('Se debe poder buscar por director', () =>{
        expect(ssc.searchElement("Director", "d3")[0].nombre).to.be.equal("p3");
    });
    it('Se debe poder buscar por fecha de estreno', () =>{
        expect(ssc.searchElement("Estreno", 2004)[0].nombre).to.be.equal("p4");
    });
    it('Se debe poder imprimir la información por pantalla', () =>{
        expect(ssc.print()).to.be.undefined;
    });
  });