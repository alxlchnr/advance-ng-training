import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { Observable } from 'rxjs';
import { Joke } from '../models/joke';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  private readonly apiUrl = 'https://angular-training-backend.herokuapp.com/api/chuck-norris/jokes/random';

  constructor(private httpClient: HttpClient) { }

  fetchJoke(): Observable<Joke>{
    return this.httpClient.get(this.apiUrl).pipe(
      map(resp => <Joke>resp['value'])
    )
  }
}
