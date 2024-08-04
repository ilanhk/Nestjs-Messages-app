// This file was created with Nest CLI due to this command "generate controller messages/messages --flat"

// meaning of this command  "generate controller messages/messages --flat": 
// "messages/messages" in folder messages create file and class called messages
// "--flat" dont create a new folder called controllers and add the files in there. Instead create the files without the folder.

import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './Data_Transfer_Object-DTOs/create-message.dto';
import { MessagesService } from './messages.service';

// Contoller is a "Class Decorator" bc we are applying it to an entire class
// Get and Post are "Method Decorators" bc they are being applied to an entire method
// Body and Param are  "Argument Decorators". For "Argument Decorators" there is also Headers and Query decorators

@Controller('messages')
export class MessagesController {
  // messagesService: MessagesService; //the controller will have a propperty of messagesService which will be an instance of class MessagesService
  
  constructor(public messagesService: MessagesService){}

  @Get()
  listMessages() {
   return this.messagesService.findAll(); //need to return statement or else Nest wont send anything back to whoever made the request
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content);
  }
  // Nest will automatically extract the body of the incomming req and save it in the argument body bc of @Bodty
  // body: CreateMessageDto - the body will have all properties of this DTO
  //However twhen writing Typescript it would convert to JavaScript then it will be excuted. In theory during the conversion all type info is lost.
  //So in theory the type CreateMessageDto wouldnt exist when executed. but it happens bc of ""emitDecoratorMetadata": true" (in tsconfig.json), it allows some types to transfer to the Javascript realm

  @Get('/:id')
  async getMessage(@Param('id') id: string) {

    const message = await this.messagesService.findOne(id);

    if(!message){
      throw new NotFoundException('message not found'); // NotFoundException is an error that is defined in Nest. It will create a nice response with the proper status code. Nest has other built in Error functions or "Exceptions" to use.
    };

    return message;


  }
};
