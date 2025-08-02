import { Component } from '@angular/core';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-load-spinner',
  standalone: false,
  template: ` <div *ngIf="loaderService.loading$ | async" class="spinner-overlay">
      <div class="custom-spinner"></div>
    </div>`,
  styleUrl: './load-spinner.component.scss'
})
export class LoadSpinnerComponent {
  constructor(public loaderService: LoaderService){}
}
