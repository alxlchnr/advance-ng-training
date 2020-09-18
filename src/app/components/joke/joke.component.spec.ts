import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeComponent } from './joke.component';
import { By } from '@angular/platform-browser';
import { JokeService } from 'src/app/services/joke.service';
import { of } from 'rxjs';
import { Joke } from 'src/app/models/joke';
import { MockPipe } from 'ng-mocks';
import { QuotationMarkPipe } from 'src/app/pipes/quotation-mark.pipe';

describe('JokeComponent', () => {
  let component: JokeComponent;
  let fixture: ComponentFixture<JokeComponent>;
  let jokeServiceMock;

  beforeEach(async(() => {
    jokeServiceMock = jasmine.createSpyObj(['fetchJoke']);
    TestBed.configureTestingModule({
      declarations: [
        JokeComponent,
        MockPipe(QuotationMarkPipe,(...args) => args[0])
      ],
      providers: [
        { provide: JokeService, useValue: jokeServiceMock }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('sets chuck norris quote after button click', () => {
    expect(component.joke).toBeUndefined();
    //component.showJoke();
    jokeServiceMock.fetchJoke.and.returnValue(of({ id: 42, joke: 'Chuck Norris is the reason why Waldo is hiding.' } as Joke))
    const button = <HTMLInputElement>fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();
    fixture.detectChanges();
    expect(component.joke).toEqual('Chuck Norris is the reason why Waldo is hiding.');
    const jokeTag = <HTMLElement>fixture.debugElement.query(By.css('#quote')).nativeElement
    expect(jokeTag.innerHTML.trim()).toEqual('Chuck Norris is the reason why Waldo is hiding.');
  })
});
