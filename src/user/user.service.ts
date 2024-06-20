// src/user/user.service.ts

import { Injectable } from '@nestjs/common';
import { users } from "../moks/";

@Injectable()
export class UserService {
    getUsers() {
        return users
    }

    getUserById(id: number) {
        return users.find(user => user.id === id);
    }
}
