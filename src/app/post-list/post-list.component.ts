import { Component, OnInit , Input} from '@angular/core';
import { Post } from '../Post';
import { postArray } from '../post_array'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() postArray : Post[] = postArray;
    
  constructor() { }

  
  ngOnInit() {
  }

}
