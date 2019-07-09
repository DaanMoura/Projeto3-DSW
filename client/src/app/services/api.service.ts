import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Site } from "../models/site";
import { SalaTeatro } from "../models/salaTeatro";
import { Promocao } from "../models/promocao";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "http://localhost:8080/VendaIngresso";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
    
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getSites(): Observable<Site[]> {
    const url = `${apiUrl}/site`;
    return this.http.get<Site[]>(url).pipe(
      tap(_ => console.log('getSites')),
      catchError(this.handleError('getLivros',[]))
    );
  }

  getSite(id: number): Observable<Site> {
    const url = `${apiUrl}/site/${id}`;
    return this.http.get<Site>(url).pipe(
      tap(_ => console.log(`getSite id=${id}`)),
      catchError(this.handleError<Site>(`getSite id=${id}`))
    );
  }

  addSite(site: Site): Observable<Site> {
    const url = `${apiUrl}/site`;
    return this.http.post<Site>(url, site, httpOptions).pipe(
      tap((site: Site) => console.log(`addSite w/id=${site.id}`)),
      catchError(this.handleError<Site>('addSite'))
    );
  }

  updateSite(id: number, site: Site): Observable<Site> {
    const url = `${apiUrl}/site/${id}`;
    return this.http.put(url, site, httpOptions).pipe(
      tap(_ => console.log(`updateSite id=${id}`)),
      catchError(this.handleError<any>('updateSite'))
    );
  }

  deleteSite(id: number): Observable<Site> {
    const url = `${apiUrl}/site/${id}`;
    return this.http.delete<Site>(url).pipe(
      tap(_ => console.log(`deleteSite id=${id}`)),
      catchError(this.handleError<Site>('deleteSite'))
    );
  }
}
