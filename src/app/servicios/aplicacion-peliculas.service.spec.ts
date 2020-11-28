import { TestBed } from '@angular/core/testing';

import { AplicacionPeliculasService } from './aplicacion-peliculas.service';

describe('AplicacionPeliculasService', () => {
  let service: AplicacionPeliculasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AplicacionPeliculasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
