import { Component } from '@angular/core';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-load-spinner',
  standalone: false,
  templateUrl: './load-spinner.component.html' ,
  styleUrl: './load-spinner.component.scss'
})
export class LoadSpinnerComponent {
  constructor(public loaderService: LoaderService){}
}
