import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {

  email=new FormControl("")
  password=new FormControl("")

  login(){
    console.log(this.email.value,this.password.value);
    
  }

  reset(){
    this.email.setValue("");
    this.password.setValue("");
  }
}
