import { Injectable } from '@angular/core';
import { ErrorList } from '../models/errorLogs';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {

  constructor(protected httpClient: HttpClient) { }

  getErrorsList(): Observable<ErrorList[]>{
    return this.httpClient.get<ErrorList[]>('/api/analzyse')
  }
}
