import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { SalaTeatro } from 'src/app/models/salaTeatro';

@Component({
  selector: 'app-teatro',
  templateUrl: './teatro.component.html',
  styleUrls: ['./teatro.component.css']
})
export class TeatroComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'cidade', 'cnpj'];
  salas: SalaTeatro[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService) { }

  ngOnInit() {
      // this.getData();
      this.api.getSalaTeatros().subscribe(res => {
        this.salas = res;
        console.log(this.salas);
        this.isLoadingResults = false;
      }, err=> {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

  // async getData() {
  //   this.salas = await this.api.getSalaTeatros().toPromise();
  //   this.isLoadingResults = false;
  //   console.debug('Waiting for promisse get resolved...');
  // }

}
