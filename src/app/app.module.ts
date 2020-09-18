import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {JokeComponent} from './components/joke/joke.component';
import {QuotationMarkPipe} from './pipes/quotation-mark.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './components/login/login.component';
import {AuthorizationInteceptor} from './services/auth.interceptor';
import {HomeComponent} from './components/home/home.component';
import {QuoteComponent} from './components/quote/quote.component';
import {MyDurationLibModule} from "../../projects/my-duration-lib/src/lib/my-duration-lib.module";
import {RegistrationComponent} from './components/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    QuotationMarkPipe,
    LoginComponent,
    HomeComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MyDurationLibModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizationInteceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
