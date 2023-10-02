import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, retry } from 'rxjs';
import { Result, RickandmortyCharacter } from '../../models/core/character.interface';
import { environment } from 'src/environments/environment';
import {  Rickandmorty } from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {

  constructor(
    private http: HttpClient,
  ) { }


  getCharacter = (): Observable<RickandmortyCharacter> => {
    return this.http
      .get<RickandmortyCharacter>(
        environment.baseUrl + Rickandmorty.character
      ).pipe(
        retry(0),
        catchError(catchError((error) => of(`Error capturado grácilmente: ${error}`)))
      ) as Observable<RickandmortyCharacter>
  };

  getCharacterById = (id:number): Observable<Result> => {
    return this.http
      .get<Result>(
        environment.baseUrl + Rickandmorty.character + `/${id}`
      ).pipe(
        retry(0),
        catchError(catchError((error) => of(`Error capturado grácilmente: ${error}`)))
      ) as Observable<Result>
  };
}
