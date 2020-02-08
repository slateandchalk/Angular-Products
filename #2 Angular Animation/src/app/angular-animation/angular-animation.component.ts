import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  
} from '@angular/animations';

@Component({
  selector: 'app-angular-animation',
  templateUrl: './angular-animation.component.html',
  styleUrls: ['./angular-animation.component.css'],
  animations: [
    trigger('openclose',[
      state('open', style({
        height: '200px',
        backgroundColor: 'yellow'
      })),
      state('close', style({
        height: '100px',
        backgroundColor: 'green'
      })),
      transition('open => close',[
        animate('1s')
      ]),
      transition('close => open',[
        animate('.5s')
      ])
    ])
  ]
})
export class AngularAnimationComponent implements OnInit {

  isOpen = true;

  toggle(){
    this.isOpen = !this.isOpen;
  }

  constructor() { }

  ngOnInit() {
  }

}
