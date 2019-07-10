export class SalaTeatro {

    constructor(nome: string, cnpj: string, cidade: string, email: string, senha: string){
        this.nome = nome;
        this.cnpj = cnpj;
        this.cidade = cidade;
        this.email = email;
        this.senha = senha;
}
    cidade: string;
    cnpj: string;
    nome: string;
    senha: string;
    email: string;
}