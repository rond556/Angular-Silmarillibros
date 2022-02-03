import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Character } from '../interfaces/character';
import { Race } from '../interfaces/race';

@Injectable({
  providedIn: 'root'
})
export class CharacterTableService {

  

  constructor(private http: HttpClient) { }
    private charactersUrl = '/api/characters.json';
    private racesURL = '/api/races.json';

  getCharacters(): /*Observable<Character[]>*/ Character[]{
     /*return this.http.get<Character[]>(this.charactersUrl).pipe(
       tap(data => console.log('All: ', JSON.stringify(data))),
       catchError(this.handleError)
       );*/
       return [
        {
                id: 1,
                name: "Fingolfin",
                race: "Elf",
                otherNames: [],
                imagePath: "assets/display-portraits/fingolfin.jpg",
                quote: "Then Fingolfin beheld... the utter ruin of the Noldor, and the defeat beyond redress of all their houses; and filled with wrath and despair he mounted upon Rochallor his great horse and rode forth alone, and none might restrain him. He passed over Dor-nu-Fauglith like a wind amid the dust, and all that beheld his onset fled in amaze, thinking that Oromë himself was come: for a great madness of rage was upon him, so that his eyes shone like the eyes of the Valar. Thus he came alone to Angband's gates, and he sounded his horn, and smote once more upon the brazen doors, and challenged Morgoth to come forth to single combat. And Morgoth came."
              },
              {
                id: 2,
                name: "Manwë",
                race: "Ainu",
                otherNames: ["Súlimo", "Mânawenûz", "Valahiru"],
                imagePath: "assets/display-portraits/manwe.jpg",
                quote:""
              },
              {
                id: 3,
                name: "Fëanor",
                race: "Elf",
                otherNames: ["Curufinwë"],
                imagePath: "assets/display-portraits/feanor.jpg",
                quote: ""
              },
              {
                id: 4,
                name: "Túrin Turambar",
                race: "Human",
                otherNames: ["Neithan", "Gorthol", "Agarwaen", "Adanedhel", "Thurin", "Mormegil", "Turambar", "Dagnir Glaurunga"],
                imagePath: "assets/display-portraits/turin.jpg",
                quote: ""
              },
              {
                id: 5,
                name: "Mîm",
                race: "Dwarf",
                otherNames: [],
                imagePath: "assets/display-portraits/mim.jpg",
                quote:""
              },
              {
                id: 6,
                name: "Morgoth",
                race: "Ainu",
                otherNames: ["Melkor"],
                imagePath: "assets/display-portraits/morgoth.jpg",
                quote: ""
              },
              {
                id: 7,
                name: "Olórin",
                race: "Maia",
                otherNames: ["Gandalf", "Mithrandir", "Incánus", "Tharkûn"],
                imagePath: "assets/display-portraits/olorin.jpg",
                quote:""
              },
              {
                id: 8,
                name: "Ulmo",
                race: "Ainu",
                otherNames: [],
                imagePath: "assets/display-portraits/ulmo.jpg",
                quote:""
              },
              {
                id: 9,
                name: "Tulkas",
                race: "Ainu",
                otherNames: ["Astaldo", "Tulukastāz"],
                imagePath: "assets/display-portraits/tulkas.jpg",
                quote:""
              },
              {
                id: 11,
                name: "Nienna",
                race: "Ainu",
                otherNames: [],
                imagePath: "assets/display-portraits/nienna.jpg",
                quote:""
              },
              {
                id: 12,
                name: "Sauron",
                race: "Maia",
                otherNames: ["Annatar","Gorthaur","Mairon","Annatar"],
                imagePath: "assets/display-portraits/sauron.jpg",
                quote:""
              }
        ]
  }

  getRaces(): /*Observable<Race[]>*/ Race[]{
    /*return this.http.get<Race[]>(this.racesURL).pipe(
      tap(data => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
      );*/
      return [
        {
            id: 1,
            name: "Elf",
            otherNames:[],
            description: ""
          },
          {
            id: 2,
            name: "Human",
            otherNames:[],
            description: ""
          },
          {
            id: 3,
            name: "Ainu",
            otherNames:[],
            description: ""
          },
          {
            id: 4,
            name: "Dwarf",
            otherNames:[],
            description: ""
          },
          {
            id: 5,
            name: "Dragon",
            otherNames:[],
            description: ""
          }
    ]
 }

 private handleError(err: HttpErrorResponse){
  let errorMessage: string = err.error.message;
  console.error(errorMessage)
  return throwError(errorMessage);
}
}
