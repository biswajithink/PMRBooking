import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `<div class="container-fluid header_fluid text-center"><header></header></div>
  <div class="container-fluid body_fluid text-center"><router-outlet></router-outlet></div>
  <div class="container-fluid footer_fluid text-center"><footer></footer></div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'app works!';
   private router: Router;
  itemdesc(id:number){
     console.log("itemdesc");
     
    this.router.navigate(['/LogInComponent', id]);
    }
}
