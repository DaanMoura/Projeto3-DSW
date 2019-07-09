import { Site } from "./site";
import { SalaTeatro } from "./salaTeatro";

export class Promocao {
    id: number;
    horario: Date;
    nomePeca: string;
    preco: number;
    sala: SalaTeatro;
    site: Site;
}