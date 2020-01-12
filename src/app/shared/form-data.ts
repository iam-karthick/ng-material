import { BehaviorSubject } from 'rxjs';

export const store = new BehaviorSubject({
    firstName:'Tim',
    lastName:'cook',
    date:new Date(),
    email:'exmple@email.com',
    address:'test'
})

export const store$ =store.asObservable();