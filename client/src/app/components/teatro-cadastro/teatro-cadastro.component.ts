import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { SalaTeatro } from 'src/app/models/salaTeatro';
import { Validacoes } from 'src/app/components/teatro-cadastro/validacoes';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teatro-cadastro',
  templateUrl: './teatro-cadastro.component.html',
  styleUrls: ['./teatro-cadastro.component.css']
})
export class TeatroCadastroComponent implements OnInit {

  title = 'Venda ingressos';

  formularioDeTeatro: FormGroup;

  constructor(private fb: FormBuilder,private api:ApiService, private router: Router){}

  ngOnInit(): void{
      this.criarFormularioDeTeatro();
  }
  
  criarFormularioDeTeatro(){
      this.formularioDeTeatro = this.fb.group({
          nome: [null,
          Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(100)])
          ],
          cnpj: [null, Validators.compose([Validators.required, 
                                         Validators.minLength(14), 
                                         Validators.maxLength(14), Validacoes.ValidaCNPJ])],
          cidade: [null, Validators.compose([Validators.required 
                                          ,Validators.minLength(3)])],
          email: [null, Validators.compose([Validators.required ,Validators.email])],
          senha: [null, Validators.compose([Validators.required, 
                                         Validators.minLength(6), 
                                         Validators.maxLength(12)])
          ],
      },
    );
  }
  
  onFormSubmit(form: any) {
    this.api.addSalaTeatro(form).subscribe(res => {
      this.router.navigate(['/teatro']);
    }, err => {
      console.log(err);
    });
  }

}
