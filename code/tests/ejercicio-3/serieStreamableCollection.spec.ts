import "mocha";
import {expect} from "chai";
import {SerieStreamableCollection, serie} from "../../src/ejercicio-3/serieStreamableCollection";

let s1:serie = {nombre: "s1", temporadas: 4, capitulos: 24, plataforma: "Netflix"};
let s2:serie = {nombre: "s2", temporadas: 5, capitulos: 50, plataforma: "HBO"};
let s3:serie = {nombre: "s3", temporadas: 3, capitulos: 20, plataforma: "Amazon"};
let s4:serie = {nombre: "s4", temporadas: 1, capitulos: 8, plataforma: "Netflix"};

let ssc = new SerieStreamableCollection([s1, s2, s3, s4]);
describe('Series:', () =>{
    it('Se debe poder añadir series al catálogo', () =>{
        expect(ssc.getNumberOfElements()).to.be.equal(4);
        ssc.addElement(s4);
        expect(ssc.getNumberOfElements()).to.be.equal(5);
    });
    it('Se debe poder eliminar series del catálogo', () =>{
        expect(ssc.getNumberOfElements()).to.be.equal(5);
        ssc.removeElement(4);
        expect(ssc.getNumberOfElements()).to.be.equal(4);
    });
    it('Se debe poder buscar por nombre', () =>{
        expect(ssc.searchElement("Nombre", "s1")[0].nombre).to.be.equal("s1");
    });
    it('Se debe poder buscar por temporadas', () =>{
        expect(ssc.searchElement("Temporadas", 5)[0].nombre).to.be.equal("s2");
    });
    it('Se debe poder buscar por el número de capítulos', () =>{
        expect(ssc.searchElement("Capitulos", 20)[0].nombre).to.be.equal("s3");
    });
    it('Se debe poder buscar por la plataforma', () =>{
        expect(ssc.searchElement("Plataforma", "Netflix").map((a) => (a.nombre)).join(" ")).to.be.equal("s1 s4");
    });
    it('Se debe poder imprimir la información por pantalla', () =>{
        expect(ssc.print()).to.be.undefined;
    });
  });