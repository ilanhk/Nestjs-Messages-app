import { IsString } from "class-validator";


export class CreateMessageDto {
  
  @IsString()
  content: string;

};
// This class will contain properties that the Post req handler is supposed to recieve

// Data Transfer Obect(DTO):
// The goal of a DTO is to carry info or data between 2 places. Frequently in a form of network request
// DTOs usually do not have any functionality tied to them. They are simple classes that lists out a bunch of properties
// can view a DTO as a clear description of what some form of data looks like as its being sent along inside the request

// class-transformer is a simple package that takes a plain object and converts it to an instance of a class
//docs - https://github.com/typestack/class-transformer

//class-validator - package that handles validation of properties on a class by using decorators 
// docs - https://github.com/typestack/class-validator