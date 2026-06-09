import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-group',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form-group.html',
  styleUrl: './reactive-form-group.css',
})
export class ReactiveFormGroup {
  loginForm=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required,Validators.minLength(3)])
  })

  get name(){
    return this.loginForm.get("name")
  }

  get email(){
    return this.loginForm.get("email")
  }

  get password(){
    return this.loginForm.get("password")
  }

  handleSubmit(){
    console.log(this.loginForm.value);
    this.loginForm.setValue({
      name:'',
      email:'',
      password:'',

    })
    
  }

  reset(){
    this.loginForm.setValue({
      name:'',
      email:'',
      password:'',

    })
    
  }
}
