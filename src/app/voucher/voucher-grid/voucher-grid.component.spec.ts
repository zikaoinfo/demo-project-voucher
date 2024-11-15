import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherGridComponent } from './voucher-grid.component';

describe('VoucherGridComponent', () => {
  let component: VoucherGridComponent;
  let fixture: ComponentFixture<VoucherGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoucherGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoucherGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
