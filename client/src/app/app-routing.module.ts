import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TeatroComponent } from './components/teatro/teatro.component';
import { TeatroCadastroComponent } from './components/teatro-cadastro/teatro-cadastro.component';
import { TeatroEdicaoComponent } from './components/teatro-edicao/teatro-edicao.component';
import { SiteComponent } from './components/site/site.component';
import { SiteCadastroComponent } from './components/site-cadastro/site-cadastro.component';
import { PromocaoComponent } from './components/promocao/promocao.component';
import { PromocaoCadastroComponent } from './components/promocao-cadastro/promocao-cadastro.component';
import { PromocaoEdicaoComponent } from './components/promocao-edicao/promocao-edicao.component';
import { SiteEdicaoComponent } from './components/site-edicao/site-edicao.component';



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
    path: 'site', component: SiteComponent, data: { title: 'Lista de Sites' }
  },
  {
    path: 'site-cadastro', component: SiteCadastroComponent, data: { title: 'Cadastro Site' }
  },
  {
    path: 'site-edicao/:id', component: SiteEdicaoComponent, data: { title: 'Edição Site' }
  },
  {
    path: 'promocao', component: PromocaoComponent, data: { title: 'Lista de Promoções' }
  },
  {
    path: 'promocao-cadastro', component: PromocaoCadastroComponent, data: { title: 'Cadastro Promoção' }
  },
  {
    path: 'promocao-edicao/:id', component: PromocaoEdicaoComponent, data: { title: 'Edição Promoção' }
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
