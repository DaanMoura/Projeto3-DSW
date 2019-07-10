import { Component, OnInit } from '@angular/core';
import { Site } from 'src/app/models/site';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

  displayedColumns: string[] = ['id','nome','url','telefone'];
  sites: Site[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    this.sites = await this.api.getSites().toPromise();
    this.isLoadingResults = false;
  }

}
