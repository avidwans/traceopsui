import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorListTableComponent } from '../components/error-list-table/error-list-table.component';
import { ErrorsService } from '../services/errors.service';
import { PrimeNgModule } from './primeng.module';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { provideHttpClient } from '@angular/common/http';
import { MockErrorService } from '../services/mock-errors.service';


@NgModule({
  declarations: [
    AppComponent,
    ErrorListTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimeNgModule,
    FormsModule, 
    NgSelectModule
  ],
  providers: [{provide: ErrorsService, useClass: ErrorsService},
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
