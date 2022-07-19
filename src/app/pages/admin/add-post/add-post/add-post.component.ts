import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostService } from 'src/app/services/post/post.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  post = {
    title: '',
    image:'',
    content: '',
  };

  constructor(
    private _post: PostService,
    private _snack: MatSnackBar
  ) {}

  ngOnInit(): void {}

  formSubmit() {
    if (this.post.title.trim() == '' || this.post.title == null) {
      this._snack.open('Title Required !!', '', {
        duration: 3000,
      });
      return;
    }

    //all done

    this._post.addPost(this.post).subscribe(
      (data: any) => {
        this.post.title = '';
        this.post.content = '';
        this.post.image='';
        Swal.fire('Success !!', 'post is added successfuly', 'success');
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!', 'Server error !!', 'error');
      }
    );
  }
}