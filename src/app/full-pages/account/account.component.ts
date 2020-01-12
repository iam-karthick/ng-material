import { Component, OnInit } from '@angular/core';
import { FormService } from '../../shared/form-data.service';
import { Observable,interval } from 'rxjs';
import { Store } from "@ngrx/store";
import { user } from '../../../app/shared/user.model';
// import { edituser } from '../../../app/shared/user.model';
import { AppState } from '../../app.state';
import * as userAction from "../../shared/reducer/simple.reducer";
import { Router } from '@angular/router';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


export interface userDetails {
  fname: string;
  lname: string;
  phone: number;
  email: number;
}

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [FormService]
})
export class AccountComponent implements OnInit {
  private loadding: boolean = false;
  data: any = []
  value = false;
  data_count: number;
  userData: any = [];
  displayedColumns: string[] = ['fname', 'lname', 'phone', 'email', 'select'];
  dataSource:any=[];
  users: Observable<user[]>;
  todos = [
    {
      name: 'Angular',
      category: 'Web Development'
    },
    {
      name: 'Flexbox',
      category: 'Web Development'
    },
    {
      name: 'iOS',
      category: 'App Development'
    },
    {
      name: 'Java',
      category: 'Software development'
    }
  ];

  completed = [
    {
      name: 'Android',
      category: 'Mobile Development'
    },
    {
      name: 'MongoDB',
      category: 'Databases'
    },
    {
      name: 'ARKit',
      category: 'Augmented Reality'
    },
    {
      name: 'React',
      category: 'Web Development'
    }
  ];
  constructor(private store: Store<AppState>, private fs: FormService, public router: Router) {
    this.users = store.select('user');
    store.subscribe();
  }

  ngOnInit() {
    this.dataSource = this.users;
    // this.obj();
  }

  // obj(){
  //   const observable = interval(1000);

  //   observable.subscribe(
  //     (num:number)=>{
  //       this.num =num;
  //     }
  //   )
  // }
  onDelete(index) {
    this.store.dispatch(new userAction.RemoveUser(index))
  }
  onAddUser() {
    this.router.navigate(['/home'])
  }
  onEdit(value, index) {
    console.log(JSON.stringify(value));
    this.store.dispatch(new userAction.EditUser(value))

    // alert(index);
  }
  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.completed,
        event.previousIndex,
        event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex, event.currentIndex);
    }
  }

}
