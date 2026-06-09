import { Component, signal } from '@angular/core';
import { email, form, FormField, required } from '@angular/forms/signals';


interface LoginData{
  email:string,
  password:string
}

@Component({
  selector: 'app-form-signal',
  imports: [FormField],
  templateUrl: './form-signal.html',
  styleUrl: './form-signal.css',
})
export class FormSignal {
  loginModel=signal<LoginData>({
    email:'',
    password:'',
  })
  

  loginForm=form(this.loginModel,(schemaPath)=>{
    required(schemaPath.email,{message:'email is required'})
    email(schemaPath.email,{message:'Enetr Valid Email Format'})

    required(schemaPath.password,{message:'Password - Required'})
  })

  onSubmit(e:Event){
    e.preventDefault()
    const credentials=this.loginModel()
    console.log('Logging in ', credentials);
    
  }
}
