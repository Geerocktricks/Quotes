import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  constructor(){
    
  }
  ngOnIt() {

  }
  addName(Name) {
      alert(Name);
      // return false;
      
  }

}

