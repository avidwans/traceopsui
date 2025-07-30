import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ErrorList } from "../models/errorLogs";
import { ErrorsService } from "./errors.service";

@Injectable({
  providedIn: 'root'
})
export class MockErrorService extends ErrorsService {

  constructor(protected override http: HttpClient) {super(http)}

  override getErrorsList(): Observable<ErrorList[]> {
    return this.http.get<ErrorList[]>('assets/mockJson/errorsList.json');
  }
}