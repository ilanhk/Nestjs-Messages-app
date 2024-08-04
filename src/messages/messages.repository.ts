// Repository is supposed to access a DB

import { Injectable } from "@nestjs/common";
import { readFile, writeFile } from "fs/promises";

Injectable() //need to do the same with its repo
export class MessagesRespository {
  async findOne(id: string){
    const contents = await readFile('messages.json', 'utf8'); // utf8 tells readFile what format/encoding the file messages.json uses
    const messages = JSON.parse(contents);

    return messages[id]
  }

  async findAll(){
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    return messages

  }

  async create(content: string){
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    const id = Math.floor(Math.random() *999) // Math.floor will create an integer

    messages[id] = {id, content};

    await writeFile('messages.json', JSON.stringify(messages));
  }
};