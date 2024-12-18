import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    loadChildren: () => import('./paginas/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'arrendador',
    loadChildren: () => import('./paginas/arrendador/arrendador.module').then( m => m.ArrendadorPageModule)
  },
  {
    path: 'arrendatario',
    loadChildren: () => import('./paginas/arrendatario/arrendatario.module').then( m => m.ArrendatarioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
