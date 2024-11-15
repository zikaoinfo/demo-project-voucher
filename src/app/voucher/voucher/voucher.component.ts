import { Component, Input, OnInit } from '@angular/core';
import { Voucher } from '../../shared/models/voucher';
import { NgxEventHubService } from 'ngx-event-hub';
import { IndexDbService } from '../../shared/services/index-db.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrl: './voucher.component.scss'
})
export class VoucherComponent implements OnInit {
    @Input() voucher?: Voucher;
    @Input() isEditable?: boolean = false;
    isUser: boolean = true;
    voucherForm!: FormGroup;
    
    constructor(private ngxEventHubService: NgxEventHubService, private indexDbService: IndexDbService, private snackBar: MatSnackBar, private fb: FormBuilder) {

    }

    ngOnInit() {
      this.voucherForm = this.fb.group({
        voucher_code: ['', [Validators.required, Validators.minLength(3)]],
        price: ['', [Validators.required]],
        value: ['', [Validators.required]],
        is_activated: ['', [Validators.required, Validators.minLength(3)]],
      });
      this.ngxEventHubService.on('userTypeChanged', (userType) => {
        this.isUser = userType === 'user';
      });
    }

    disableVoucher() {
      if(this.voucher) {
        this.voucher.is_active = false;
        this.indexDbService.updateVoucher(this.voucher).subscribe(() => this.snackBar.open(`${this.voucher?.voucher_code} Voucher has been disabled`))
      }
    }

    enableVoucher() {
      if(this.voucher) {
        this.voucher.is_active = true;
        this.indexDbService.updateVoucher(this.voucher).subscribe(() => this.snackBar.open(`${this.voucher?.voucher_code} Voucher has been enabled`))
      }
    }

    createVoucher() {

    }
}
