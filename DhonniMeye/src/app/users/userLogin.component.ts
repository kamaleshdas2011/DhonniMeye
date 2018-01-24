import {Component, OnInit} from '@angular/core';
import {User} from './user';
import {UserService} from './user.service';
import {Router} from '@angular/router';
import {FormGroup,FormsModule,FormControl,FormBuilder,ValidatorFn,
    Validators,AbstractControl,FormArray} from '@angular/forms';

@Component({
    selector: 'user-login',
    templateUrl: 'app/users/userLogin.component.html',
    styleUrls: ['app/users/userLogin.component.css'],
    //providers:[UserService]
})

export class UserLoginComponent implements OnInit{    
    loginForm: FormGroup;
    user: User;    

    login(){
        const usename=this.loginForm.get('username').value;
        const password=this.loginForm.get('password').value;        

        document.getElementById('id01').style.display='none';
        this.user=new User('Kamalesh','Das','Male','C001','kd');
        this._userService.setUser(this.user);
        
        //this._router.navigateByUrl('/user');
    }
    ngOnInit():void{
        this.loginForm=this._fb.group({
            username:['',[Validators.required]],
            password:['',[Validators.required]]
        })
    }
    constructor(private _router:Router, private _fb:FormBuilder,private _userService:UserService){
        // this._userService.isLoggedIn$.subscribe(isLoggedIn => {
        //     console.log(isLoggedIn);
        // });
    }
}