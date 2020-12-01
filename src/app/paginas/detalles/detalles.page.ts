import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InterfazPeliculas } from '../../interfaces/InterfazPeliculas.interface';
import { AplicacionPeliculasService } from '../../servicios/aplicacion-peliculas.service';


@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

  constructor(private aplicacionPeliculasService: AplicacionPeliculasService) { }

  ngOnInit() {
  }

}
