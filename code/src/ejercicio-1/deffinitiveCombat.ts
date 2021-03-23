import {Fighter} from "./fighter";

export class DeffinitiveCombat <T extends Fighter>{
    /**
     * Añade los dos Pokemon que participarán en el combate
     * @param fighter1 Primer Pokemon
     * @param fighter2 Segundo Pokemon
     */
    constructor(private fighter1:T, private fighter2:T){}
    /**
     * Calcula el daño que inflinge un Pokemon atacante a un Pokemon atacado
     * @param player Atacante
     * @param enemy Atacado
     * @param att Ataque del atacante
     * @param defen Defensa del atacado
     */
    ataque(player:string, enemy:string, att:number, defen:number): number{
        let efectividad: number;
        let mayorEfectividad:[string, string][] = [["pokemon", "marvel"], ["marvel", "star wars"], ["marvel", "action heroes"], ["star wars", "pokemon"], ["warhammer", "pokemon"], ["warhammer", "star wars"], ["action heroes", "star wars"], ["action heroes", "warhammer"]];
        let igualEfectividad:[string, string][] = [["pokemon", "action heroes"], ["star wars", "action heroes"], ["warhammer", "marvel"]];
        if(mayorEfectividad.filter((i) => ((i[0] == player.toLowerCase()) && (i[1] == enemy.toLowerCase()))).length > 0){
            efectividad = 2;
        }else if(igualEfectividad.filter((i) => (((i[0] == player.toLowerCase()) && (i[1] == enemy.toLowerCase())) || ((i[1] == player.toLowerCase()) && (i[0] == enemy.toLowerCase()))) ).length > 0){
            efectividad = 1;
        }else{
            efectividad = 0.5;
        }
        /*
        if(player.toLowerCase() == "pokemon"){
            if(enemy.toLowerCase() == "pokemon"){
                efectividad = 0.5;
            } else if(enemy.toLowerCase() == "marvel"){
                efectividad = 2;
            } else if(enemy.toLowerCase() == "star wars"){
                efectividad = 0.5;
            } else if(enemy.toLowerCase() == "warhammer"){
                efectividad = 0.5;
            } else if(enemy.toLowerCase() == "action heroes"){
                efectividad = 1;
            } else{
                return -1;
            }
        }else if(player.toLowerCase() == "marvel"){
            if(enemy.toLowerCase() == "pokemon"){
                efectividad = 0.5;
            } else if(enemy.toLowerCase() == "marvel"){
                efectividad = 0.5;
            } else if(enemy.toLowerCase() == "star wars"){
                efectividad = 2;
            } else if(enemy.toLowerCase() == "warhammer"){
                efectividad = 1;
            } else if(enemy.toLowerCase() == "action heroes"){
                efectividad = 2;
            }else{
                return -1;
            }
        }else if(player.toLowerCase() == "star wars"){
            if(enemy.toLowerCase() == "pokemon"){
                efectividad = 2;
            } else if(enemy.toLowerCase() == "marvel"){
                efectividad = 0.5;
            } else if(enemy.toLowerCase() == "star wars"){
                efectividad = 0.5;
            } else if(enemy.toLowerCase() == "warhammer"){
                efectividad = 0.5;
            } else if(enemy.toLowerCase() == "action heroes"){
                efectividad = 1;
            } else{
                return -1;
            }
        }else if(player.toLowerCase() == "warhammer"){
            if(enemy.toLowerCase() == "pokemon"){
                efectividad = 2;
            } else if(enemy.toLowerCase() == "marvel"){
                efectividad = 1;
            } else if(enemy.toLowerCase() == "star wars"){
                efectividad = 2;
            } else if(enemy.toLowerCase() == "warhammer"){
                efectividad = 0.5;
            } else if(enemy.toLowerCase() == "action heroes"){
                efectividad = 0.5;
            } else{
                return -1;
            }
        }else if(player.toLowerCase() == "action heroes"){
            if(enemy.toLowerCase() == "pokemon"){
                efectividad = 1;
            } else if(enemy.toLowerCase() == "marvel"){
                efectividad = 1;
            } else if(enemy.toLowerCase() == "star wars"){
                efectividad = 2;
            } else if(enemy.toLowerCase() == "warhammer"){
                efectividad = 2;
            } else if(enemy.toLowerCase() == "action heroes"){
                efectividad = 0.5;
            } else{
                return -1;
            }
        }else{
            return -1;
        }*/
        return Number((50 * (att/defen)*efectividad).toFixed(0));
    }
    /**
     * Inicia la simulación. Imprime por pantalla el desarrollo del combate y devuelve una cadena indicando el vencedor y los hp restantes.
     */
    start(){
        let P1:number = this.fighter1.getStats().hp;
        let P2:number = this.fighter2.getStats().hp;
        let dmg:number = 0;
        while((P1 > 0)&&(P2 > 0)){
            console.log(this.fighter1.getNombre() + " ataca a " + this.fighter2.getNombre() + ".");
            dmg = this.ataque(this.fighter1.getUniverso(), this.fighter2.getUniverso(), this.fighter1.getStats().attack, this.fighter2.getStats().deffense);
            if(dmg < 0){
                throw console.error("Tipo no definido");
            }
            console.log("El ataque ha inflingido " + String(dmg) + " de daño!");
            console.log(this.fighter1.getNombre() + ": " + this.fighter1.getCatch());
            P2 = P2 - dmg;
            if(P2 <= 0){
                console.log(this.fighter2.getNombre() + " ha sido derrotado!\n" + this.fighter1.getNombre() + " es el vencedor.");
                return (this.fighter1.getNombre() + " vence con " + P1 + " HP restantes.");
            }
            console.log(this.fighter1.getNombre() + " HP = " + String(P1) + ".\n" + this.fighter2.getNombre() + " HP = " + String(P2) + ".");
            console.log("-----------------------------------------");
            console.log(this.fighter2.getNombre() + " ataca a " + this.fighter1.getNombre() + ".");
            dmg = this.ataque(this.fighter2.getUniverso(), this.fighter1.getUniverso(), this.fighter2.getStats().attack, this.fighter1.getStats().deffense);
            if(dmg == -1){
                throw console.error("Tipo no definido");
            }
            console.log("El ataque ha inflingido " + String(dmg) + " de daño!");
            console.log(this.fighter2.getNombre() + ": " + this.fighter2.getCatch());
            P1 = P1 - dmg;
            if(P1 <= 0){
                console.log(this.fighter1.getNombre() + " ha sido derrotado!\n" + this.fighter2.getNombre() + " es el vencedor.");
                return (this.fighter2.getNombre() + " vence con " + P2 + " HP restantes.");
            }
            console.log(this.fighter1.getNombre() + " HP = " + String(P1) + ".\n" + this.fighter2.getNombre() + " HP = " + String(P2) + ".");
            console.log("-----------------------------------------");
        }
        return "";
    }
}