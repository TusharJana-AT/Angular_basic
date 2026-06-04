import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  imports: [],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {
  status:WritableSignal<string>=signal<string>('error')

  handleStatus(event:Event){
    let tar=event.target as HTMLSelectElement
    this.status.set(tar.value)
  }

  users=signal(["Asjd","Bolvik","Cierra","DodoBa"])

  usersObj=signal([
    { id:1, name: "TJ","lastName":"abJ","age":33},
    { id:1, name: "sjhxJs","lastName":"KOPP","age":39},
    { id:1, name: "Johnatahn","lastName":"jdj","age":19},
  ])
}
