// src/user/user.controller.ts

import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor (private readonly userService: UserService) {    
    }

    @Get()
    getUsers() {
        return this.userService.getUsers();
    }

    // @Get(':id')
    // getUserById(@Param('id') id: string) {
    //     const userId = parseInt(id, 10);
    //     return this.userService.getUserById(userId);
    // }

}
