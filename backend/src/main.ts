import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<string>('PORT', '3000');

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  await app.listen(port, () => {
    Logger.log(`Listening at http://127.0.0.1:${port}/`);
    Logger.log(`===================================`);
  });
}

void bootstrap();
