import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  @Input() userName!:string

  @Input() usersName:string|undefined;
  @Output() selectedUser=new EventEmitter

  SelectedUser(name:string|undefined){
    console.log(name);
  }

  whichUser(name:string|undefined){
  if(name){
    this.selectedUser.emit(name);
  }
} 

}
