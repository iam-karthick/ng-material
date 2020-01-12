import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from 'rxjs';
import { user } from '../app/shared/user.model';
import { AppState } from './app.state';
import { AmountChangeAction } from '../app/shared/action/action';
import * as formRoot from './shared/reducer/index';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value:string;
  constructor(public store:Store<formRoot.State>){
  }

  onAmountChange(amount:string){
    alert(amount)
    const number = parseFloat(amount)
    if(!isNaN(number))
    this.store.dispatch(new AmountChangeAction(number));
  }
}
