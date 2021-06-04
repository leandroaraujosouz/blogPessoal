import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { TemaComponent } from './tema/tema.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { IncioComponent } from './incio/incio.component';

const routes: Routes = [
  {
    path:'', redirectTo: 'entrar', pathMatch: 'full'
  },
  {
    path:'entrar', component: EntrarComponent
  },
  {
    path: 'cadastrar', component: CadastrarComponent
  },
  {
    path: 'inicio', component: IncioComponent
  },
  {
    path: 'tema', component: TemaComponent
  },
  {
    path: 'tema-edit/:id', component: TemaEditComponent
  },
  {
    path: 'tema-delete/:id', component: TemaDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
