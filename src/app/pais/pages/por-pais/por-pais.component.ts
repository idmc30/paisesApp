import { Component, OnInit } from '@angular/core';


import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent{


  termino  : string  = '';
  hayError : boolean  = false;
  paises : Country []  = [];

  constructor(private paisService : PaisService) { }


  buscar(){
    this.hayError =  false;
    const termino =  this.termino;
    this.paisService.buscarPais( termino )
    .subscribe (pais => {
        console.log( pais );
        this.paises = pais;

    },(err)=>{

      this.hayError =  true;
      this.paises = [];

    })

  }

}
