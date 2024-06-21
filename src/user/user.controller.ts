import { Controller, Get, NotFoundException, Param, Post, Body, Delete, HttpException, HttpStatus } from '@nestjs/common';
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
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  @Post()
  async createUser(@Body() user: User): Promise<User> {
    return this.userService.createUser(user);
  }

  @Delete(':id')
  async removeUser(@Param('id') id: string): Promise<{ message: string }> {
    await this.userService.removeUser(parseInt(id, 10));
    return { message: 'User has been removed' };
  }

  @Post('validate')
  async validateUser(@Body() body: { email: string, password: string }): Promise<{ valid: boolean }> {
    const { email, password } = body;
    const valid = await this.userService.validateUser(email, password);
    return { valid };
  }
}
