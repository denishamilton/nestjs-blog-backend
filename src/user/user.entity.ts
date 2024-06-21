// src/user/user.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  age: number;

  @Column()
  city: string;

  @Column()
  country: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  password: string;
}