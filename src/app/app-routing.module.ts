import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
    path: '',
    redirectTo: 'peliculas',
    pathMatch: 'full'
  },
  {
    path: 'peliculas',
    loadChildren: () => import('./paginas/peliculas/peliculas.module').then( m => m.PeliculasPageModule)
  },
  {
    path: 'detalles/:id',
    loadChildren: () => import('./paginas/detalles/detalles.module').then( m => m.DetallesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
