import { Component } from '@angular/core';

@Component({
    moduleId:module.id,
    selector: 'home',
    templateUrl: 'home.component.html'
})
export class HomeComponent  { 

/*genders = [
    { value: 'F', display: 'Female' },
    { value: 'M', display: 'Male' }
  ];
*/
username: string;

  toUpperCase () {
    this.username = this.username.toUpperCase();
  }
  toLowerCase () {
    this.username = this.username.toLowerCase();
  }
  leftImage:boolean=false;
  rightImage:boolean=false;


  toggleImg(index){
      if(index==1){
        this.leftImage=true;
        this.rightImage=false;
        console.log(this.rightImage);
      }
     else {
        this.leftImage=false;
        this.rightImage=true;
        console.log(this.rightImage);       
     }

 }

      
          
      
 
  



 }

  
 