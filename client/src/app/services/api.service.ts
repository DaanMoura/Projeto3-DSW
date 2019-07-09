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

  getSalaTeatros(): Observable<SalaTeatro[]> {
    const url = `${apiUrl}/salaTeatro`;
    return this.http.get<SalaTeatro[]>(url).pipe(
      tap(_ => console.log('getSalaTeatros')),
      catchError(this.handleError('getSalaTeatros',[]))
    );
  }

  getSalaTeatro(id: number): Observable<SalaTeatro> {
    const url = `${apiUrl}/salaTeatro/${id}`;
    return this.http.get<SalaTeatro>(url).pipe(
      tap(_ => console.log(`getSalaTeatro id=${id}`)),
      catchError(this.handleError<SalaTeatro>(`getSalaTeatro id=${id}`))
    );
  }

  addSalaTeatro(sala: SalaTeatro): Observable<SalaTeatro> {
    const url = `${apiUrl}/salaTeatro`;
    return this.http.post<SalaTeatro>(url, sala, httpOptions).pipe(
      tap((sala: SalaTeatro) => console.log(`addSalaTeatro w/id=${sala.id}`)),
      catchError(this.handleError<SalaTeatro>('addSalaTeatro'))
    );
  }

  updateSalaTeatro(id: number, sala: SalaTeatro): Observable<SalaTeatro> {
    const url = `${apiUrl}/salaTeatro/${id}`;
    return this.http.put(url, sala, httpOptions).pipe(
      tap(_ => console.log(`updateSalaTeatro id=${id}`)),
      catchError(this.handleError<any>('updateSalaTeatro'))
    );
  }

  deleteSalaTeatro(id: number): Observable<SalaTeatro> {
    const url = `${apiUrl}/salaTeatro/${id}`;
    return this.http.delete<SalaTeatro>(url).pipe(
      tap(_ => console.log(`deleteSalaTeatro id=${id}`)),
      catchError(this.handleError<SalaTeatro>('deleteSalaTeatro'))
    );
  }

  getPromocoes(): Observable<Promocao[]> {
    const url = `${apiUrl}/promocao`;
    return this.http.get<Promocao[]>(url).pipe(
      tap(_ => console.log('getPromocoes')),
      catchError(this.handleError('getPromocoes',[]))
    );
  }

  getPromocao(id: number): Observable<Promocao> {
    const url = `${apiUrl}/promocao/${id}`;
    return this.http.get<Promocao>(url).pipe(
      tap(_ => console.log(`getPromocao id=${id}`)),
      catchError(this.handleError<Promocao>(`getSite id=${id}`))
    );
  }

  addPromocao(promocao: Promocao): Observable<Promocao> {
    const url = `${apiUrl}/promocao`;
    return this.http.post<Promocao>(url, promocao, httpOptions).pipe(
      tap((promocao: Promocao) => console.log(`addPromocao w/id=${promocao.id}`)),
      catchError(this.handleError<Promocao>('addPromocao'))
    );
  }

  updatePromocao(id: number, promocao: Promocao): Observable<Promocao> {
    const url = `${apiUrl}/promocao/${id}`;
    return this.http.put(url, promocao, httpOptions).pipe(
      tap(_ => console.log(`updatePromocao id=${id}`)),
      catchError(this.handleError<any>('updatePromocao'))
    );
  }

  deletePromocao(id: number): Observable<Promocao> {
    const url = `${apiUrl}/promocao/${id}`;
    return this.http.delete<Promocao>(url).pipe(
      tap(_ => console.log(`deletePromocao id=${id}`)),
      catchError(this.handleError<Promocao>('deletePromocao'))
    );
  }
}
