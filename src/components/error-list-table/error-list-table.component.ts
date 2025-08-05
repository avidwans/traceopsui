import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ErrorList } from '../../models/errorLogs';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { ErrorsService } from '../../services/errors.service';
import { LoaderService } from '../../services/loader.service';
import { MockErrorService } from '../../services/mock-errors.service';
import { lastValueFrom } from 'rxjs';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-error-list-table',
  standalone: false,
  templateUrl: './error-list-table.component.html',
  styleUrl: './error-list-table.component.scss'
})
export class ErrorListTableComponent implements OnInit {

  startDate: Date =  DateTime.now().minus({ days: 7 }).startOf('day').toJSDate();
  endDate: Date = DateTime.now().toJSDate();
  errorList: ErrorList[] = []

  constructor(private errorService: ErrorsService,private loaderService:LoaderService){}

  ngOnInit(){
    this.getErrorsLogsList(this.startDate,this.endDate)
  }

  exportToPDF() {
    const doc = new jsPDF();
    const filename = "exception-details" + DateTime.now().toUTC().toISO();
    // Define columns and rows
    const columns = ['Microservices', 'Exception', 'Occurences', 'Root Cause', 'Possible Solutions'];
    const rows = this.errorList.map(row => [row.microservices, row.exception, row.occurrence, row.rootCause, row.possibleSolutions]);

    // Add table to PDF
    autoTable(doc, {
      head: [columns],
      body: rows,
    });

    doc.save(filename);
  }

  searchRecords(): void{
    this.getErrorsLogsList(this.startDate,this.endDate);
  }

  private getErrorsLogsList(startDate: Date, endDate: Date): void{
     lastValueFrom(this.errorService.getErrorsList()).then(res =>{
      this.errorList = res;
    })
  }
}
