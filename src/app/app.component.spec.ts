import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { JokeComponent } from './components/joke/joke.component';
import { MockComponent } from 'ng-mocks';
import { LoginComponent } from './components/login/login.component';

describe('AppComponent', () => {
  let component;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        MockComponent(JokeComponent),
        MockComponent(LoginComponent),
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

});
