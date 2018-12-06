import { Time } from "@angular/common";

export class Task {
    id: number;
    category_id: number;
    description: string;
    duration: Time;
    type: number;    
}

export const types: string[] = [ "Desafio", "Atividade" ];