import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TeatroComponent } from './components/teatro/teatro.component';
import { TeatroCadastroComponent } from './components/teatro-cadastro/teatro-cadastro.component';
import { TeatroEdicaoComponent } from './components/teatro-edicao/teatro-edicao.component';


const routes: Routes = [
  {
    path: 'teatro', component: TeatroComponent, data: { title: 'Lista de Teatros' }
  },
  {
    path: 'teatro-cadastro', component: TeatroCadastroComponent, data: { title: 'Cadastro Teatro' }
  },
  {
    path: 'teatro-edicao/:id', component: TeatroEdicaoComponent, data: { title: 'Edição Teatro' }
  },
  {
     path: '', redirectTo: '/teatro', pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
