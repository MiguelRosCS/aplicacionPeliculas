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
  peliculas: Observable<InterfazPeliculas>;

  constructor(private aplicacionPeliculasService: AplicacionPeliculasService) { }

  ngOnInit() {
  }

  cargarBusqueda(){
    this.peliculas = this.aplicacionPeliculasService.buscarPelicula(this.cadenaBusqueda);
  }
}
