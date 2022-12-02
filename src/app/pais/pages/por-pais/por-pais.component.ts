import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent{


  termino  : string  = "hola mundo";
  constructor(private paisService : PaisService) { }


  buscar(){
    console.log( this.termino);
    const termino =  this.termino;
    this.paisService.buscarPais( termino )
    .subscribe (resp => {
        console.log( resp );

    })

  }

}
