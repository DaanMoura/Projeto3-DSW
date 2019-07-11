
  import { Component, OnInit } from '@angular/core';
  import { AppRoutingModule } from 'src/app/app-routing.module';
  import { ApiService } from 'src/app/services/api.service';
  import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
  import { Router, ActivatedRoute } from '@angular/router';
  import { SalaTeatro } from 'src/app/models/salaTeatro';
  
  @Component({
    selector: 'app-teatro-edicao',
    templateUrl: './teatro-edicao.component.html',
    styleUrls: ['./teatro-edicao.component.css']
  })
  export class TeatroEdicaoComponent implements OnInit {
    formularioDeTeatro: FormGroup;
    id: number = null;
    selected: SalaTeatro = null;
    teatros: SalaTeatro[];
    isLoadingResults = false;
    constructor(private router: Router,private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }
  
    getSalaTeatros(id) {
      this.api.getSalaTeatro(id).subscribe(data => {
        this.id= data.id;
        this.formularioDeTeatro.setValue({
          cnpj: data.cnpj,
          nome: data.nome,
          cidade: data.cidade,
          email: data.email,
          senha: data.senha
        });
        this.selected = data; 
        this.isLoadingResults = false;
      });
    }
  
  
  ngOnInit() {
      this.isLoadingResults = true;
      this.selected = new SalaTeatro();
      this.api.getSalaTeatros()
        .subscribe(res => {
          this.teatros = res;
          console.log(this.teatros);
        }, err => {
          console.log(err);
        });
      this.getSalaTeatros(this.route.snapshot.params['id']);
      this.formularioDeTeatro = this.formBuilder.group({
        'cnpj': [null, Validators.required],
        'nome': [null, Validators.required],
        'cidade': [null, Validators.required],
        'email': [null, Validators.required],
        'senha': [new SalaTeatro(), Validators.required]
      });
    }
  
  
  onFormSubmit(form: SalaTeatro) {
      this.isLoadingResults = true;
      this.api.updateSalaTeatro(this.id, form)
        .subscribe(res => {
            let id = res['id']; 
            this.isLoadingResults = false;
            this.router.navigate(['/teatro', id]);
          }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
          }
        );
    }
  }
  
  