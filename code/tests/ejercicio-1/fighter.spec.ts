import "mocha";
import {expect} from "chai";
import {Fighter} from "../../src/ejercicio-1/fighter";
import {PokemonFighters} from "../../src/ejercicio-1/PokemonFighters";
import {StarWarsFighters} from "../../src/ejercicio-1/StarWarsFighters";
import {MarvelFighters} from "../../src/ejercicio-1/MarvelFighters";
import {WarhammerFighters} from "../../src/ejercicio-1/WarhammerFighters";
import {ActionHeroesFighters} from "../../src/ejercicio-1/ActionHeroesFighters";


let pkm = new PokemonFighters("Charmander", [20, 40], "Char", {hp: 40, attack: 50, deffense: 34, speed: 54});
let swf = new StarWarsFighters("Darth Vader", [90, 190], "¡Yo soy tu padre!", {hp: 40, attack: 50, deffense: 34, speed: 54});
let mvlf = new MarvelFighters("Conan de Cimmeria", [100, 185], "¡Por Crom y Mitra!", {hp: 90, attack: 130, deffense: 60, speed: 240});
let whf = new WarhammerFighters("Gotrek Gurnisson", [90, 190], "¡Por Grugni, por Grimnir, por Valaya!", {hp: 120, attack: 170, deffense: 80, speed: 54});
let ahf = new ActionHeroesFighters("Chuck Norris", [80, 178], "\"Chuck Norris es la razón por la que Wally se esconde.\"", {hp: 9999, attack: 9999, deffense: 9999, speed: 9999} );
let v: Fighter[] = [swf, mvlf, whf, ahf];

describe('Luchador:', () =>{
    it('Se debe poder obtener la información del luchador', () =>{
       expect(pkm.getNombre()).to.be.equal("Charmander");
       expect(pkm.getPa().join(" ")).to.be.equal("20 40");
       expect(pkm.getCatch()).to.be.equal("Char");
       expect(pkm.getStats().hp).to.be.equal(40);
       expect(pkm.getStats().attack).to.be.equal(50);
       expect(pkm.getStats().deffense).to.be.equal(34);
       expect(pkm.getStats().speed).to.be.equal(54);
       expect(pkm.getUniverso()).to.be.equal("Pokemon");
    });
    it('Las clases definidas a partir de fighter son agrupables por su clase padre:', () =>{
        expect(v.map((n)=>(n.getNombre())).join(" ")).to.be.equal("Darth Vader Conan de Cimmeria Gotrek Gurnisson Chuck Norris");
     });
   });