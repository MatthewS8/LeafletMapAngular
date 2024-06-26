import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordsComponent } from './coords.component';

describe('CoordsComponent', () => {
  let component: CoordsComponent;
  let fixture: ComponentFixture<CoordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoordsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
