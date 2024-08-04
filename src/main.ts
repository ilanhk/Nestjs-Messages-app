import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common'; //Pipes validate data before getting to a controller. Tells us what data it is also.
import { MessagesModule } from './messages/messages.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  app.useGlobalPipes(
    new ValidationPipe() 
  );
  //need this to use Pipes
  // ValidationPipe() will validate all in comming requests that comes into the app. Does mean we  need to add in validation rules to ever route handler. 
  // But if we dont add some validation rules some certain route handler the ValidationPipe() wont work on it.
  
  await app.listen(3000);
}
bootstrap();
