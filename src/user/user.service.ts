// src/user/user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  getUsers(): Promise<User[]> {
    return this.usersRepository.find();
  }

  getUserById(id: number): Promise<User | null> {
    return this.usersRepository.findOne({ where: { id } });
  }

  createUser(user: User): Promise<User> {
    return this.usersRepository.save(user);
  }

  async removeUser(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
