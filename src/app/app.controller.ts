// src/app.controller.ts

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// @Controller() - это декоратор, который используется для создания контроллера
@Controller()
export class AppController {
  // private - это модификатор, который используется для создания приватного свойства
  // readonly - это модификатор, который используется для создания только для чтения свойства
  // appService - это свойство, который используется для получения доступа к свойству appService
  constructor(private readonly appService: AppService) {}

  // @Get() - это декоратор, который используется для создания обработчика GET-запроса
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/test')
  getTest(): string {
    return this.appService.getTest();
  }

}
