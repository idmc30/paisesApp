import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce : EventEmitter<string> = new EventEmitter();

  deboucer : Subject<string> = new Subject();

  termino : string = '';

  ngOnInit() {
     this.deboucer
     .pipe(debounceTime(300))
     .subscribe( valor =>{

      this.onDebounce.emit (valor);

     } )
  }

  buscar(){
      this.onEnter.emit( this.termino );

  }

  teclaPresionada( ){

   this.deboucer.next( this.termino );



  }

}
