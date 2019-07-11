import { Component, OnInit } from '@angular/core';
import { Site } from 'src/app/models/site';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

  displayedColumns: string[] = ['id','nome','url','telefone', 'edit', 'delete'];
  sites: Site[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    this.sites = await this.api.getSites().toPromise();
    this.isLoadingResults = false;
  }

  async editItem(id: number) {
    console.log(`going to edit ${id}`)
    this.router.navigate(['/site-edicao', id])
  }

  async deleteItem(id: number) {
    console.log(`trying to delete ${id}`)
    await this.api.deleteSite(id).toPromise();
    this.getData();
  }

}
