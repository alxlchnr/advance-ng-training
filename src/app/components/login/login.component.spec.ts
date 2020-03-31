import { Router } from "@angular/router";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoginComponent } from "./login.component";
import { FormsModule } from "@angular/forms";
import { LoginService } from "src/app/services/login.service";
import { of, throwError } from "rxjs";

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginServiceMock;
  let routerMock;

  beforeEach(async(() => {
    loginServiceMock = jasmine.createSpyObj(["login"]);
    routerMock = jasmine.createSpyObj(["navigate"]);
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule],
      providers: [
        { provide: LoginService, useValue: loginServiceMock },
        { provide: Router, useValue: routerMock }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("navigates to joke page when loginService returns true", () => {
    component.model.userName = "max";
    component.model.password = "expected";
    loginServiceMock.login.and.returnValue(of("someToken"));
    component.login();
    expect(routerMock.navigate).toHaveBeenCalledWith(['/chuck'])
    expect(loginServiceMock.login).toHaveBeenCalledWith("max", "expected");
  });


  it("sets error flag on loginError", () => {
    component.model.userName = "max";
    component.model.password = "expected";
    loginServiceMock.login.and.returnValue(throwError("someToken"));
    component.login();
    expect(routerMock.navigate).not.toHaveBeenCalledWith(['/chuck'])
    expect(loginServiceMock.login).toHaveBeenCalledWith("max", "expected");
    expect(component.loginError).toBeTruthy();
  });
});
