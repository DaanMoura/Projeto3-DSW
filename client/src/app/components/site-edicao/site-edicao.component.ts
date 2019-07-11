
  import { Component, OnInit } from '@angular/core';
  import { AppRoutingModule } from 'src/app/app-routing.module';
  import { ApiService } from 'src/app/services/api.service';
  import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
  import { Router, ActivatedRoute } from '@angular/router';
  import { Site } from 'src/app/models/site';
  
  @Component({
    selector: 'app-site-edicao',
    templateUrl: './site-edicao.component.html',
    styleUrls: ['./site-edicao.component.css']
  })
  export class SiteEdicaoComponent implements OnInit {
    siteForm: FormGroup;
    id: number = null;
    selected: Site = null;
    sites: Site[];
    isLoadingResults = false;
    constructor(private router: Router,private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }
  
    getSites(id) {
      this.api.getSite(id).subscribe(data => {
        this.id= data.id;
        this.siteForm.setValue({
          url: data.url,
          nome: data.nome,
          telefone: data.telefone,
          email: data.email,
          senha: data.senha
        });
        this.selected = data; 
        this.isLoadingResults = false;
      });
    }
  
  
  ngOnInit() {
      this.isLoadingResults = true;
      this.selected = new Site();
      this.api.getSites()
        .subscribe(res => {
          this.sites = res;
          console.log(this.sites);
        }, err => {
          console.log(err);
        });
      this.getSites(this.route.snapshot.params['id']);
      this.siteForm = this.formBuilder.group({
        'url': [null, Validators.required],
        'nome': [null, Validators.required],
        'telefone': [null, Validators.required],
        'email': [null, Validators.required],
        'senha': [new Site(), Validators.required]
      });
    }
  
  
  onFormSubmit(form:Site) {
      this.isLoadingResults = true;
      this.api.updateSite(this.id, form)
        .subscribe(res => {
            this.isLoadingResults = false;
            this.router.navigate(['/site']);
          }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
          }
        );
    }
  }
  
  