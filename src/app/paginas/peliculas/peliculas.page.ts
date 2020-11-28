import { Component, OnInit } from '@angular/core';
import { AplicacionPeliculasService } from '../../servicios/aplicacion-peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.page.html',
  styleUrls: ['./peliculas.page.scss'],
})
export class PeliculasPage implements OnInit {

  cadenaBusqueda: string = '';
  resultado: Array<Object>;

  constructor(private aplicacionPeliculasService: AplicacionPeliculasService) {
   }

  ngOnInit() {
  }

  cargarBusqueda(){
    this.resultado = this.appPeliculasService.buscarPelicula(this.cadenaBusqueda);
  }
}
