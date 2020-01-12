import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';
// import { Users } from ''
import { store$ } from './form-data';

@Injectable({providedIn:'root'})

export class FormService {
    private subject = new Subject<any>();
    onFormDataSelect(formValue:any){
        this.subject.next({
            form:formValue
        })
    };

    clearFormData(){
        this.subject.next({});
    }

    getFromDataSelect():Observable<any>{
        return this.subject.asObservable();
    }

    getUsers(){
        return store$;
    }
}