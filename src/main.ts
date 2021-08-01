import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(express.static('./public'));

  // app.enableCors();
  await app.listen(3000);
}
bootstrap();
