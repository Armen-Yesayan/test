import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bcrypt from 'bcryptjs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 5000;
  app.setGlobalPrefix('api')
  app.enableCors();

  const pas = await bcrypt.hash('admin', 5)

  await app.listen(PORT, () => console.log(`Server started on PORT - ${PORT}`, pas));
}
bootstrap();
