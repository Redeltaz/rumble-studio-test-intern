import { Component, OnInit } from '@angular/core';
import { CdkDragEnd } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  buttonPosition;
  emitting: boolean = false
  buttonText: string = 'Pay'

  constructor() { }

  ngOnInit(): void {
  }

  dragEnd($event: CdkDragEnd){
    this.buttonPosition = $event.source.getFreeDragPosition()
    if(this.buttonPosition.y <= -95){
      this.emitting = true;
      this.buttonText = 'Done !'
      setTimeout(() => {
        alert('The payment has been made !')
        this.emitting = false;
        this.buttonText = 'Pay'
        $event.source._dragRef.reset();//reset the position of the dragged element
      },2000)//set a little timer to give a processing request impression
    }
  }//if the position of the button is near the end (95~100%) isPay become true
}

//https://stackoverflow.com/questions/54449939/how-to-get-the-position-after-drop-with-cdkdrag
//to understand how cdk drag and drop position work
