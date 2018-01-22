import { Injectable } from '@angular/core';
import { User } from './user';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {

    constructor(private _http: Http) {

    }

    getAllUsers(): Observable<User[]>{
        return this._http.get("http://localhost:31704/api/employee")
            .map((response: Response) => <User[]>response.json())
            .catch(this.handleError);
    }
    getUserByCode(code: string): Observable<User> {
        return this._http.get("http://localhost:31704/api/employee/" + code)
             .map((response: Response) => <User>response.json())
             .catch(this.handleError);
    }
    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error);
    }
}