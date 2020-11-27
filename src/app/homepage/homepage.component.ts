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

  constructor() { }

  ngOnInit(): void {
  }

}
