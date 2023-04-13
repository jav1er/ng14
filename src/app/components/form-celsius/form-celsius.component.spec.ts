import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCelsiusComponent } from './form-celsius.component';

describe('FormCelsiusComponent', () => {
  let component: FormCelsiusComponent;
  let fixture: ComponentFixture<FormCelsiusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCelsiusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCelsiusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
