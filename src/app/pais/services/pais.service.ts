import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

   private apiUrl : string = 'https://restcountries.com/v3.1';

   get httpParams(){
    return  new HttpParams().set('fields','fields=name,capital,alpha2code,flag,population,flags');

   }

  constructor(private http : HttpClient) { }

  buscarPais( termino : string) : Observable<Country[]>{

     const url = `${this.apiUrl}/name/${termino}`;
    //  return this.http.get<Country[]>(url, {params: this.httpParams});
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

   buscaRegion( region : string){

    // configurar los params de le petiion
    const  params = new HttpParams()
       .set('fields','name,capital,alpha2code,flag,population,flags, common');



    // https://restcountries.com/v3.1/region/europe
       const url=`${this.apiUrl}/region/${region}`;
       return this.http.get<Country[]>(url,{params})
       .pipe(
        tap(console.log)
        )


   }


}
