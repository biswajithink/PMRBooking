import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
    moduleId:module.id,
    selector: 'login',
    templateUrl: 'login.component.html'
})
export class LogInComponent  { 

constructor(private router: Router) { }

goHome(){
    document.getElementById("bodyId").className =
    document.getElementById("bodyId").className.replace('bodyBack','homeBody');
    this.router.navigate(['./home']);
}


 }

  
 