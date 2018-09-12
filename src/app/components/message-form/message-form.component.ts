import { Component, OnInit, Input } from '@angular/core';
import { Mensaje } from '../../classes/mensaje';
import { Sala } from '../../classes/sala';
import { Usuario } from '../../classes/usuario';
import { Globals } from '../../globals';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {

  
  
  @Input() salaActual: Sala;
  msg: String = '';

  constructor(private globals: Globals) { }

  enviarMensaje() {
    if (this.msg != '') {
      this.globals.salaActual.mensajes.push(new Mensaje(this.globals.salaActual.id, this.msg, this.globals.logueado.role + ' ' + this.globals.logueado.alias));
      this.msg = '';
    }

  }

  onKey(event: any) {
    if (this.msg != '') {
      this.enviarMensaje();
    }
  }

  ngOnInit() {
  }

}
