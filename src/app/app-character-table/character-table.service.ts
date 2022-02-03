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
    private charactersUrl = 'api/characters.json';
    private racesURL = 'api/races.json';

  getCharacters(): Observable<Character[]>{
     return this.http.get<Character[]>(this.charactersUrl).pipe(
       tap(data => console.log('All: ', JSON.stringify(data))),
       catchError(this.handleError)
       );
  }
  private handleError(err: HttpErrorResponse){
    let errorMessage: string = err.error.message;
    console.error(errorMessage)
    return throwError(errorMessage);
  }

  getRaces(): Observable<Race[]>{
    return this.http.get<Race[]>(this.racesURL);
 }
}
