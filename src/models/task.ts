import { Time } from "@angular/common";

export class Task {
    id: number;
    category_id: number;
    description: string;
    duration: Time;
    type: number;    
}

let types: string[] = [ "Desafio", "Atividade" ];