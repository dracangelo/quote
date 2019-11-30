import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotDetailComponent } from './quot-detail.component';

describe('QuotDetailComponent', () => {
  let component: QuotDetailComponent;
  let fixture: ComponentFixture<QuotDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
