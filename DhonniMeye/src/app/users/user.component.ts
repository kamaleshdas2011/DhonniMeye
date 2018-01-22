import{Component, OnInit} from '@angular/core';
import {User} from './user';
import{UserService} from './user.service';

@Component({
    selector: 'user',
    templateUrl: 'app/users/user.component.html',
    providers:[UserService]
})

export class UserComponent implements OnInit{
    user: User;
    serviceStatus: string = "Loading data. Please wait.";

    constructor(private _service:UserService){
        this._service.getUserByCode('kamalesh').subscribe(
            (userData) => {
                if (userData == null) {
                    this.serviceStatus = "user does not exists.";
                }
                else {
                    this.user = userData;
                }
            },
            (error) => {
                this.serviceStatus = "Error occurred, please try again."
            }
        );
    }
    ngOnInit(): void{

    }
}