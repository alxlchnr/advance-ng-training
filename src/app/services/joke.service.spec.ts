import { JokeService } from './joke.service';
import { of } from 'rxjs';

describe('JokeService', () => {
  let jokeService: JokeService;
  let httpClientMock;
  beforeEach(() => {
    httpClientMock = jasmine.createSpyObj(['get']);
    jokeService = new JokeService(httpClientMock);
  });

  it('should be created', () => {
    expect(jokeService).toBeTruthy();
  });

  it('calls API', (done) => {
    const expectedJoke = { id: 42, joke: 'expectedJoke' };
    httpClientMock.get.and.returnValue(of({ value: expectedJoke }));

    jokeService.fetchJoke().subscribe(data => {
      expect(data).toEqual(expectedJoke);
      expect(httpClientMock.get).toHaveBeenCalledWith('https://angular-training-backend.herokuapp.com/api/chuck-norris/jokes/random')
      done();
    })
  });
});
