import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  name=signal('')
  
  constructor(public route:ActivatedRoute){}

  ngOnInit(){
    this.route.params.subscribe((params)=>{
      this.name.set(params['name'])
    })
  }
}
