import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent {

  @Output() onEnter : EventEmitter<string> = new EventEmitter();

  termino : string = '';

  constructor() { }

  buscar(){
      this.onEnter.emit( this.termino )

  }

}
