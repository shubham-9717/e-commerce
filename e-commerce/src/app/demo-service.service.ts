import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoServiceService {

  constructor() { }

  demoFunction(){
    console.log("Test Successfull")
  }
}
