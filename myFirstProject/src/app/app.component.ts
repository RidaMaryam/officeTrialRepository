import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  env = environment
  public title:string = this.env.title
  public students:any = [15,16,18];
  public inputVar:string = "";


  public myFunc() {
    
    alert("This button was clicked")
  }
}
