import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IndexDbService } from '../../shared/services/index-db.service';

@Component({
  selector: 'app-purchase-voucher',
  templateUrl: './purchase-voucher.component.html',
  styleUrl: './purchase-voucher.component.scss'
})
export class PurchaseVoucherComponent {
  creditCardForm!: FormGroup;

  constructor(private fb: FormBuilder, private indexDbService:IndexDbService) {}

  ngOnInit(): void {
    this.creditCardForm = this.fb.group({
      cardholderName: ['', [Validators.required, Validators.minLength(3)]],
      cardNumber: ['', [Validators.required]],
      expirationDate: ['', [Validators.required]],
      cvv: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  onSubmit() {
    if (this.creditCardForm.valid) {
      const formData = this.creditCardForm.value;
    }
  }

}
