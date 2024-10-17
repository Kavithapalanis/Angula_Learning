import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,  
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  //template: "<h1>Hey all..!!</h1>",
  styleUrl: './app.component.scss'
})
export class AppComponent {
  //title = 'homes';
  //fullName = "testing input" 

  /*getName(){        String interpolation concept for method
    return "me";
  } */

  clickCount = 0;

  clickMe(){
    this.clickCount++; 
  }
}
