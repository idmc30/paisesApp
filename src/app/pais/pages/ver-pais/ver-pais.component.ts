import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from "rxjs/operators";

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';


@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

   pais!: Country ;

  // antes que se inicialice
  constructor( private activateRoute: ActivatedRoute, private paisService : PaisService) { }

  ngOnInit(): void {

    //componente inicializado
    //TODO: segunda forma
    this.activateRoute.params
    .pipe(
      switchMap( ({id})=> this.paisService.getPaisxCodigo (id)  ),
      tap( console.log)    //opérador tap recibe el producto del observable e imprime lo que responde el observable
      )
    .subscribe( pais => {
        console.log( pais );

        this.pais = pais[0]

    })





    //TODO: primera forma
    // this.activateRoute.params
    //  .subscribe( ({id}) => {
    //         console.log( id);
    //          this.paisService.getPaisxCodigo(id).subscribe(
    //           (pais) =>{
    //              console.log( pais );

    //           }
    //          )


    //     }
    //  );





  }

}
