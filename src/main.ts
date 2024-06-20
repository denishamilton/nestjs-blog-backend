// src/main.ts

import { NestFactory } from '@nestjs/core'; // импортируем NestFactory для создания приложения
import { AppModule } from './app/app.module'; // импортируем AppModule для создания модуля приложения

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
