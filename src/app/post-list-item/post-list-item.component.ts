import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {
 
  @Input() titre : string;
  @Input() contenu : string;
  @Input() date : Date;
  @Input() likeCompute : number;
  constructor() {
    this.titre="hello world";
   }

  ngOnInit() {
  }

}
