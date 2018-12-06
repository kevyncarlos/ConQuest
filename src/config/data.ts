import { User } from "../models/user";
import { Task } from "../models/task";
import { Category } from "../models/category";
import { User_Category } from "../models/user_category";
import { User_Task } from "../models/user_task";

export class Data {
    public static Users: User[] = [];

    public static Tasks: Task[] = [
        {id: 1, description: 'Vá a uma biblioteca e procure algo que goste para ler.', category_id: 1, duration: '23:59:59', type: 0},
        {id: 1, description: 'Me conte dois trechos de algum livro que você goste.', category_id: 1, duration: '08:00:00', type: 1},
        {id: 1, description: 'Leia para alguém que não sabe ou não consegue ler.', category_id: 1, duration: '14:00:00', type: 1},
        {id: 1, description: 'Fotografe uma borboleta encima de uma flor e aproveite para se divertir procurando.', category_id: 2, duration: '23:59:59', type: 0},
        {id: 1, description: 'Tire fotos de algum membro da sua familia. O pet também conta.', category_id: 2, duration: '14:00:00', type: 1},
        {id: 1, description: 'Se encontre com um amigo ou uma pessoa muito importante pra você e faça um desenho dela.', category_id: 3, duration: '23:59:59', type: 0},
        {id: 1, description: 'Imagine a coisa mais louca e divertida possível e desenhe isso, dê vida no papel.', category_id: 3, duration: '14:00:00', type: 1},
        {id: 1, description: 'Chame alguns amigos ou conhecidos para dançar contigo.', category_id: 4, duration: '23:59:59', type: 0},
        {id: 1, description: 'Dance uma música que te inspira e me conte como foi a experiência.', category_id: 4, duration: '14:00:00', type: 1},
        {id: 1, description: 'Organize uma sorvetada com a sua família.', category_id: 5, duration: '23:59:59', type: 0},
        {id: 1, description: 'Saia para tomar um sorvete e convide alguém se quiser.', category_id: 5, duration: '14:00:00', type: 1},
    ];

    public static Categories: Category[] = [
        {id: 1, description: 'Ler livros'}, 
        {id: 2, description: 'Fotografar'}, 
        {id: 3, description: 'Desenhar'}, 
        {id: 4, description: 'Dançar'}, 
        {id: 5, description: 'Tomar sorvete'}
    ];

    public static Users_Categories: User_Category[] = [];

    public static Users_Tasks: User_Task[] = [];
}