import { Site } from "./site";
import { SalaTeatro } from "./salaTeatro";
import { Time } from '@angular/common';

export class Promocao {
    id: number;
    horario: Time;
    nomePeca: string;
    preco: number;
    sala: SalaTeatro;
    site: Site;
}