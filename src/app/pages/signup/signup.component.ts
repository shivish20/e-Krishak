import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService,private snack:MatSnackBar,private router:Router) { }
  public user ={
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:''

  }

  ngOnInit(): void {
  }
   formSubmit(){
    //  alert("Register Form Submitted");
    //  console.log(this.user)
  //validating username
    if(this.user.username=='' || this.user.username==null){
      this.snack.open('Enter Valid Username','',{
        duration:3000,
      });
      return;
    }

  //   //add user
    this.userService.addUser(this.user).subscribe(
      (data:any)=>{
        //success
        console.log(data);
        // alert("success");
        
        //Showing success message using Sweetalert
      Swal.fire('Successfully done !!','User id is '+data.id,'success');
      this.router.navigate(['/login']);
      },
      (error)=>{
        //error
        console.log(error);
        // alert("error");
        this.snack.open('Something went wrong','',{
          duration:3000,
        });

  //       //Showing error message using Sweetalert

        const options = {
          title: 'Failed',
          text: "Facing some issue!",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          
       };

      Swal.fire(options);
        

  //     }
      });

      }
  
}
