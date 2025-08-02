import { Component, OnInit  } from '@angular/core';
import { MockErrorService } from '../services/mock-errors.service';
import { lastValueFrom } from 'rxjs';
import { ErrorList } from '../models/errorLogs';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { ErrorsService } from '../services/errors.service';
import { LoaderService } from '../services/loader.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    standalone: false,
})
export class AppComponent implements OnInit{
  title = 'error-logger';
  userSelected:string = 'User1';
  selectedMicroservicesId: string[] = [];
  startDate: Date[] | undefined = undefined;
  endDate: Date[] | undefined = undefined; 
  errorList: ErrorList[] = []

  microservices: {id:number,name:string}[] = [];

  constructor(private errorService: MockErrorService,private loaderService:LoaderService){}

  ngOnInit(){
    lastValueFrom(this.errorService.getErrorsList()).then(res =>{
      this.errorList = res;
    })
     setTimeout(() => this.loaderService.show(), 1000);
  setTimeout(() => this.loaderService.hide(), 5000);
  }

  exportToPDF() {
    const doc = new jsPDF();
    const filename = "exception-detials" + new Date();
    // Define columns and rows
    const columns = ['Exception', 'Occurences', 'Root Cause', 'Possible Solutions'];
    const rows = this.errorList.map(row => [row.exception, row.occurrence, row.rootCause, row.possibleSolutions]);

    // Add table to PDF
    autoTable(doc, {
      head: [columns],
      body: rows,
    });

    doc.save(filename);
  }
}
