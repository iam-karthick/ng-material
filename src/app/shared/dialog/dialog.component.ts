import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogData} from '../../full-pages/home/home.component';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,private fb:FormBuilder) {}
    userData:FormGroup;
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
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
  }

}
