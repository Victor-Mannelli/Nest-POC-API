import './setup';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });
  () => console.log(`server running on ${process.env.port}`);
  await app.listen(process.env.PORT);
}
bootstrap();
