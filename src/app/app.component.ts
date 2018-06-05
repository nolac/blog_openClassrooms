import { Component } from '@angular/core';
import { Post } from './Post';
import { postArray } from './post_array'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post : Post[];

  constructor(){
    this.post=postArray;
    console.log(this.post);
  }
}
