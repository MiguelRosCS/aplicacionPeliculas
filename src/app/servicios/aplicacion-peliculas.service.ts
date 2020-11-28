import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AplicacionPeliculasService {

  private claveAPI: string='dc973294';
  private url: string='';

  constructor(private http: HttpClient) { }

  buscarPelicula(title:string){
    this.url = `http://www.omdbapi.com/?s=${title}&apikey=${this.claveAPI}`;
    return this.http.get(this.url).pipe(map(results => results['Search']));
  }

  verDetalles(id:string){
    return this.http.get(`http://www.omdbapi.com/?i=${id}&apikey=${this.claveAPI}`);
  }
}
