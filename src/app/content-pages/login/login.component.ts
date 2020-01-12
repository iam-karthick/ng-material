import { Component, OnInit } from '@angular/core';
import { Tile } from '../shared/layout';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { FormGroup,FormBuilder,Validator, Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userId:string;
  Password:any;
  loggedUser:FormGroup;
  constructor(private router:Router,private fb:FormBuilder) { }

  ngOnInit() {
    this.loggedUser = this.fb.group({
      userId:['',Validators.required],
      Password:['',Validators.required]
    })
  }
  onSubmit(){
  //  console.log(JSON.stringify(this.loggedUser));
    this.router.navigate(['/home'])
  }
}
