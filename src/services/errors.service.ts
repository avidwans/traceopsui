import { Injectable } from '@angular/core';
import { ErrorList } from '../models/errorLogs';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {

  constructor(protected http: HttpClient) { }

  getErrorsList(): Observable<ErrorList[]>{
    throw new Error('Real service not implemented');
  }
}
