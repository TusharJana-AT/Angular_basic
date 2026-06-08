import { Component } from '@angular/core';
import { Counter } from '../store/counter';

@Component({
  selector: 'app-control-counter',
  imports: [],
  templateUrl: './control-counter.html',
  styleUrl: './control-counter.css',
})
export class ControlCOunter {

  constructor(public state:Counter){
    
  }
}
