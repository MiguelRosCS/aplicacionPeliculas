import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InterfazPeliculas } from '../../interfaces/InterfazPeliculas.interface';
import { AplicacionPeliculasService } from '../../servicios/aplicacion-peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.page.html',
  styleUrls: ['./peliculas.page.scss'],
})
export class PeliculasPage implements OnInit {

  cadenaBusqueda: string = '';
  resultado: Observable<InterfazPeliculas>;

  constructor(private appPeliculasService: AplicacionPeliculasService) {
   }

  ngOnInit() {
  }

  cargarBusqueda(){
    this.resultado = this.appPeliculasService.buscarPelicula(this.cadenaBusqueda);
  }
}
