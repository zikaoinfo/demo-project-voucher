import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VoucherGridComponent } from './voucher-grid/voucher-grid.component';
import { PurchaseVoucherComponent } from './purchase-voucher/purchase-voucher.component';


const routes: Routes = [
  {
    path: '',
    component: VoucherGridComponent
  },
  {
    path: 'purchase/:id',
    component: PurchaseVoucherComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class VoucherRoutingModule { }
