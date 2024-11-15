import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoucherGridComponent } from './voucher-grid/voucher-grid.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { VoucherComponent } from './voucher/voucher.component';
import { VoucherRoutingModule } from './voucher-routing.module';

import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';
import { PurchaseVoucherComponent } from './purchase-voucher/purchase-voucher.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule, MatDateRangePicker } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const dbConfig: DBConfig = {
  name: 'voucherDatabase',
  version: 4,
  objectStoresMeta: [
    {
      store: 'client',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'name', keypath: 'name', options: { unique: false } },
        { name: 'categorie', keypath: 'categorie', options: { unique: false } },
        { name: 'email', keypath: 'email', options: { unique: false } },
        { name: 'logo', keypath: 'logo', options: { unique: false } },
        { name: 'password', keypath: 'password', options: { unique: false } },
      ],
    },
    {
      store: 'user',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'name', keypath: 'name', options: { unique: false } },
        { name: 'email', keypath: 'email', options: { unique: false } },
        { name: 'password', keypath: 'password', options: { unique: false } },
      ],
    },
    {
      store: 'voucher',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        {
          name: 'voucher_code',
          keypath: 'voucher_code',
          options: { unique: true },
        },
        {
          name: 'price',
          keypath: 'price',
          options: { unique: false },
        },
        {
          name: 'value',
          keypath: 'value',
          options: { unique: false },
        },
        {
          name: 'image',
          keypath: 'image',
          options: { unique: false },
        },
        {
          name: 'description',
          keypath: 'description',
          options: { unique: false },
        },
        { name: 'is_active', keypath: 'is_active', options: { unique: false } },
        { name: 'client_id', keypath: 'client_id', options: { unique: false } },
      ],
    },
    {
      store: 'voucher_purchases',
      storeConfig: { keyPath: 'purchase_id', autoIncrement: true },
      storeSchema: [
        { name: 'user_id', keypath: 'user_id', options: { unique: false } },
        {
          name: 'voucher_id',
          keypath: 'voucher_id',
          options: { unique: false },
        },
        {
          name: 'purchase_date',
          keypath: 'purchase_date',
          options: { unique: false },
        }
      ],
    },
  ],
};


@NgModule({
  declarations: [VoucherGridComponent, VoucherComponent, PurchaseVoucherComponent],
  exports: [VoucherGridComponent, VoucherComponent, PurchaseVoucherComponent],
  imports: [CommonModule, VoucherRoutingModule, MatCardModule, MatButtonModule, NgxIndexedDBModule.forRoot(dbConfig), ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSnackBarModule],
})
export class VoucherModule {}
