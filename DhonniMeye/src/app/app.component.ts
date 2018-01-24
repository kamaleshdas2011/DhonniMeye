import { Component } from '@angular/core';
import{ UserService } from './users/user.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
})
export class AppComponent  { 
  name = 'Angular'; 
}
