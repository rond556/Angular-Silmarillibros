import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterModalService {
  characterId: any;

  constructor() { }

  getCharacterId(){
    return this.characterId;
  }

  setCharacterId(characterId: number){
    this.characterId = characterId;
  }
}
