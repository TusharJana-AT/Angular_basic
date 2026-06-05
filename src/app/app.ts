import { Component, computed, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from './profile/profile';
import { Counter } from './counter/counter';
import { ControlFlow } from './control-flow/control-flow';
import { InputEvent } from './input-event/input-event';
import { FormSignal } from './form-signal/form-signal';

@Component({
  selector: 'app-root',
  imports: [Counter,ControlFlow,InputEvent,FormSignal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name="Tushar"

  getSum(a:number,b:number){
    return a+b
  }

  age=33

  callMe(){
    alert("Hello TJ")
  }

  // count=0
  // counter(action:string){
  //   if(action=='minus') {
  //     this.count>0 && this.count--
  //   }else{
  //     this.count++
  //   }
  // }

  // handleEvent(event:any){
  //   console.log(event.target.value);
    
  // }

  height=signal(10)
  width=signal(30)
  area=computed(()=>this.height() * this.width())
  

  handleHeight(){
    this.height.set(this.height()+10)
  }

  
}
