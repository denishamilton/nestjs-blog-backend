// src/user/user.controller.ts
import { Controller, Get, NotFoundException, Param, Post, Body, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User> {
    const user = await this.userService.getUserById(parseInt(id, 10));
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  @Post()
  createUser(@Body() user: User): Promise<User> {
    return this.userService.createUser(user);
  }

  @Delete(':id')
  removeUser(@Param('id') id: string): Promise<void> {
    return this.userService.removeUser(parseInt(id, 10));
  }
}
