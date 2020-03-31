import { Component, OnInit, Output } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router, ActivatedRoute } from '@angular/router';

interface Credentials {
  userName: string
  password: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginError: boolean

  model: Credentials = {
    userName: undefined,
    password: undefined
  }

  constructor(private loginService: LoginService,
     private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.loginService.login(this.model.userName, this.model.password).subscribe(token => {
      console.log('token', token);
      this.router.navigate(['/chuck'])
    }, error => {
      console.log(error)
      this.loginError = true;
    })
  }

}
