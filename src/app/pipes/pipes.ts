import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css',
})
export class Pipes {

  name=signal('tushar')
  currency=signal(1000)
  today=new Date()


}
