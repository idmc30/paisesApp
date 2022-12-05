import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

   private apiUrl : string = 'https://restcountries.com/v3.1';


  constructor(private http : HttpClient) { }

  buscarPais( termino : string) : Observable<Country[]>{

     const url = `${this.apiUrl}/name/${termino}`;
     return this.http.get<Country[]>(url);

     //  otra forma con el operador rxjs
    //  .pipe(
    //   catchError( err => of(['Hola mundo']))
    //  );

  }

  buscarCapital( termino : string) : Observable <Country[]>{


// https://restcountries.com/v3.1/capital/{capital}
    const  url=`${this.apiUrl}/capital/${termino}`
    return this.http.get<Country[]>(url);
  }

  getPaisxCodigo( id : string) : Observable <Country>{


    // https://restcountries.com/v3.1/alpha/pe
        const  url=`${this.apiUrl}/alpha/${id}`
        return this.http.get<Country>(url);
      }


}
