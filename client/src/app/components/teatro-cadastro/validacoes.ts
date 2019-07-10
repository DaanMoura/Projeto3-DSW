import { AbstractControl } from '@angular/forms';

export class Validacoes {
    static ValidaCNPJ(controle: AbstractControl) {
      const cnpj = controle.value;
  
      let soma: number = 0;
      let resto: number;
      let valido: boolean;
  
      const regex = new RegExp('[0-9]{14}');
  
      if (
        cnpj == '00000000000000' ||
        !regex.test(cnpj)
      )
        valido = false;
      else {
        for (let i = 1; i <= 9; i++)
          soma = soma + parseInt(cnpj.substring(i - 1, i)) * (11 - i);
        resto = (soma * 10) % 11;
  
        if (resto == 10 || resto == 11) resto = 0;
        if (resto != parseInt(cnpj.substring(9, 10))) valido = false;
  
        soma = 0;
        for (let i = 1; i <= 10; i++)
          soma = soma + parseInt(cnpj.substring(i - 1, i)) * (12 - i);
        resto = (soma * 10) % 11;
  
        if (resto == 10 || resto == 11) resto = 0;
        if (resto != parseInt(cnpj.substring(10, 11))) valido = false;
        valido = true;
      }
  
      if (valido) return null;
  
      return { cnpjInvalido: true };
    }

    public cpfcnpjmask = function () {
      var numbers = this.usuarioBuscar.login.match(/\d/g);
      var numberLength = 0;
      if (numbers) {
        numberLength = numbers.join('').length;
      }
      if (numberLength <= 11) {
        return [/[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/];
      } else {
        return [/[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/];
      }
    }

  }