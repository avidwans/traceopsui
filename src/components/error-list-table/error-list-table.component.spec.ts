import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorListTableComponent } from './error-list-table.component';

describe('ErrorListTableComponent', () => {
  let component: ErrorListTableComponent;
  let fixture: ComponentFixture<ErrorListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErrorListTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
