import { Component, OnInit } from '@angular/core';
import { cpuUsage } from 'process';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  VisaLogo: any = "assets/img/Visa_Logo.png"
  Pins: any = "assets/img/Pins.png"
  isNav: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  navStatus(): string {
    if(this.isNav === false) {
      return 'none'
    }else {
      return 'block'
    }
  }//by checking the value of isNav, the function hide or display the navbar

  navClick():void {
    if(this.isNav === false){
      this.isNav = true
    }else{
      this.isNav = false
    }
  }//change the bool variable to know if the navbar is open or close

}
