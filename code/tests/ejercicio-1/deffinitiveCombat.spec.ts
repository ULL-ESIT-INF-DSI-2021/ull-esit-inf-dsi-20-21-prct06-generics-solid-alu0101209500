import "mocha";
import {expect} from "chai";
import {PokemonFighters} from "../../src/ejercicio-1/PokemonFighters";
import {StarWarsFighters} from "../../src/ejercicio-1/StarWarsFighters";
import {MarvelFighters} from "../../src/ejercicio-1/MarvelFighters";
import {WarhammerFighters} from "../../src/ejercicio-1/WarhammerFighters";
import {ActionHeroesFighters} from "../../src/ejercicio-1/ActionHeroesFighters";
import {DeffinitiveCombat} from "../../src/ejercicio-1/deffinitiveCombat";

let pkm = new PokemonFighters("Charmander", [20, 40], "Char", {hp: 40, attack: 50, deffense: 34, speed: 54});
let swf = new StarWarsFighters("Darth Vader", [90, 190], "¡Yo soy tu padre!", {hp: 40, attack: 50, deffense: 34, speed: 54});
let mvlf = new MarvelFighters("Conan de Cimmeria", [100, 185], "¡Por Crom y Mitra!", {hp: 90, attack: 130, deffense: 60, speed: 240});
let whf = new WarhammerFighters("Gotrek Gurnisson", [90, 190], "¡Por Grugni, por Grimnir, por Valaya!", {hp: 120, attack: 170, deffense: 80, speed: 54});
let ahf = new ActionHeroesFighters("Chuck Norris", [80, 178], "\"Chuck Norris es la razón por la que Wally se esconde.\"", {hp: 9999, attack: 9999, deffense: 9999, speed: 9999} );
let c1 = new DeffinitiveCombat(pkm, swf);
let c2 = new DeffinitiveCombat(mvlf, whf);
let c3 = new DeffinitiveCombat(ahf, pkm);
let c4 = new DeffinitiveCombat(whf, swf);
let c5 = new DeffinitiveCombat(mvlf, pkm);

describe('Combate:', () =>{
    it('Dado dos luchadores, obtener el vencedor', () =>{
        expect(c1.start()).to.be.equal("Darth Vader vence con 3 HP restantes.");
        expect(c2.start()).to.be.equal("Gotrek Gurnisson vence con 39 HP restantes.");
        expect(c3.start()).to.be.equal("Chuck Norris vence con 9999 HP restantes.");
        expect(c4.start()).to.be.equal("Gotrek Gurnisson vence con 120 HP restantes.");
        expect(c5.start()).to.be.equal("Conan de Cimmeria vence con 90 HP restantes.");
    });
   });