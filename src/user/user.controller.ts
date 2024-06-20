// src/user/user.controller.ts

import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.interface';

@Controller('user')
export class UserController {
    constructor (private readonly userService: UserService) {    
    }

    @Get()
    getUsers() {
        return this.userService.getUsers();
    }

    @Get(':id')
    getUserById(@Param('id') id: string):User {
        const userId = parseInt(id, 10);
        const user = this.userService.getUserById(userId);
        if (!user) {
            throw new NotFoundException(`User with id ${id} not found`);
        }

        return user

    }

}
