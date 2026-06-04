import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-input-event',
  imports: [],
  templateUrl: './input-event.html',
  styleUrl: './input-event.css',
})
export class InputEvent {
  myName:WritableSignal<string>=signal<string>('sd')

  reset(){
    this.myName.set('')
  }

  setValue(val:string){
    this.myName.set(val)
  }
}
