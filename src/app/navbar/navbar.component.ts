import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

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
