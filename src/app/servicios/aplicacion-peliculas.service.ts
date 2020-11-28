import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

import{ InterfazPeliculas } from '../interfaces/InterfazPeliculas.interface'

@Injectable({
  providedIn: 'root'
})
export class AplicacionPeliculasService {

  private claveAPI: string='dc973294';
  private url: string='';

  constructor(private http: HttpClient) { }

  buscarPelicula(title:string){
    this.url = `http://www.omdbapi.com/?s=${title}&apikey=${this.claveAPI}`;
    console.log(this.url)
    return this.http.get<InterfazPeliculas>(this.url)
  }

  verDetalles(id:string){
    return this.http.get<InterfazPeliculas>(`http://www.omdbapi.com/?i=${id}&apikey=${this.claveAPI}`);
  }
}
