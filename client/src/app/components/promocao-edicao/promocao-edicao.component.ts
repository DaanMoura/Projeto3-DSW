
  import { Component, OnInit } from '@angular/core';
  import { AppRoutingModule } from 'src/app/app-routing.module';
  import { ApiService } from 'src/app/services/api.service';
  import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
  import { Router, ActivatedRoute } from '@angular/router';
  import { Promocao } from 'src/app/models/promocao';
  
  @Component({
    selector: 'app-promocao-edicao',
    templateUrl: './promocao-edicao.component.html',
    styleUrls: ['./promocao-edicao.component.css']
  })
  export class PromocaoEdicaoComponent implements OnInit {
    formularioDePromocao: FormGroup;
    id: number = null;
    selected: Promocao = null;
    promocoes: Promocao[];
    isLoadingResults = false;
    constructor(private router: Router,private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }
  
    GetPromocoes(id) {
      this.api.getPromocao(id).subscribe(data => {
        this.id= data.id;
        this.formularioDePromocao.setValue({
          nomePeca: data.nomePeca,
          horario: data.horario,
          preco: data.preco,
          sala: data.sala,
          site: data.site
        });
        this.selected = data; 
        this.isLoadingResults = false;
      });
    }
  
  
  ngOnInit() {
      this.isLoadingResults = true;
      this.selected = new Promocao();
      this.api.getPromocoes()
        .subscribe(res => {
          this.promocoes = res;
          console.log(this.promocoes);
        }, err => {
          console.log(err);
        });
      this.GetPromocoes(this.route.snapshot.params['id']);
      this.formularioDePromocao = this.formBuilder.group({
        'nomePeca': [null, Validators.required],
        'horario': [null, Validators.required],
        'preco': [null, Validators.required],
        'sala': [null, Validators.required],
        'site': [new Promocao(), Validators.required]
      });
    }
  
  
  onFormSubmit(form:Promocao) {
      this.isLoadingResults = true;
      this.api.updatePromocao(this.id, form)
        .subscribe(res => {
            this.isLoadingResults = false;
            this.router.navigate(['/promocao']);
          }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
          }
        );
    }
  }
  
  