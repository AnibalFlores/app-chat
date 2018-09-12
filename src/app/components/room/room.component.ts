import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Sala } from 'src/app/classes/sala';
import { Mensaje } from '../../classes/mensaje';
import { Globals } from '../../globals';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  @Output() salaEmitter = new EventEmitter();
  private _salas: Sala[];
  
  public get salas(): Sala[] {
    return this._salas;
  }
  public set salas(value: Sala[]) {
    this._salas = value;
  }
  
 

  constructor(private globals: Globals) {
    this.salas = [];

    let salaPublica = new Sala('Public');
    salaPublica.addMessage('Hola como estas?');
    salaPublica.addMessage('Tienes algo nuevo que decir?');

    let salaPrivada = new Sala('Privada');
    salaPrivada.addMessage('Hola Mundo!!');
    salaPrivada.addMessage('Bienvenido al chat!!');

    
    this.salas.push(salaPublica);
    this.salas.push(salaPrivada);

    this.globals.salaActual = salaPublica;
    

  }

  seleccionaSala(salaSelec:Sala)
  {
    this.globals.salaActual = salaSelec;
    this.salaEmitter.emit(this.globals.salaActual);
  }
      
  ngOnInit() {
  }

}
