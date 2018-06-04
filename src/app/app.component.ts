import { Component } from '@angular/core';
import { Post } from './Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ctt="bienvenue sur mon super post super intelligent qui ne dit strictement rien et que tu ne peuc meme pas troller ";
  wlc = new Post("hello",this.ctt,new Date());
  title = 'app';
}
