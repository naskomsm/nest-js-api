
import { Injectable } from '@nestjs/common';

export interface User {
    userId: number;
    username: string;
    password: string;
};

@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            userId: 1,
            username: 'nasko',
            password: '123',
        },
        {
            userId: 2,
            username: 'georgi',
            password: '123',
        },
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}
