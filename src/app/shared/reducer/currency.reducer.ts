import { Currency } from '../user.model';
import * as currency from '../action/currency';

export function reducer(state=[],action:currency.currenciesUpdatedAction){
    switch(action.type){
        case currency.CURRECYISUPDATED:
            return action.payload
        default :
            return state;    
    }
}