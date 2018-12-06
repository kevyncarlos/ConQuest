export class User {
    id: number;
    date: Date = new Date();
    name?: string;
    date_birth?: Date;
    sex?: number;
    finished: boolean = false;
}

export const sexs: string[] = [ "Masculino", "Feminino" ];