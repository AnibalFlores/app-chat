import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Usuario } from 'src/app/classes/usuario';
import { FormControl, FormGroup } from '@angular/forms';
import { Globals } from '../../globals';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  roles = ['Test', 'Admin'];

  submitted = false;

  onSubmit() { this.submitted = true; this.loguearUsuario(); }

  newUser() {
    this.usuario = new Usuario();
  }

  @Output() userLogged = new EventEmitter();

  @Input() usuario = new Usuario();

  constructor(private globals: Globals) {
    this.usuario.role = this.roles[0];
   }

  ngOnInit() {
  }

  loguearUsuario() {
    this.globals.logueado = this.usuario;
  }
}
