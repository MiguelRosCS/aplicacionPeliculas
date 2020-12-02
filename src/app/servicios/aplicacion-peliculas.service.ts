import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import{ InterfazPeliculas } from '../interfaces/InterfazPeliculas.interface'

@Injectable({
  providedIn: 'root'
})
export class AplicacionPeliculasService {

  private claveAPI: string = 'dc973294';
  private url: string = '';

  constructor(private http: HttpClient) { }

  buscarPelicula(title:string){
    this.url = 'http://www.omdbapi.com/?s=' + title + '&apikey=' + this.claveAPI;
    //console.log(this.url);
    //hay que filtrar los resultados con la devuelta Search que da la API, y meter el contenido en array 
    return this.http.get<InterfazPeliculas>(this.url).pipe(
        map(resultados => resultados['Search'])
      ); 
  }

  verDetalles(id:string){
    this.url = 'http://www.omdbapi.com/?i=' + id + '&apikey=' + this.claveAPI;
    //console.log(this.url);
    return this.http.get<InterfazPeliculas>(this.url);
  }

}
