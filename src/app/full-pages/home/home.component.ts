import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { store, store$ } from '../../shared/form-data';
import { untilDestroyed } from 'ngx-take-until-destroy';
// import { requiredFileType } from 'src/app/shared/requiredFileType';
import { FormService } from '../../shared/form-data.service';
import { Router } from '@angular/router'
import { Observable, interval, observable } from "rxjs";
import { Store } from '@ngrx/store';
import { user } from '../../shared/user.model';
import { AppState } from "../../app.state";
import * as userAction from "../../shared/reducer/simple.reducer";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(public dialog: MatDialog,private store:Store<AppState>,private fb:FormBuilder,private fs:FormService,private router:Router) { }
  userData:FormGroup;
  num:number;
  data:any;

  openDialog(): void {
  const dialogRef = this.dialog.open(DialogComponent, {
      width: '650px',
      data:'nothing'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.data = result;
    });
  }

  ngOnInit() {
    this.obj();
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.userData = this.fb.group({
      fname:['',Validators.required],
      lname:['',Validators.required],
      // date:new Date(),
      phone:['',Validators.required],
      email:['',[Validators.required,Validators.pattern(emailregex)]],
      // address:['',Validators.minLength(20)],
      // file:['',Validators.required,requiredFileType('pdf')]
    });
    // store$.pipe(
    //   untilDestroyed(this)
    // ).subscribe(state => this.userData.patchValue(state));
  }
  // @HostListener('window:scroll')
  //   onscroll(){
  //     console.log('scroll');
  // }
  // get e(){
  //   return this.userData.controls;
  // }
  // public hasError =(controlName:string,errorName:string)=>{
  //   return this.userData.controls[controlName].hasError(errorName);
  // }
  onSubmit(){
    console.log(JSON.stringify(this.userData.value));
    // this.fs.onFormDataSelect(this.userData.value);
    this.store.dispatch(new userAction.AddUser(this.userData.value))
    // console.log(JSON.stringify(this.userData.value))
    this.router.navigate(['/home/account']);
  }
  onEdit(){
    this.store.dispatch(new userAction.EditUser(this.userData.value))
  }
  obj(){
    const observable = interval(1000);

    observable.subscribe(
      (num:number)=>{
        this.num =num;
      }
    )
  }

}
