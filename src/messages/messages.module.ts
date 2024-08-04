// This file and the messages folder was created with Nest CLI with this command "nest generate module messages"
import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { MessagesRespository } from './messages.repository';

@Module({
  controllers: [MessagesController], //automatically updated for us due to this command when we added a controller with CLI "generate controller messages/messages --flat"
  providers: [MessagesService, MessagesRespository] //providers are things that can be used as dependencies for other classes
})
export class MessagesModule {}
