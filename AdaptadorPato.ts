/*Crie um adaptador que permita que um objeto do tipo Pato seja usado como se fosse um objeto do tipo Galinha.

Siga o exemplo apresentado no Hipertexto 4 e crie as classes AdaptadorPato 
e AdaptadorPatoDemo para demonstrar o uso da classe AdaptadorPato.*/

import { Galinha } from "./Galinha";

import AdaptadorPatoDemo;



export class AdaptadorPato implements Galinha{
    pato = AdaptadorPato
    constructor (pato: AdaptadorPatoDemo){
    this.pato = pato;
    }
    fazerCocorico(): any {
        let fazerCocorico: string = `Cocoricó`;
        return `O pato faz ${this.pato.fazerQuaQua()} e ${fazerCocorico}`;
    }
    voar(): string {
        return 'Voou';
    }    
}