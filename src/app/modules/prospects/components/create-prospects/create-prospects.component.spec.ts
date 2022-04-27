import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProspectsComponent } from './create-prospects.component';

describe('CreateProspectsComponent', () => {
  let component: CreateProspectsComponent;
  let fixture: ComponentFixture<CreateProspectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProspectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProspectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
