import { Component, OnInit, Input } from '@angular/core';
import { Mensaje } from '../../classes/mensaje';
import { Sala } from '../../classes/sala';
import { Globals } from '../../globals';


@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  @Input() salaActual;
  
  constructor(private globals: Globals) {
    
   }

  ngOnInit() {
  }

}
