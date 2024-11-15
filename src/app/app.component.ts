import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterOutlet } from '@angular/router';
import { VoucherModule } from './voucher/voucher.module';

import { NgxIndexedDBService } from 'ngx-indexed-db';
import { IndexDbService } from './shared/services/index-db.service';
import { NgxEventHubService } from 'ngx-event-hub';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIcon,
    MatCardModule,
    VoucherModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [NgxIndexedDBService, IndexDbService],
})
export class AppComponent implements OnInit {
  title = 'voucher-app';
  isUser = false;
  isClient = false;
  constructor(private router: Router, private ngxEventHubService: NgxEventHubService) {}

  ngOnInit() {
    this.updateUser('user');
  }

  updateUser(userType: string) {
  
    if (userType === 'user') {
      this.isUser = true;
      this.isClient = false;
    } else {
      this.isUser = false;
      this.isClient = true;
    }

    this.ngxEventHubService.cast('userTypeChanged', userType);
  }


  goHome() {
    this.router.navigate(['/']);
  }


}
