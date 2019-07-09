import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Teatro } from 'src/app/models/teatro';
import { Validacoes } from 'src/app/components/teatro-cadastro/validacoes';

@Component({
  selector: 'app-teatro-cadastro',
  templateUrl: './teatro-cadastro.component.html',
  styleUrls: ['./teatro-cadastro.component.css']
})
export class TeatroCadastroComponent implements OnInit {

  title = 'Venda ingressos';

  formularioDeTeatro: FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit(): void{
      this.criarFormularioDeTeatro();
  }

  enviarDados(){

      const dadosFormulario = this.formularioDeTeatro.value;

      const teatro = new Teatro(
        dadosFormulario.nome,
        dadosFormulario.cnpj,
        dadosFormulario.cidade,
        dadosFormulario.email,
        dadosFormulario.senha
      );

      //so pra testar
      if(dadosFormulario.nome && dadosFormulario.cnpj && dadosFormulario.cidade && dadosFormulario. email && dadosFormulario.senha){
        alert(`O teatro ${teatro.nome} foi cadastrado com sucesso. \n Dados: ${JSON.stringify(teatro)}`);
      }
      this.formularioDeTeatro.reset();
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

  get nome() {
    return this.formularioDeTeatro.get('nome');
  }

  get email() {
    return this.formularioDeTeatro.get('email');
  }

  get cnpj() {
    return this.formularioDeTeatro.get('cnpj');
  }


}
