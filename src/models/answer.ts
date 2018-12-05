export class Answer {
    id: number;
    user_task_id: number;
    description: string;
    date_time: Date = new Date();
    has_image: boolean;
}