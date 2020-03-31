import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
import {Joke} from '../../models/joke'
import { JokeService } from 'src/app/services/joke.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {

  joke: string;

  constructor(private jokeService: JokeService) { }

  ngOnInit() {
  }

  showJoke(){
    this.jokeService.fetchJoke().subscribe(joke => {
      this.joke=joke.joke
    })

  }

}
