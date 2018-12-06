import { Time } from "@angular/common";

export class Task {
    id: number;
    category_id: number;
    description: string;
    duration: string;
    type: number;    
}

export const types: string[] = [ "Desafio", "Atividade" ];