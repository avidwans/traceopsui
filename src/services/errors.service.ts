import { Injectable } from '@angular/core';
import { ErrorList } from '../models/errorLogs';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {

  constructor(protected httpClient: HttpClient) { }

  getErrorsList(): Observable<ErrorList[]>{
    return this.httpClient.get<ErrorList[]>('http://localhost:3000/analyse')
  }

  getQueryReply(question: string): Observable<string>{
    return this.httpClient.post<{reply: string}>('http://localhost:3000/chat',{query: question}).pipe(map(r => r.reply))
  }
}
