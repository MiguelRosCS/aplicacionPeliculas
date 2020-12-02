import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InterfazPeliculas } from '../../interfaces/InterfazPeliculas.interface';
import { AplicacionPeliculasService } from '../../servicios/aplicacion-peliculas.service';

import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

  argumentos= null;
  constructor(private route: ActivatedRoute, private aplicacionPeliculasService: AplicacionPeliculasService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.aplicacionPeliculasService.verDetalles(id).subscribe(peli => this.argumentos = peli);
    }

}
