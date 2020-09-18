import {Component, OnInit} from '@angular/core';
import {JokeService} from 'src/app/services/joke.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {

  quote: string;
  requestTime: any
  requestStartTime: Date;
  requestEndTime: Date;

  constructor(private jokeService: JokeService) {
  }

  ngOnInit() {
  }

  showJoke() {
    this.requestStartTime = new Date();
    this.jokeService.fetchJoke().subscribe(response => {
      this.quote = response.joke
    }, console.error, () => {
      this.requestEndTime = new Date()
    })


  }

}
