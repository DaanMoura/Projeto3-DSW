import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Site } from 'src/app/models/site';

@Component({
  selector: 'app-site-cadastro',
  templateUrl: './site-cadastro.component.html',
  styleUrls: ['./site-cadastro.component.css']
})
export class SiteCadastroComponent implements OnInit {
  siteForm: FormGroup;
  sites: Site[];
  isLoadingResults = false;
  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.siteForm = this.formBuilder.group({
      'url': [null, Validators.required],
      'telefone': [null, Validators.required],
      'nome': [null, Validators.required],
      'senha': [null, Validators.required],
      'email': [null, Validators.required]
  });
  this.api.getSites()
      .subscribe(res => {
        this.sites = res;
        this.isLoadingResults = false;
      }, err => {
        this.isLoadingResults = false;
      });
  }
}
