import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ErrorList } from '../../models/errorLogs';

@Component({
  selector: 'app-error-list-table',
  standalone: false,
  templateUrl: './error-list-table.component.html',
  styleUrl: './error-list-table.component.scss'
})
export class ErrorListTableComponent implements OnChanges {

  @Input() errorLogs:ErrorList[] = []

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['errorLogs']){
    }
  }

}
