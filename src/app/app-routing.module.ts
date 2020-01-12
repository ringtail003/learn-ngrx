import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'a',
    loadChildren: () => import('./pages/page-a/module').then((module) => module.PageAModule),
  },
  {
    path: 'b',
    loadChildren: () => import('./pages/page-b/module').then((module) => module.PageBModule),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
