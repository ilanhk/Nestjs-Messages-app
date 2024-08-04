// Service is supposed to be the business logic 
// everything in this file will depend on code from the repository file

import { Injectable } from "@nestjs/common"; //Injectable will add this service class to the DTO
import { MessagesRespository } from "./messages.repository";

@Injectable() //the registration process of adding MessagesService to the DTO is automatic when adding this decorator
export class MessagesService {
  

  // constructor(){
  //   //Service is creating its own dependencies (We dont do this in Nest)
  //   // Dont do this in real apps bc of Inversion of Control Principle
  //   // Inversion of Control Principle - Classes should not create instances of its dependencies on its own
  //   this.messagesRepo = new MessagesRespository();
  // };
  // MessageService its creating its own copy of MessagesRespository - This is bad
  // MessageService shouldnt create its own dependency from the copy it should instead recieve its dependency as an argument to the constructor - Better solution
  
  // Best solution: make an interface that mimics the MessagesRespository. Its best bc it will work with different repos to test repos that makes the requirments
  constructor( public messagesRepo: MessagesRespository){}; //public makes messagesRepo a property of the class

  findOne(id: string){
    return this.messagesRepo.findOne(id)
  }

  findAll(){
    return this.messagesRepo.findAll();
  }

  create(content: string){
    return this.messagesRepo.create(content);
  }
};
// MessagesService cannot work correctly unless it has the MessagesRespository