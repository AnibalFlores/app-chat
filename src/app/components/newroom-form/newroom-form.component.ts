import { Component, OnInit, Input } from '@angular/core';
import { Globals } from '../../globals';
import { Sala } from '../../classes/sala';

@Component({
  selector: 'app-newroom-form',
  templateUrl: './newroom-form.component.html',
  styleUrls: ['./newroom-form.component.css']
})
export class NewroomFormComponent implements OnInit {
  @Input() salas: Sala[];
  nuevaSala: String = '';

  constructor(private globals: Globals) { }

  crearSala() {
    if (this.nuevaSala != '') {
      this.salas.push(new Sala(this.nuevaSala));
      this.nuevaSala = '';
    }
  }

  onKey(event: any) {
    if (this.nuevaSala != '') {
      this.crearSala();
    }
  }

  ngOnInit() {
  }

}
