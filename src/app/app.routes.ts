import { Routes } from '@angular/router';
import { VoucherGridComponent } from './voucher/voucher-grid/voucher-grid.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./voucher/voucher.module').then(m => m.VoucherModule)
  },
];
