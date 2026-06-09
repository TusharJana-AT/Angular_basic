import { Component, computed, signal, WritableSignal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Profile } from './profile/profile';
import { Counter } from './counter/counter';
import { ControlFlow } from './control-flow/control-flow';
import { InputEvent } from './input-event/input-event';
import { FormSignal } from './form-signal/form-signal';
import { Child } from './child/child';
import { DisplayCOunter } from './Counter_Global/display-counter/display-counter';
import { ControlCOunter } from './Counter_Global/control-counter/control-counter';
import { Pipes } from './pipes/pipes';
import { Home } from './Pages/home/home';
import { About } from './Pages/about/about';
import { Login } from './Pages/login/login';
import { Header } from './component/header/header';
import { ReactiveForm } from './reactive-form/reactive-form';
import { ReactiveFormGroup } from './reactive-form-group/reactive-form-group';
import { TemplateForm } from './template-form/template-form';

@Component({
  selector: 'app-root',
  imports: [Counter, ControlFlow, InputEvent, FormSignal, Child,DisplayCOunter,ControlCOunter,Pipes,RouterOutlet,RouterLink,Header,ReactiveForm,ReactiveFormGroup,TemplateForm],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  name = 'Tushar';

  getSum(a: number, b: number) {
    return a + b;
  }

  age = 33;

  callMe() {
    alert('Hello TJ');
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

  height = signal(10);
  width = signal(30);
  area = computed(() => this.height() * this.width());

  handleHeight() {
    this.height.set(this.height() + 10);
  }

  userName = signal('Tuhar');

  users = signal(['aa']);
  newUser = signal('');

  selectedUserName=signal('')

  AddUsers() {
    this.users.update((data) => [...data, this.newUser()]);
    this.newUser.set('');
  }

  selectedUser(name:string){
    // console.log(name);
    this.selectedUserName.set(name)
  }
}
