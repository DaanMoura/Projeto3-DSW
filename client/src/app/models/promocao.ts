import { Site } from "./site";
import { SalaTeatro } from "./salaTeatro";
import { Time } from '@angular/common';

export class Promocao {
    id: number;
    horario: Date;
    nomePeca: string;
    preco: number;
    sala: SalaTeatro;
    site: Site;
}