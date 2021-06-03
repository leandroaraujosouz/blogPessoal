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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
