import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Counter {
  count=signal(0)

  increment(){
    this.count.update((val)=>this.count()+1)
  }

  
  decrement(){
    if (this.count()>0){
      this.count.update((val)=>this.count()-1)
    }
  }

  
  reset(){
    this.count.set(0)
  }
}
