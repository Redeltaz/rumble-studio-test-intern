import { Component, OnInit } from '@angular/core';
import { SavedTimestampService } from '../services/saved-timestamp.service';
import { Time } from '../interfaces/time';
import { TimeForm } from '../interfaces/time';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  podcast: any = "assets/audio/advice-web-podcast.mp3"

  times: Time[];
  time: Time = {
    name: '',
    timeDisplay:'',
    timeSec: 0
  }
  timeForm: TimeForm = {
    min: 0,
    sec: 0
  }

  constructor(private savedTimestampService: SavedTimestampService) { }

  ngOnInit(): void {
      this.savedTimestampService.getTime().subscribe(times => {
        this.times = times;
      });
    }

  onSubmit(){
      if(this.timeForm.sec.toString().length === 1){
        this.time.timeDisplay = `${this.timeForm.min}:0${this.timeForm.sec}`
      }else {
        this.time.timeDisplay = `${this.timeForm.min}:${this.timeForm.sec}`
      }//to avoid the wrong number display (like 2:5, 4:6...) we check legth of sec
      
      this.time.timeSec = this.timeForm.min * 60 + this.timeForm.sec;

      if(this.time.name != '' && this.time.timeDisplay != ''){
        this.savedTimestampService.setTime(this.time);
        this.time.name = '';
      }
  }

  deleteTime(event, time){
    this.savedTimestampService.deleteTime(time);
  }

  updateTime(time){
    console.log(time)
  }

}
