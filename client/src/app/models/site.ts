export class Site {

    constructor(id: number, url: string, telefone: string, nome:string, senha: string, email: string){
        this.id = id;
        this.url = url;
        this.telefone = telefone;
        this.nome = nome;
        this.senha = senha;
        this.email = email;
    }

    id: number;
    url: string;
    telefone: string;
    nome: string;
    senha: string;
    email: string;
}