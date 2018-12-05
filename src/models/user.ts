export class Usuario {
    id: number;
    date: Date = new Date();
    name?: string;
    date_birth?: Date;
    sex?: number;
    finished: boolean = false;
}

let sexs: string[] = [ "Masculino", "Feminino" ];