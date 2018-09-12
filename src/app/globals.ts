import { Injectable } from '@angular/core';
import { Usuario } from './classes/usuario';
import { Sala } from './classes/sala';

@Injectable({
  providedIn: 'root',
})

export class Globals {
  logueado: Usuario;
  salaActual: Sala;
  
}