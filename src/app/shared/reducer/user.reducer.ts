import { Action } from '@ngrx/store';
import { user ,Currency} from '../user.model';
import * as userAction from '../reducer/simple.reducer';

export function reducer(state: user[] = [],action: userAction.Actions) {
    switch (action.type) {
        case userAction.ADD_USER:
            return [...state, action.payload];
        case userAction.REMOVE_USER:
            return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)];
            // case userAction.EDIT_USER:
            //     return[...state[], action.payload];
        default:
            return state
                
    }
}





