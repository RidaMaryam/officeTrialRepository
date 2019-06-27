import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public router:Router) {  }
  env = environment
  ngOnInit() {
  }
  public goBackUsingFunction() {
    this.router.navigate(['home'])
  }

}
