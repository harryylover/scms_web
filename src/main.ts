import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './setup-swagger';
import bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn', 'debug', 'verbose'],
  });
  setupSwagger(app);
  app.use(bodyParser.raw({ type: 'application/octet-stream', limit: '2mb' }));

  await app.listen(3000);
}
bootstrap();
