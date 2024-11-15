import { Component, OnInit } from '@angular/core';
import { IndexDbService } from '../../shared/services/index-db.service';
import { Voucher } from '../../shared/models/voucher';

@Component({
  selector: 'app-voucher-grid',
  templateUrl: './voucher-grid.component.html',
  styleUrl: './voucher-grid.component.scss',
})
export class VoucherGridComponent implements OnInit {
  vouchers: Voucher[] = []
  constructor(private indexDbService: IndexDbService) {}
  ngOnInit(): void {

    this.indexDbService.getVouchers().subscribe(vouchers => {
      this.vouchers = vouchers;
      console.log(this.vouchers);
    })
  }
}
