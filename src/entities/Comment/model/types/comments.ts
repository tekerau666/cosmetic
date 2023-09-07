import { User } from 'entities/User';

export interface Comments {
    id: string;
    text: string;
    user: User
}
