import { Currency } from '../user.model';
export interface State {
  amount: number
  currencies: Currency[]
}

import * as fromAmount from './amount.reducer'
import * as fromCurrency from './currency.reducer'

export const reducers = {
  amount: fromAmount.reducer,
  currencies: fromCurrency.reducer,
}

export const getCurrencyState =(state:State) =>state.currencies;
export const getAmountState =(state:State) =>state.amount;