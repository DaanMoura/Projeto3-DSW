import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { SalaTeatro } from 'src/app/models/salaTeatro';

@Component({
  selector: 'app-teatro',
  templateUrl: './teatro.component.html',
  styleUrls: ['./teatro.component.css']
})
export class TeatroComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'cidade', 'cnpj', 'edit', 'delete'];
  salas: SalaTeatro[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    this.salas = await this.api.getSalaTeatros().toPromise();
    this.isLoadingResults = false;
  }

}
