import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeatroComponent } from './components/teatro/teatro.component';
import { TeatroCadastroComponent } from './components/teatro-cadastro/teatro-cadastro.component';
import { TeatroEdicaoComponent } from './components/teatro-edicao/teatro-edicao.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
   MatSelectModule,
   MatInputModule,
   MatPaginatorModule,
   MatProgressSpinnerModule,
   MatSortModule,
   MatToolbarModule,
   MatTableModule,
   MatIconModule,
   MatButtonModule,
   MatCardModule,
   MatFormFieldModule } from "@angular/material";

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SiteComponent } from './components/site/site.component';
import { SiteCadastroComponent } from './components/site-cadastro/site-cadastro.component';
import { SiteEdicaoComponent } from './components/site-edicao/site-edicao.component';
import { PromocaoComponent } from './components/promocao/promocao.component';
import { PromocaoCadastroComponent } from './components/promocao-cadastro/promocao-cadastro.component';
import { PromocaoEdicaoComponent } from './components/promocao-edicao/promocao-edicao.component';

@NgModule({
  declarations: [
    AppComponent, 
    TeatroComponent,
    TeatroCadastroComponent,
    TeatroEdicaoComponent,
    SiteComponent,
    SiteCadastroComponent,
    SiteEdicaoComponent,
    PromocaoComponent,
    PromocaoCadastroComponent,
    PromocaoEdicaoComponent ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    HttpClientModule,
    AppRoutingModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatToolbarModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
