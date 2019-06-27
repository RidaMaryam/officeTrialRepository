import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PrintNameService } from '../print-name.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public env = environment
  public name = ""
  constructor(private printnameService:PrintNameService) {
   }
  
  ngOnInit() {
  }

  public getNames() 
  {
    console.log("This button was clicked");
    this.name = this.printnameService.printRandomWords()
  }
}
