import {Component, OnInit} from '@angular/core';
import {User} from '../users/user';
import{UserService} from '../users/user.service';

@Component({    
    templateUrl: 'app/home/home.component.html',
    //providers:[UserService]
})

export class HomeComponent implements OnInit{
    user:User;
    loginClick(){
        document.getElementById('id01').style.display='block';
    }

    constructor(private _userService:UserService) {      
        this._userService.userDataChange.subscribe((data: any)=>{
                this.user = this._userService.getUser();
            }
        );
    }
    logout(){
        this._userService.setUser(null);
    }
    ngOnInit(): void{
    }
}