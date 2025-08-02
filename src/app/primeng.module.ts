// Import PrimeNG modules
import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card'; 
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
    imports: [
        AccordionModule,
        ButtonModule,
        CalendarModule,
        DatePickerModule,
        SelectModule,
        FieldsetModule,
        InputTextModule,
        TableModule,
        CardModule,
        ProgressSpinnerModule
    ],
    exports: [
        AccordionModule,
        ButtonModule,
        CalendarModule,
        DatePickerModule,
        SelectModule,
        FieldsetModule,
        InputTextModule,
        TableModule,
        CardModule,
        ProgressSpinnerModule
    ]
})
export class PrimeNgModule { }