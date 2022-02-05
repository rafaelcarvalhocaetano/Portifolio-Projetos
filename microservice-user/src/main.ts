import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';

import { AppModule } from './app.module';
import { RabbitMQ } from './common/models/rabbitmq.enum';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    Transport: Transport.RMQ,
    option: {
      url: [process.env.AMQP_URL],
      queue: RabbitMQ.UserQueue,
    },
  });
  await app.listen();
  console.log(' MICROSERVICE in the RabbitMQ (users) ');
}
bootstrap();
