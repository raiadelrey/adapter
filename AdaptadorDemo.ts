import { AdaptadorPato } from "./AdaptadorPato" ;

export class AdaptadorPatoDemo {}
 
 class AdaptadorPatoDemo {

   
    fazerQuaQua() : any{
        return ("Fazer qua-quá")


    }
    voar() : any{
        return ('Voar')
    }

}


    

    
var pato = new AdaptadorPato(new AdaptadorPatoDemo);

console.log(pato.fazerCocorico())
