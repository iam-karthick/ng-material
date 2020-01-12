import { Action } from '@ngrx/store';
import { user } from '../user.model';

// Section 2
export const ADD_USER     = '[USER] Add';
export const REMOVE_USER  = '[USER] Remove';
export const EDIT_USER    = '[USER] Edit';
export class AddUser implements Action {
    readonly type = ADD_USER;
    constructor(public payload:user){}
}
export class RemoveUser implements Action {
    readonly type = REMOVE_USER;
    constructor(public payload:number){
    }
}
export class EditUser implements Action{
    readonly type = EDIT_USER;
    constructor(public payload:user){}
}
export type Actions = AddUser|RemoveUser|EditUser;