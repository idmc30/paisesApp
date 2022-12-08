import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 5px
    }

  `
  ]
})
export class PorRegionComponent {


  regiones : string[] = ['south america', 'southern europe', 'central america', 'eastern asia'];

  regionActiva: string ='';

  paises : Country[] = [];

  constructor(private paisesService : PaisService) { }

  getClaseCSS( region: string){

    return (region == this.regionActiva) ? 'btn btn-primary':'btn btn-outline-primary'
  }

  activarRegion( region : string){

    if (region === this.regionActiva) {
      return ;
    }

    this.regionActiva =  region;
    this.paises = [];
    // listar datos del paises por region

    this.paisesService.buscaRegion(region)
    .subscribe({


      next: (paises) => {
        console.log(paises);
        this.paises = paises;
      },
      error: (error) => {


    }
    });


  }


}
