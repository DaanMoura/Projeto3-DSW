import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { Promocao } from 'src/app/models/promocao';
import { Site } from 'src/app/models/site';
import { SalaTeatro } from 'src/app/models/salaTeatro';


@Component({
  selector: 'app-promocao-cadastro',
  templateUrl: './promocao-cadastro.component.html',
  styleUrls: ['./promocao-cadastro.component.css']
})
export class PromocaoCadastroComponent implements OnInit {
  sites: Site[];
  salas: SalaTeatro[];
  isLoadingResults: boolean;
  formularioDePromocao: FormGroup;

  constructor(private fb: FormBuilder,private api:ApiService, private router: Router) { }

  ngOnInit() {
    this.api.getSites()
      .subscribe(res => {
        this.sites = res;
        console.log(this.sites);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
      this.api.getSalaTeatros()
      .subscribe(res => {
        this.salas = res;
        console.log(this.salas);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
      this.criaFormularioDePromocao();
  }

  criaFormularioDePromocao(){
    this.formularioDePromocao = this.fb.group({
      horario:[null,Validators.required],
      nomePeca:[null,Validators.compose([Validators.required,Validators.maxLength(100)])],
      preco:[null,Validators.compose([Validators.required,Validators.min(0.01)])],
      sala:[null,Validators.required],
      site:[null,Validators.required]
    })

  }

  onFormSubmit(form: Promocao){
    console.log(form);

    form.horario = new Date(form.horario);
    
    if(!(form.horario && form.nomePeca && form.preco && form.sala && form.site)){
      alert(`Tem algo null: ${JSON.stringify(form)}`)
    } else{
      this.api.addPromocao(form).subscribe(res =>{ console.log(res);
        this.router.navigate(['/promocao']);
      },err => {console.log(err)});
    }
  }
  getNomePeca(){
    return this.formularioDePromocao.get('nomePeca');

}
  getHorario(){
    return this.formularioDePromocao.get('horario');
  }
  getPreco(){
    return this.formularioDePromocao.get('preco');
  }
  getSala(){
    return this.formularioDePromocao.get('sala');
  }
  getSite(){
    return this.formularioDePromocao.get('site');
  }

}