import { Component, VERSION } from '@angular/core';
import { Usuario } from 'src/app/classes/usuario';
import { Globals } from './globals';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title: string;
  autor: string;

  constructor(private globals: Globals) {
    this.title = `Angular v${VERSION.full}`;
    this.autor = 'Aníbal H. Flores';
  }

  crearUser(name: string, alias: string, rol: string) {
    this.globals.logueado = new Usuario();
    this.globals.logueado.name = name;
    this.globals.logueado.alias = alias;
    this.globals.logueado.role = rol;
    //console.log(this.globals.logueado);
  }
}
