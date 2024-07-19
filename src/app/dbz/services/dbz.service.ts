import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [
    {
    id: uuid(),
    name: 'Goku',
    power: 8000
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 16000
  },{
    id: uuid(),
    name: 'Nappa',
    power: 7000
  },{
    id: uuid(),
    name: 'Krillin',
    power: 1770
  },{
    id: uuid(),
    name: 'Piccolo',
    power: 3500
  },{
    id: uuid(),
    name: 'Gohan',
    power: 1000
  }];


  addCharacter( character: Character): void {

    // Es una forma de hacerlo pero la de abajo simplifica el código
    /* const newCharacter: Character = {
      id: uuid(),
      name: character.name,
      power: character.power
    } */

    const newCharacter: Character = {id: uuid(), ...character}

    this.characters.push(newCharacter);
  }

  //onDeleteCharacter( index: number ) {
  //this.characters.splice(index, 1);

  deleteCharacterById( id: string ) {
    this.characters = this.characters.filter( character => character.id !== id);
  }

}
