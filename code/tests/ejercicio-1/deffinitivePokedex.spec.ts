import "mocha";
import {expect} from "chai";
import {PokemonFighters} from "../../src/ejercicio-1/PokemonFighters";
import {StarWarsFighters} from "../../src/ejercicio-1/StarWarsFighters";
import {MarvelFighters} from "../../src/ejercicio-1/MarvelFighters";
import {WarhammerFighters} from "../../src/ejercicio-1/WarhammerFighters";
import {ActionHeroesFighters} from "../../src/ejercicio-1/ActionHeroesFighters";
import {DeffinitivePokedex} from "../../src/ejercicio-1/deffinitivePokedex";

let pkm = new PokemonFighters("Charmander", [20, 40], "Char", {hp: 40, attack: 50, deffense: 34, speed: 54});
let swf = new StarWarsFighters("Darth Vader", [90, 190], "¡Yo soy tu padre!", {hp: 40, attack: 50, deffense: 34, speed: 54});
let mvlf = new MarvelFighters("Conan de Cimmeria", [100, 185], "¡Por Crom y Mitra!", {hp: 90, attack: 130, deffense: 60, speed: 240});
let whf = new WarhammerFighters("Gotrek Gurnisson", [90, 190], "¡Por Grugni, por Grimnir, por Valaya!", {hp: 120, attack: 170, deffense: 80, speed: 54});
let ahf = new ActionHeroesFighters("Chuck Norris", [80, 178], "\"Chuck Norris es la razón por la que Wally se esconde.\"", {hp: 9999, attack: 9999, deffense: 9999, speed: 9999} );
let pokedex = new DeffinitivePokedex([pkm, swf, mvlf, whf, ahf]);

describe('Pokedex Definitiva:', () =>{
    it('Una Pokedex recibe un array con luchadores y puede imprimir por pantalla una cadena con la información de cada uno de ellos, además de devolver dicha cadena.', () =>{
        expect(pokedex.getByID(0)).to.be.equal("Nombre: Charmander\nPeso: 20\nAltura: 40\nUniverso: Pokemon\nFrase con gancho: Char\nEstadísticas: \n\tHP: 40\n\tAtaque: 50\n\tDefensa: 34\n\tVelocidad: 54\n");
        expect(pokedex.getByID(1)).to.be.equal("Nombre: Darth Vader\nPeso: 90\nAltura: 190\nUniverso: Star Wars\nFrase con gancho: ¡Yo soy tu padre!\nEstadísticas: \n\tHP: 40\n\tAtaque: 50\n\tDefensa: 34\n\tVelocidad: 54\n");
        expect(pokedex.getByID(2)).to.be.equal("Nombre: Conan de Cimmeria\nPeso: 100\nAltura: 185\nUniverso: Marvel\nFrase con gancho: ¡Por Crom y Mitra!\nEstadísticas: \n\tHP: 90\n\tAtaque: 130\n\tDefensa: 60\n\tVelocidad: 240\n");
        expect(pokedex.getByID(3)).to.be.equal("Nombre: Gotrek Gurnisson\nPeso: 90\nAltura: 190\nUniverso: Warhammer\nFrase con gancho: ¡Por Grugni, por Grimnir, por Valaya!\nEstadísticas: \n\tHP: 120\n\tAtaque: 170\n\tDefensa: 80\n\tVelocidad: 54\n");
        expect(pokedex.getByID(4)).to.be.equal("Nombre: Chuck Norris\nPeso: 80\nAltura: 178\nUniverso: Action Heroes\nFrase con gancho: \"Chuck Norris es la razón por la que Wally se esconde.\"\nEstadísticas: \n\tHP: 9999\n\tAtaque: 9999\n\tDefensa: 9999\n\tVelocidad: 9999\n");
        expect(pokedex.getNumberOfFighters()).to.be.equal(5);
        expect(pokedex.showFullPokedex()).to.be.equal("Nombre: Charmander\nPeso: 20\nAltura: 40\nUniverso: Pokemon\nFrase con gancho: Char\nEstadísticas: \n\tHP: 40\n\tAtaque: 50\n\tDefensa: 34\n\tVelocidad: 54\n\nNombre: Darth Vader\nPeso: 90\nAltura: 190\nUniverso: Star Wars\nFrase con gancho: ¡Yo soy tu padre!\nEstadísticas: \n\tHP: 40\n\tAtaque: 50\n\tDefensa: 34\n\tVelocidad: 54\n\nNombre: Conan de Cimmeria\nPeso: 100\nAltura: 185\nUniverso: Marvel\nFrase con gancho: ¡Por Crom y Mitra!\nEstadísticas: \n\tHP: 90\n\tAtaque: 130\n\tDefensa: 60\n\tVelocidad: 240\n\nNombre: Gotrek Gurnisson\nPeso: 90\nAltura: 190\nUniverso: Warhammer\nFrase con gancho: ¡Por Grugni, por Grimnir, por Valaya!\nEstadísticas: \n\tHP: 120\n\tAtaque: 170\n\tDefensa: 80\n\tVelocidad: 54\n\nNombre: Chuck Norris\nPeso: 80\nAltura: 178\nUniverso: Action Heroes\nFrase con gancho: \"Chuck Norris es la razón por la que Wally se esconde.\"\nEstadísticas: \n\tHP: 9999\n\tAtaque: 9999\n\tDefensa: 9999\n\tVelocidad: 9999\n\n");
    });
   });