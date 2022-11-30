import { Aeroport } from "./aeroport.model";

export class Vol {
    idVol!:number;
    numVol! : String;
    agence! : string;
    heureDepart! : Date ;
    destination!:string;
    etat!:string;
    aeroport!:Aeroport;
    
    }

