import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.css']
})
export class ViewPostsComponent implements OnInit {

  posts = [
    {
      "title":"",
      "content":"",
      "image":'',
    }
  ];

  constructor(private _post: PostService) {}

  ngOnInit(): void {
    this._post.posts().subscribe(
      (data: any) => {
        //css
        this.posts = data;
        console.log(this.posts);
      },

      (error) => {
        //
        console.log(error);
        //swal.fire('Error !!', 'Error in loading data', 'error');
      }
    );
  }
}
