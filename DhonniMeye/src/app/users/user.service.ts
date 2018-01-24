import { Injectable,EventEmitter } from '@angular/core';
import { User } from './user';
import { Http, Response } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
import{Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import{Cookie} from 'ng2-cookies/ng2-cookies'
//import { EventEmitter } from 'events';
//import { Output } from '@angular/core/src/metadata/directives';

@Injectable()
export class UserService {
    
    private userData: User;
    userDataChange: EventEmitter<User> = new EventEmitter();

    constructor(private _http: Http)  {
        
    } 

    setUser(user: User) {
        Cookie.set(User,user,1)
        this.userData = user;
        this.userDataChange.emit(this.userData);
        //console.log(this.getUser());
    }
    getUser() {
        return this.userData;
    }

    // getAllUsers(): Observable<User[]>{
    //     return this._http.get("http://localhost:31704/api/employee")
    //         .map((response: Response) => <User[]>response.json())
    //         .catch(this.handleError);
    // }
    // getUserByCode(code: string): Observable<User> {
    //     return this._http.get("http://localhost:31704/api/employee/" + code)
    //          .map((response: Response) => <User>response.json())
    //          .catch(this.handleError);
    // }
    // handleError(error: Response) {
    //     console.error(error);
    //     return Observable.throw(error);
    // }
}