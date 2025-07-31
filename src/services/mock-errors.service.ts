import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ErrorList } from "../models/errorLogs";
import { ErrorsService } from "./errors.service";

@Injectable({
  providedIn: 'root'
})
export class MockErrorService extends ErrorsService {

  constructor(protected override httpClient: HttpClient) {super(httpClient)}

  override getErrorsList(): Observable<ErrorList[]> {
    return this.httpClient.get<ErrorList[]>('assets/mockJson/errorsList.json');
  }
}