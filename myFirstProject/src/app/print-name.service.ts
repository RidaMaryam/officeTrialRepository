import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrintNameService {
  public names : any = ["Alice","Bob","Trudy","Mike","Harley","Ian","Beth","Sunday"]
  constructor() { }

  public printRandomWords() {
    return this.names[Math.floor((Math.random()*this.names.length))]
  }
}
