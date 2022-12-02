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
  hayError : boolean  = false;
  constructor(private paisService : PaisService) { }


  buscar(){
    this.hayError =  false;
    const termino =  this.termino;
    this.paisService.buscarPais( termino )
    .subscribe (resp => {
        console.log( resp );

    },(err)=>{
      console.log('error');
      console.info( err );
      this.hayError =  true;

    })

  }

}
