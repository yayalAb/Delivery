import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import { distinctUntilChanged } from  'rxjs/operators';
import { pluck } from  'rxjs/operators';

import { User } from '../models/user';

export interface State {
    user:User[];
  [key: string]: any
}

const state: State = {
    user:[
        {
            email:"",
            UserType:"",
            password:""
        }
    ]
};

export class Store {

  private subject = new BehaviorSubject<State>(state);
  private store = this.subject.asObservable().pipe(distinctUntilChanged());

  get value() {
    return this.subject.value;
  }

//   select<T>(name: string): Observable<T> {
//     return this.store.pipe(pluck(name));
//   }

  set(name: string, state: any) {
    this.subject.next({ ...this.value, [name]: state });
  }

}
