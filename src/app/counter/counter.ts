import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {

  count:WritableSignal<number>=signal<number>(0)

  increment(){
    this.count.update((val)=>val+1)
  }

  reset(){
    this.count.set(0)
  }
  
  decrement(){
    if(this.count() > 0){
      this.count.update((val)=>val-1) 
    }
    
  }
}
