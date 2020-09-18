import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay} from 'rxjs/operators'
import {Observable, of} from 'rxjs';
import {Joke} from '../models/joke';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  private readonly apiUrl = '/api/chuck-norris/jokes/random';

  constructor(private httpClient: HttpClient) {
  }

  fetchJoke(): Observable<Joke> {
    /*return this.httpClient.get(this.apiUrl).pipe(
      map(resp => <Joke>resp['value'])
    )*/
    return of({joke: 'hutz butzli, hubba bubba'} as Joke).pipe(delay(Math.random() * 3000))
  }
}
