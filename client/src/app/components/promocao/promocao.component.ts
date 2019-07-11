import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Promocao } from 'src/app/models/promocao';

@Component({
  selector: 'app-promocao',
  templateUrl: './promocao.component.html',
  styleUrls: ['./promocao.component.css']
})
export class PromocaoComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nomePeca', 'horario', 'preco', 'sala', 'site', 'edit', 'delete'];
  promocoes: Promocao[] = [];
  isLoadingResults = false;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    this.promocoes = await this.api.getPromocoes().toPromise();
    this.isLoadingResults = false;
  }

  async deleteItem(id: number) {
    console.log(`trying to delete ${id}`)
    await this.api.deletePromocao(id).toPromise();
    this.getData();
  }

}
