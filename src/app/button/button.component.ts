import { Component, OnInit } from '@angular/core';
import { CdkDragEnd } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  buttonPosition;
  isPay: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  dragEnd($event: CdkDragEnd){
    this.buttonPosition = $event.source.getFreeDragPosition()
    if(this.buttonPosition.y <= -90){
      console.log("salut")
    }
  }

}
