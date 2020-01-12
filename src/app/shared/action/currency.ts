import { Action } from '@ngrx/store';
import { Currency} from '../user.model';

export const CURRECYISUPDATE = "[CURRENCY] update";
export const CURRECYISUPDATED ="[CURRENCY] updated";

export class currenciesUpdateAction implements Action {
    type = CURRECYISUPDATE;
}
export class currenciesUpdatedAction implements Action {
    type = CURRECYISUPDATED;
    constructor (public payload:Currency[]){};
}