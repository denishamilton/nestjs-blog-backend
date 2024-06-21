// src/app.module.ts

import { Module } from '@nestjs/common'; // импортируем Module для создания модуля
import { TypeOrmModule } from '@nestjs/typeorm'; // импортируем TypeOrmModule для создания ORM
import { AppController } from './app.controller'; // импортируем AppController для создания контроллера
import { AppService } from './app.service'; // импортируем AppService для создания сервиса
import { UserModule } from '../user/user.module';
import { User } from '../user/user.entity';

/* КРАТКОЕ ОПИСАНИЕ АРХИТЕКТУРЫ МОДУЛЕЙ, КОНТРОЛЛЕРОВ И СЕРВИСОВ 
(МНОГОУРОВНЕВАЯ АРХИТЕКТУРА NEST.JS)

СРАВНИВАЕМ ЭТО С РАБОТОЙ БОЛЬШОГО ОФИСА.
- МОДУЛЬ : Управляющие и директора компании
- КОНТРОЛЛЕРЫ (маршрутизаторы) : Менеджера, которые передают задачи работникам (сервисам)
- СЕРВИСЫ : Обычные работники, которые выполняют задачи полученные от контроллеров (Менеджеров)
*/ 

// @Module - это декоратор, который используется для создания и расширения модуля
@Module({
  // imports - модули, которые должны быть импортированы в модуль
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'sS111222333s',
    database: 'test_db',
    entities: [User],
    synchronize: true,
  }), 
  UserModule
],
  // controllers - контроллеры, которые должны быть импортированы в модуль
  controllers: [AppController],
  // providers - сервисы, которые должны быть импортированы в модуль
  providers: [AppService],
})
export class AppModule {}
