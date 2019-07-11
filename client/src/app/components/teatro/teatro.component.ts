import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { SalaTeatro } from 'src/app/models/salaTeatro';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teatro',
  templateUrl: './teatro.component.html',
  styleUrls: ['./teatro.component.css']
})
export class TeatroComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'cidade', 'cnpj', 'edit', 'delete'];
  salas: SalaTeatro[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    this.salas = await this.api.getSalaTeatros().toPromise();
    this.isLoadingResults = false;
  }

  async deleteItem(id: number) {
    console.log(`delete ${id}`)
    await this.api.deleteSalaTeatro(id).toPromise();
    this.router.navigate(['/teatro']);
    this.getData();
  }

}
